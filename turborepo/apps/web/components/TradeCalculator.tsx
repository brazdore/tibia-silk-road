"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FlatOffer } from "@/lib/types";
import {
  calcCapacity,
  calcProfit,
  formatGp,
  formatWeight,
  type Vocation,
} from "@/lib/calc";
import { useTranslation } from "@/lib/i18n";

interface CalcResult {
  totalOffer: number;
  marketFee: number;
  totalCost: number;
  npcRevenue: number;
  netProfit: number;
  breakEven: number;
}

interface CartEntry {
  id: number;
  offer: FlatOffer;
  quantity: number;
  marketPrice: number;
  result: CalcResult;
}

const FACTIONS = [
  {
    label: "Green Djinn Faction",
    emoji: "🟢",
    npcNames: ["Yaman", "Alesar"],
    color: "var(--positive)",
    rgb: "22 163 74",
  },
  {
    label: "Blue Djinn Faction",
    emoji: "🔵",
    npcNames: ["Nah'Bob", "Haroun"],
    color: "59 130 246",
    rgb: "59 130 246",
  },
] as const;

const card: React.CSSProperties = {
  background: "rgb(var(--panel))",
  border: "1px solid rgb(var(--border))",
  borderRadius: "0.75rem",
  padding: "1.25rem",
  marginBottom: "1rem",
};
const inputStyle: React.CSSProperties = {
  padding: "0.4rem 0.6rem",
  borderRadius: "0.4rem",
  border: "1px solid rgb(var(--border))",
  background: "rgb(var(--panel-strong))",
  color: "rgb(var(--text))",
  fontSize: "0.9rem",
  width: "100%",
};
const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
  fontSize: "0.8rem",
  color: "rgb(var(--muted))",
};
const grid2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.3rem 0.5rem",
  fontSize: "0.8rem",
};

export default function TradeCalculator({
  flatOffers,
}: {
  flatOffers: FlatOffer[];
}) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<FlatOffer | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [marketPrice, setMarketPrice] = useState(0);
  const [includeMarketFee, setIncludeMarketFee] = useState(false);
  const [cart, setCart] = useState<CartEntry[]>([]);
  const [level, setLevel] = useState(100);
  const [vocation, setVocation] = useState<Vocation>("Knight/Monk");
  const [useBackpack, setUseBackpack] = useState(true);
  const [bpSlots, setBpSlots] = useState(20);
  const [bpWeight, setBpWeight] = useState(18);
  const [selectedNpcIds, setSelectedNpcIds] = useState<Set<number>>(new Set());
  const t = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const npcs = useMemo(() => {
    const seen = new Map<
      number,
      { id: number; name: string; iconUrl: string | null }
    >();
    for (const o of flatOffers) {
      if (!seen.has(o.npcId))
        seen.set(o.npcId, {
          id: o.npcId,
          name: o.npcName,
          iconUrl: o.npcIconUrl,
        });
    }
    return Array.from(seen.values());
  }, [flatOffers]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const factionNpcNames = new Set<string>(
    FACTIONS.flatMap((f) => [...f.npcNames]),
  );
  const standaloneNpcs = npcs.filter((n) => !factionNpcNames.has(n.name));

  function clearSelectedIfFiltered(next: Set<number>) {
    if (selected && next.size > 0 && !next.has(selected.npcId)) {
      setSelected(null);
      setSearch("");
    }
  }

  function toggleNpc(id: number) {
    setSelectedNpcIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      clearSelectedIfFiltered(next);
      return next;
    });
  }

  function toggleFaction(ids: number[]) {
    setSelectedNpcIds((prev) => {
      const next = new Set(prev);
      const allIn = ids.every((id) => next.has(id));
      ids.forEach((id) => (allIn ? next.delete(id) : next.add(id)));
      clearSelectedIfFiltered(next);
      return next;
    });
  }

  function npcPillStyle(id: number, accentRgb?: string): React.CSSProperties {
    const isActive = selectedNpcIds.size === 0 || selectedNpcIds.has(id);
    const isSelected = selectedNpcIds.has(id);
    const rgb = accentRgb ?? "var(--accent-gold)";
    return {
      display: "flex",
      alignItems: "center",
      gap: "0.45rem",
      padding: "0.35rem 0.8rem 0.35rem 0.45rem",
      borderRadius: "2rem",
      border: isSelected
        ? `1.5px solid rgb(${rgb})`
        : "1.5px solid rgb(var(--border))",
      background: isSelected
        ? `rgba(${rgb}, 0.13)`
        : "rgb(var(--panel-strong))",
      cursor: "pointer",
      opacity: isActive ? 1 : 0.35,
      transition:
        "opacity 0.15s ease, border-color 0.15s ease, background 0.15s ease",
      fontSize: "0.82rem",
      color: isSelected ? `rgb(${rgb})` : "rgb(var(--text))",
      fontWeight: isSelected ? 600 : 400,
    };
  }

  const filtered = useMemo(
    () =>
      flatOffers.filter((o) => {
        const matchesNpc =
          selectedNpcIds.size === 0 || selectedNpcIds.has(o.npcId);
        const matchesName = o.name.toLowerCase().includes(search.toLowerCase());
        return matchesNpc && matchesName;
      }),
    [flatOffers, search, selectedNpcIds],
  );

  const result = useMemo<CalcResult | null>(() => {
    if (!selected || quantity <= 0 || marketPrice <= 0) return null;
    return calcProfit(
      selected.npcPrice,
      marketPrice,
      quantity,
      includeMarketFee,
    );
  }, [selected, quantity, marketPrice, includeMarketFee]);

  const bulkSummary = useMemo(() => {
    if (cart.length === 0) return null;
    return {
      totalCost: cart.reduce((s, e) => s + e.result.totalCost, 0),
      totalFees: cart.reduce((s, e) => s + e.result.marketFee, 0),
      npcRevenue: cart.reduce((s, e) => s + e.result.npcRevenue, 0),
      netProfit: cart.reduce((s, e) => s + e.result.netProfit, 0),
      totalWeight: cart.reduce((s, e) => s + e.offer.weight * e.quantity, 0),
      totalSlotsNeeded: cart.reduce((s, e) => s + e.quantity, 0),
    };
  }, [cart]);

  const capacitySummary = useMemo(() => {
    if (!bulkSummary || level <= 0) return null;
    const cap = calcCapacity(level, vocation);
    if (cap <= 0)
      return {
        cap: 0,
        travelsBare: null,
        travelsWithBp: null,
        bpAmountNeeded: 0,
        totalBpsWeight: 0,
        totalWeightWithBps: bulkSummary.totalWeight,
      };
    const travelsBare =
      bulkSummary.totalWeight > 0
        ? Math.ceil(bulkSummary.totalWeight / cap)
        : 0;
    let bpAmountNeeded = 0,
      totalBpsWeight = 0;
    let totalWeightWithBps = bulkSummary.totalWeight;
    let travelsWithBp: number | null = null;
    if (useBackpack && bpSlots > 0) {
      bpAmountNeeded = Math.ceil(bulkSummary.totalSlotsNeeded / bpSlots);
      totalBpsWeight = bpAmountNeeded * bpWeight;
      totalWeightWithBps = bulkSummary.totalWeight + totalBpsWeight;
      travelsWithBp =
        totalWeightWithBps > 0 ? Math.ceil(totalWeightWithBps / cap) : 0;
    }
    return {
      cap,
      travelsBare,
      travelsWithBp,
      bpAmountNeeded,
      totalBpsWeight,
      totalWeightWithBps,
    };
  }, [bulkSummary, level, vocation, useBackpack, bpSlots, bpWeight]);

  const singleWeight = selected ? selected.weight * quantity : 0;
  const singleProfitPerOz =
    result && singleWeight > 0 ? result.netProfit / singleWeight : null;
  const bulkProfitPerOz =
    bulkSummary && bulkSummary.totalWeight > 0
      ? bulkSummary.netProfit / bulkSummary.totalWeight
      : null;

  function handleSelect(offer: FlatOffer) {
    setSelected(offer);
    setSearch(offer.name);
    setMarketPrice(0);
    setQuantity(1);
    setShowDropdown(false);
  }

  function handleAddToCart() {
    if (!selected || !result) return;
    setCart((prev) => [
      ...prev,
      { id: Date.now(), offer: selected, quantity, marketPrice, result },
    ]);
  }

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      {/* ── NPC Filter ── */}
      <div style={card}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.75rem",
          }}
        >
          <span
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "rgb(var(--muted))",
            }}
          >
            {t("filterByNpc")}
          </span>
          {selectedNpcIds.size > 0 && (
            <button
              onClick={() => setSelectedNpcIds(new Set())}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                background: "rgba(var(--negative), 0.08)",
                border: "1px solid rgba(var(--negative), 0.3)",
                borderRadius: "0.4rem",
                padding: "0.2rem 0.6rem",
                cursor: "pointer",
                fontSize: "0.75rem",
                color: "rgb(var(--negative))",
                fontWeight: 500,
              }}
            >
              {t("clearFilter")}
            </button>
          )}
        </div>

        {/* All NPC groups in a single horizontal row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            alignItems: "flex-start",
          }}
        >
          {/* Others group — standalone NPCs like Rashid */}
          {standaloneNpcs.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                border: "1px solid rgba(var(--border), 0.6)",
                borderRadius: "0.6rem",
                padding: "0.45rem 0.6rem",
                background: "transparent",
              }}
            >
              {/* Header — no toggle, just a label to match faction height */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "rgb(var(--muted))",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                {t("others")}
              </span>

              {/* Individual NPC pills */}
              <div style={{ display: "flex", gap: "0.4rem" }}>
                {standaloneNpcs.map((npc) => (
                  <button
                    key={npc.id}
                    onClick={() => toggleNpc(npc.id)}
                    style={npcPillStyle(npc.id, "212 160 20")}
                  >
                    {npc.iconUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={npc.iconUrl}
                        alt={npc.name}
                        width={40}
                        height={40}
                        style={{
                          imageRendering: "pixelated",
                          flexShrink: 0,
                          filter:
                            selectedNpcIds.size === 0 ||
                            selectedNpcIds.has(npc.id)
                              ? "none"
                              : "grayscale(1)",
                          transition: "filter 0.15s ease",
                        }}
                      />
                    )}
                    {npc.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Faction groups */}
          {FACTIONS.map((faction) => {
            const fNpcs = npcs.filter((n) =>
              (faction.npcNames as readonly string[]).includes(n.name),
            );
            if (fNpcs.length === 0) return null;
            const allIn = fNpcs.every((n) => selectedNpcIds.has(n.id));
            const someIn = fNpcs.some((n) => selectedNpcIds.has(n.id));
            const factionIds = fNpcs.map((n) => n.id);

            return (
              <div
                key={faction.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  border: "1px solid rgba(var(--border), 0.6)",
                  borderRadius: "0.6rem",
                  padding: "0.45rem 0.6rem",
                  background: "transparent",
                }}
              >
                <button
                  onClick={() => toggleFaction(factionIds)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: someIn ? `rgb(${faction.rgb})` : "rgb(var(--muted))",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s ease",
                  }}
                >
                  <span>{faction.emoji}</span>
                  <span>{faction.label}</span>
                  <span
                    style={{
                      fontWeight: 400,
                      textTransform: "none",
                      letterSpacing: 0,
                      opacity: 0.7,
                    }}
                  >
                    {allIn ? t("deselectAll") : t("selectAll")}
                  </span>
                </button>

                <div style={{ display: "flex", gap: "0.4rem" }}>
                  {fNpcs.map((npc) => (
                    <button
                      key={npc.id}
                      onClick={() => toggleNpc(npc.id)}
                      style={npcPillStyle(npc.id, faction.rgb)}
                    >
                      {npc.iconUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={npc.iconUrl}
                          alt={npc.name}
                          width={40}
                          height={40}
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: 0,
                            filter:
                              selectedNpcIds.size === 0 ||
                              selectedNpcIds.has(npc.id)
                                ? "none"
                                : "grayscale(1)",
                            transition: "filter 0.15s ease",
                          }}
                        />
                      )}
                      {npc.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Item Search ── */}
      <div style={card}>
        <h2 style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>
          {t("selectItem")}
        </h2>
        <div ref={dropdownRef} style={{ position: "relative" }}>
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={search}
            style={inputStyle}
            suppressHydrationWarning
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
              setSelected(null);
            }}
            onFocus={() => setShowDropdown(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setShowDropdown(false);
                e.currentTarget.blur();
              }
            }}
          />

          {showDropdown && filtered.length > 0 && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 10,
                background: "rgb(var(--panel-strong))",
                border: "1px solid rgb(var(--border))",
                borderRadius: "0 0 0.5rem 0.5rem",
                maxHeight: "220px",
                overflowY: "auto",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {filtered.map((offer) => (
                <li
                  key={offer.offerId}
                  onClick={() => handleSelect(offer)}
                  style={{
                    padding: "0.4rem 0.75rem",
                    cursor: "pointer",
                    borderBottom: "1px solid rgb(var(--border))",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  {offer.iconUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={offer.iconUrl}
                      alt={offer.name}
                      width={32}
                      height={32}
                      style={{ imageRendering: "pixelated", flexShrink: 0 }}
                    />
                  ) : (
                    <div style={{ width: 32, height: 32, flexShrink: 0 }} />
                  )}
                  <span
                    style={{
                      flex: 1,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    {offer.name}
                    {offer.taskDeliverable && (
                      <span
                        title={t("taskDeliverable")}
                        style={{
                          fontSize: "0.7rem",
                          color: "rgb(var(--accent-gold))",
                          lineHeight: 1,
                        }}
                      >
                        ◆
                      </span>
                    )}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "rgb(var(--muted))",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {offer.npcName}
                    {offer.npcCity ? ` · ${offer.npcCity}` : ""} ·{" "}
                    {formatGp(offer.npcPrice)} · {formatWeight(offer.weight)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {selected && (
          <div
            style={{
              marginTop: "0.6rem",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.4rem",
              background: "rgba(var(--accent), 0.07)",
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            {selected.iconUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={selected.iconUrl}
                alt={selected.name}
                width={40}
                height={40}
                style={{ imageRendering: "pixelated", flexShrink: 0 }}
              />
            )}
            <span>
              <strong
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                {selected.name}
                {selected.taskDeliverable && (
                  <span
                    title={t("taskDeliverable")}
                    style={{
                      fontSize: "0.7rem",
                      color: "rgb(var(--accent-gold))",
                      lineHeight: 1,
                    }}
                  >
                    ◆
                  </span>
                )}
              </strong>
              {" · NPC "}
              <strong>{selected.npcName}</strong>
              {selected.npcCity ? ` · ${selected.npcCity}` : ""}
              {` · ${t("sellsFor")} `}
              <strong>{formatGp(selected.npcPrice)}</strong>
              {` · ${t("weight")} `}
              <strong>{formatWeight(selected.weight)}</strong>
            </span>
          </div>
        )}
      </div>

      {/* ── Market Offer + Result ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div style={card}>
          <h2 style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>
            {t("marketOffer")}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <label style={labelStyle}>
              {t("quantity")}
              <input
                type="number"
                min={1}
                value={quantity}
                style={inputStyle}
                suppressHydrationWarning
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
            </label>
            <label style={labelStyle}>
              {t("marketBuyPrice")}
              <input
                type="number"
                min={0}
                value={marketPrice}
                style={inputStyle}
                suppressHydrationWarning
                onChange={(e) =>
                  setMarketPrice(Math.max(0, parseInt(e.target.value) || 0))
                }
              />
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.82rem",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={includeMarketFee}
                suppressHydrationWarning
                onChange={(e) => setIncludeMarketFee(e.target.checked)}
              />
              {t("includeMarketFee")}
            </label>
          </div>
        </div>

        <div style={{ ...card, background: "rgb(var(--panel-strong))" }}>
          <h2 style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>
            {t("result")}
          </h2>
          {result ? (
            <>
              <div style={grid2}>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("totalMarketOffer")}
                </span>
                <span>{formatGp(result.totalOffer)}</span>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("marketFee")}
                </span>
                <span style={{ color: "rgb(var(--negative))" }}>
                  {formatGp(result.marketFee)}
                </span>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("totalCost")}
                </span>
                <span>{formatGp(result.totalCost)}</span>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("npcRevenue")}
                </span>
                <span style={{ color: "rgb(var(--positive))" }}>
                  {formatGp(result.npcRevenue)}
                </span>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("totalWeight")}
                </span>
                <span>{formatWeight(singleWeight)}</span>
                {singleProfitPerOz !== null && (
                  <>
                    <span style={{ color: "rgb(var(--muted))" }}>
                      {t("profitPerOz")}
                    </span>
                    <span>{singleProfitPerOz.toFixed(2)} gp/oz.</span>
                  </>
                )}
              </div>
              <div
                style={{
                  borderTop: "1px solid rgb(var(--border))",
                  marginTop: "0.6rem",
                  paddingTop: "0.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: 700,
                }}
              >
                <span>{t("netProfit")}</span>
                <span
                  style={{
                    color:
                      result.netProfit >= 0
                        ? "rgb(var(--positive))"
                        : "rgb(var(--negative))",
                  }}
                >
                  {formatGp(result.netProfit)}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.78rem",
                  color: "rgb(var(--muted))",
                  marginTop: "0.3rem",
                }}
              >
                <span>{t("breakEvenPrice")}</span>
                <span>
                  {formatGp(result.breakEven)} {t("perUnit")}
                </span>
              </div>
              <button
                onClick={handleAddToCart}
                style={{
                  marginTop: "0.75rem",
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "0.4rem",
                  border: "1px solid rgb(var(--accent))",
                  background: "rgba(var(--accent), 0.12)",
                  color: "rgb(var(--accent))",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {t("addToBulk")}
              </button>
            </>
          ) : (
            <p style={{ color: "rgb(var(--muted))", fontSize: "0.82rem" }}>
              {t("emptyResult")}
            </p>
          )}
        </div>
      </div>

      {/* ── Bulk Operation ── */}
      {cart.length > 0 && bulkSummary && (
        <div style={card}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.75rem",
            }}
          >
            <h2 style={{ fontSize: "1rem", margin: 0 }}>
              {t("bulkOperation")}
            </h2>
            <button
              onClick={() => setCart([])}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                background: "rgba(var(--negative), 0.08)",
                border: "1px solid rgba(var(--negative), 0.3)",
                borderRadius: "0.4rem",
                padding: "0.2rem 0.6rem",
                cursor: "pointer",
                fontSize: "0.75rem",
                color: "rgb(var(--negative))",
                fontWeight: 500,
              }}
            >
              {t("clear")}
            </button>
          </div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.8rem",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid rgb(var(--border))",
                  color: "rgb(var(--muted))",
                }}
              >
                <th style={{ textAlign: "left", padding: "0.3rem 0.4rem" }}>
                  {t("tableItem")}
                </th>
                <th style={{ textAlign: "right", padding: "0.3rem 0.4rem" }}>
                  {t("tableQty")}
                </th>
                <th style={{ textAlign: "right", padding: "0.3rem 0.4rem" }}>
                  {t("tablePricePerUnit")}
                </th>
                <th style={{ textAlign: "right", padding: "0.3rem 0.4rem" }}>
                  {t("tableNetProfit")}
                </th>
                <th style={{ textAlign: "right", padding: "0.3rem 0.4rem" }}>
                  {t("tableWeight")}
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map((entry) => (
                <tr
                  key={entry.id}
                  style={{ borderBottom: "1px solid rgb(var(--border))" }}
                >
                  <td style={{ padding: "0.4rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      {entry.offer.iconUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={entry.offer.iconUrl}
                          alt={entry.offer.name}
                          width={24}
                          height={24}
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        {entry.offer.name}
                        {entry.offer.taskDeliverable && (
                          <span
                            title={t("taskDeliverable")}
                            style={{
                              fontSize: "0.7rem",
                              color: "rgb(var(--accent-gold))",
                              lineHeight: 1,
                            }}
                          >
                            ◆
                          </span>
                        )}
                      </span>
                    </div>
                  </td>
                  <td style={{ textAlign: "right", padding: "0.4rem" }}>
                    {entry.quantity}
                  </td>
                  <td style={{ textAlign: "right", padding: "0.4rem" }}>
                    {formatGp(entry.marketPrice)}
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      padding: "0.4rem",
                      color:
                        entry.result.netProfit >= 0
                          ? "rgb(var(--positive))"
                          : "rgb(var(--negative))",
                    }}
                  >
                    {formatGp(entry.result.netProfit)}
                  </td>
                  <td style={{ textAlign: "right", padding: "0.4rem" }}>
                    {formatWeight(entry.offer.weight * entry.quantity)}
                  </td>
                  <td style={{ padding: "0.4rem" }}>
                    <button
                      onClick={() =>
                        setCart((p) => p.filter((e) => e.id !== entry.id))
                      }
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "rgb(var(--negative))",
                      }}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ ...grid2, marginTop: "0.75rem" }}>
            <span style={{ color: "rgb(var(--muted))" }}>
              {t("totalWeight")}
            </span>
            <span>{formatWeight(bulkSummary.totalWeight)}</span>
            <span style={{ color: "rgb(var(--muted))" }}>
              {t("slotsNeeded")}
            </span>
            <span>{bulkSummary.totalSlotsNeeded}</span>
            <span style={{ color: "rgb(var(--muted))" }}>
              {t("totalFeesPaid")}
            </span>
            <span style={{ color: "rgb(var(--negative))" }}>
              {formatGp(bulkSummary.totalFees)}
            </span>
            <span style={{ color: "rgb(var(--muted))" }}>
              {t("totalNpcRevenue")}
            </span>
            <span style={{ color: "rgb(var(--positive))" }}>
              {formatGp(bulkSummary.npcRevenue)}
            </span>
            <span style={{ color: "rgb(var(--muted))" }}>{t("totalCost")}</span>
            <span>{formatGp(bulkSummary.totalCost)}</span>
            {bulkProfitPerOz !== null && (
              <>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("profitPerOzBulk")}
                </span>
                <span>{bulkProfitPerOz.toFixed(2)} gp/oz.</span>
              </>
            )}
          </div>
          <div
            style={{
              borderTop: "1px solid rgb(var(--border))",
              marginTop: "0.6rem",
              paddingTop: "0.5rem",
              display: "flex",
              justifyContent: "space-between",
              fontWeight: 700,
            }}
          >
            <span>{t("netProfit")}</span>
            <span
              style={{
                color:
                  bulkSummary.netProfit >= 0
                    ? "rgb(var(--positive))"
                    : "rgb(var(--negative))",
              }}
            >
              {formatGp(bulkSummary.netProfit)}
            </span>
          </div>
        </div>
      )}

      {/* ── Capacity & Travels ── */}
      {bulkSummary && (
        <div style={{ ...card, marginBottom: "6rem" }}>
          <h2 style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>
            {t("capacityTravels")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.6rem",
              marginBottom: "0.75rem",
            }}
          >
            <label style={labelStyle}>
              {t("level")}
              <input
                type="number"
                min={1}
                value={level}
                style={inputStyle}
                suppressHydrationWarning
                onChange={(e) =>
                  setLevel(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
            </label>
            <label style={labelStyle}>
              {t("vocation")}
              <select
                value={vocation}
                suppressHydrationWarning
                onChange={(e) => setVocation(e.target.value as Vocation)}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option>Knight/Monk</option>
                <option>Paladin</option>
                <option>Sorcerer/Druid</option>
                <option>Rookstayer</option>
              </select>
            </label>
          </div>
          {capacitySummary && (
            <>
              <div style={{ ...grid2, marginBottom: "0.5rem" }}>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("estimatedCapacity")}
                </span>
                <span>{formatWeight(capacitySummary.cap)}</span>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("travelsItemOnly")}
                </span>
                <span>{capacitySummary.travelsBare ?? "—"}</span>
              </div>
              <div
                style={{
                  borderTop: "1px solid rgb(var(--border))",
                  margin: "0.5rem 0",
                }}
              />
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                }}
              >
                <input
                  type="checkbox"
                  checked={useBackpack}
                  suppressHydrationWarning
                  onChange={(e) => setUseBackpack(e.target.checked)}
                />
                {t("useBackpacks")}
              </label>
              {useBackpack && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.6rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  <label style={labelStyle}>
                    {t("backpackSlots")}
                    <input
                      type="number"
                      min={1}
                      value={bpSlots}
                      style={inputStyle}
                      suppressHydrationWarning
                      onChange={(e) =>
                        setBpSlots(Math.max(1, parseInt(e.target.value) || 1))
                      }
                    />
                  </label>
                  <label style={labelStyle}>
                    {t("backpackWeight")}
                    <input
                      type="number"
                      min={0}
                      value={bpWeight}
                      style={inputStyle}
                      suppressHydrationWarning
                      onChange={(e) =>
                        setBpWeight(
                          Math.max(0, parseFloat(e.target.value) || 0),
                        )
                      }
                    />
                  </label>
                </div>
              )}
              <div style={grid2}>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("backpacksNeeded")}
                </span>
                <span>
                  {useBackpack ? capacitySummary.bpAmountNeeded : "Disabled"}
                </span>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("totalBackpacksWeight")}
                </span>
                <span>
                  {useBackpack
                    ? formatWeight(capacitySummary.totalBpsWeight)
                    : "Disabled"}
                </span>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("totalWeightWithBackpacks")}
                </span>
                <span>
                  {useBackpack
                    ? formatWeight(capacitySummary.totalWeightWithBps)
                    : "Disabled"}
                </span>
                <span style={{ color: "rgb(var(--muted))" }}>
                  {t("travelsWithBackpacks")}
                </span>
                <span>
                  {useBackpack
                    ? (capacitySummary.travelsWithBp ?? "—")
                    : t("disabled")}
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
