import {useState, useMemo} from "react";
import items from "./items.json";
import "./App.css";

const MARKET_FEE_RATE = 0.02;
const MARKET_FEE_MIN = 20;
const MARKET_FEE_MAX = 1000000;

type Vocation = "Knight/Monk" | "Paladin" | "Sorcerer/Druid" | "Rookstayer";

interface Item {
    id: number;
    name: string;
    weight: number;
    npcPrice: number;
    npcName: string;
    npcCity: string;
}

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
    item: Item;
    quantity: number;
    marketPrice: number;
    result: CalcResult;
}

interface BulkSummary {
    totalCost: number;
    totalFees: number;
    npcRevenue: number;
    netProfit: number;
    totalWeight: number;
    totalSlotsNeeded: number;
}

interface CapacitySummary {
    cap: number;
    travelsBare: number | null;
    travelsWithBp: number | null;
    bpAmountNeeded: number;
    totalBpsWeight: number;
    totalWeightWithBps: number;
}

function calcCapacity(level: number, vocation: Vocation): number {
    if (level <= 0) return 0;

    switch (vocation) {
        case "Knight/Monk":
            return 390 + (level - 8) * 25;
        case "Paladin":
            return 300 + (level - 8) * 20;
        case "Sorcerer/Druid":
            return 250 + (level - 8) * 15;
        case "Rookstayer":
        default:
            return 140 + level * 5;
    }
}

function calcMarketFee(totalOffer: number): number {
    return Math.min(Math.max(totalOffer * MARKET_FEE_RATE, MARKET_FEE_MIN), MARKET_FEE_MAX);
}

function formatGp(value: number): string {
    const formatter = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
    return formatter.format(value) + " gp";
}

function formatWeight(value: number): string {
    const formatter = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
    return formatter.format(value) + " oz.";
}

function formatNumber(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value);
}

export default function App() {
    const [search, setSearch] = useState<string>("");
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const [marketPrice, setMarketPrice] = useState<number>(0);
    const [cart, setCart] = useState<CartEntry[]>([]);
    const [includeMarketFee, setIncludeMarketFee] = useState<boolean>(false);

    const [level, setLevel] = useState<number>(100);
    const [vocation, setVocation] = useState<Vocation>("Knight/Monk");
    const [useBackpack, setUseBackpack] = useState<boolean>(true);
    const [bpSlots, setBpSlots] = useState<number>(20);
    const [bpWeight, setBpWeight] = useState<number>(18);

    const filtered = useMemo<Item[]>(
        () =>
            (items as Item[]).filter((i) =>
                i.name.toLowerCase().includes(search.toLowerCase())
            ),
        [search]
    );

    const result = useMemo<CalcResult | null>(() => {
        if (!selectedItem || quantity <= 0 || marketPrice <= 0) return null;

        const totalOffer = marketPrice * quantity;
        const marketFee = includeMarketFee ? calcMarketFee(totalOffer) : 0;
        const totalCost = totalOffer + marketFee;
        const npcRevenue = selectedItem.npcPrice * quantity;
        const netProfit = npcRevenue - totalCost;
        const breakEven = Math.floor(
            (selectedItem.npcPrice * quantity - (includeMarketFee ? MARKET_FEE_MIN : 0)) /
            quantity /
            (1 + (includeMarketFee ? MARKET_FEE_RATE : 0))
        );

        return {totalOffer, marketFee, totalCost, npcRevenue, netProfit, breakEven};
    }, [selectedItem, quantity, marketPrice, includeMarketFee]);

    const bulkSummary = useMemo<BulkSummary | null>(() => {
        if (cart.length === 0) return null;

        const totalWeight = cart.reduce(
            (sum, e) => sum + e.item.weight * e.quantity,
            0
        );

        const totalSlotsNeeded = cart.reduce((sum, e) => sum + e.quantity, 0);

        return {
            totalCost: cart.reduce((sum, e) => sum + e.result.totalCost, 0),
            totalFees: cart.reduce((sum, e) => sum + e.result.marketFee, 0),
            npcRevenue: cart.reduce((sum, e) => sum + e.result.npcRevenue, 0),
            netProfit: cart.reduce((sum, e) => sum + e.result.netProfit, 0),
            totalWeight,
            totalSlotsNeeded,
        };
    }, [cart]);

    const capacitySummary = useMemo<CapacitySummary | null>(() => {
        if (!bulkSummary || level <= 0) return null;

        const cap = calcCapacity(level, vocation);
        if (cap <= 0) {
            return {
                cap: 0,
                travelsBare: null,
                travelsWithBp: null,
                bpAmountNeeded: 0,
                totalBpsWeight: 0,
                totalWeightWithBps: bulkSummary.totalWeight,
            };
        }

        const travelsBare =
            bulkSummary.totalWeight > 0 ? Math.ceil(bulkSummary.totalWeight / cap) : 0;

        let bpAmountNeeded = 0;
        let totalBpsWeight = 0;
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

    function handleSelect(item: Item): void {
        setSelectedItem(item);
        setSearch(item.name);
        setMarketPrice(0);
        setQuantity(1);
        setShowDropdown(false);
    }

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setSearch(e.target.value);
        setShowDropdown(true);
        setSelectedItem(null);
    }

    function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setQuantity(Math.max(1, parseInt(e.target.value) || 1));
    }

    function handleMarketPriceChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setMarketPrice(Math.max(0, parseInt(e.target.value) || 0));
    }

    function handleAddToCart(): void {
        if (!selectedItem || !result) return;

        setCart((prev) => [
            ...prev,
            {
                id: Date.now(),
                item: selectedItem,
                quantity,
                marketPrice,
                result,
            },
        ]);
    }

    function handleRemoveFromCart(id: number): void {
        setCart((prev) => prev.filter((e) => e.id !== id));
    }

    const singleTotalWeight = selectedItem ? selectedItem.weight * quantity : 0;
    const singleProfitPerOz =
        result && singleTotalWeight > 0 ? result.netProfit / singleTotalWeight : null;

    const bulkProfitPerOz =
        bulkSummary && bulkSummary.totalWeight > 0
            ? bulkSummary.netProfit / bulkSummary.totalWeight
            : null;

    return (
        <div className="container">
            <header>
                <h1>🐪 Tibia Silk Road</h1>
                <p className="subtitle">Merchant Market & NPC Profit Tracker</p>
            </header>

            <div className="card">
                <h2>Select Item</h2>
                <div className="search-wrapper">
                    <input
                        type="text"
                        placeholder="Search item name..."
                        value={search}
                        onChange={handleSearchChange}
                        onFocus={() => setShowDropdown(true)}
                    />
                    {showDropdown && filtered.length > 0 && (
                        <ul className="dropdown">
                            {filtered.map((item: Item) => (
                                <li key={item.id} onClick={() => handleSelect(item)}>
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-npc">
                                        {item.npcName} — {formatGp(item.npcPrice)} — {formatWeight(item.weight)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {selectedItem && (
                    <div className="item-tag">
                        📦 <strong>{selectedItem.name}</strong> — NPC: {selectedItem.npcName} ({selectedItem.npcCity}) —
                        Sells for{" "}
                        <strong>{formatGp(selectedItem.npcPrice)}</strong> — Weight:{" "}
                        <strong>{formatWeight(selectedItem.weight)}</strong>
                    </div>
                )}
            </div>

            <div className="card">
                <h2>Market Offer</h2>
                <div className="inputs">
                    <label>
                        Quantity
                        <input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </label>

                    <label>
                        Market Buy Price (per unit)
                        <input
                            type="number"
                            min={0}
                            value={marketPrice}
                            onChange={handleMarketPriceChange}
                        />
                    </label>
                </div>

                <label className="checkbox-line">
                    <input
                        type="checkbox"
                        checked={includeMarketFee}
                        onChange={(e) => setIncludeMarketFee(e.target.checked)}
                    />
                    Include market fee
                </label>
            </div>

            <div className="row">
                {result && (
                    <div className="card results">
                        <h2>Result</h2>
                        <div className="result-grid">
                            <span>Total Market Offer</span>
                            <span>{formatGp(result.totalOffer)}</span>

                            <span>Market Fee</span>
                            <span className="negative">− {formatGp(result.marketFee)}</span>

                            <span>Total Cost</span>
                            <span>{formatGp(result.totalCost)}</span>

                            <span>NPC Revenue</span>
                            <span className="positive">+ {formatGp(result.npcRevenue)}</span>

                            <span>Total Weight</span>
                            <span>{formatWeight(singleTotalWeight)}</span>

                            {singleProfitPerOz !== null && (
                                <>
                                    <span>Profit per oz.</span>
                                    <span>{formatNumber(singleProfitPerOz)} gp/oz.</span>
                                </>
                            )}

                            <div className="divider"/>

                            <span className="bold">Net Profit</span>
                            <span className={`bold ${result.netProfit >= 0 ? "positive" : "negative"}`}>
                                {result.netProfit >= 0 ? "✅" : "❌"} {formatGp(result.netProfit)}
                            </span>

                            <span>Break-even Price</span>
                            <span>{formatGp(result.breakEven)} / unit</span>
                        </div>

                        <button className="btn-add" onClick={handleAddToCart}>
                            + Add to Bulk Operation
                        </button>
                    </div>
                )}

                {cart.length > 0 && bulkSummary && (
                    <div className="card">
                        <div className="cart-header">
                            <h2>🧺 Bulk Operation</h2>
                            <button className="btn-clear" onClick={() => setCart([])}>
                                Clear
                            </button>
                        </div>

                        <table className="cart-table">
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Price / unit</th>
                                <th>Net Profit</th>
                                <th>Weight</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {cart.map((entry: CartEntry) => (
                                <tr key={entry.id}>
                                    <td>{entry.item.name}</td>
                                    <td>{entry.quantity}</td>
                                    <td>{formatGp(entry.marketPrice)}</td>
                                    <td className={entry.result.netProfit >= 0 ? "positive" : "negative"}>
                                        {entry.result.netProfit >= 0 ? "✅" : "❌"}{" "}
                                        {formatGp(entry.result.netProfit)}
                                    </td>
                                    <td>{formatWeight(entry.item.weight * entry.quantity)}</td>
                                    <td>
                                        <button
                                            className="btn-remove"
                                            onClick={() => handleRemoveFromCart(entry.id)}
                                        >
                                            🗑
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <div className="result-grid" style={{marginTop: "1rem"}}>
                            <span>Total Weight</span>
                            <span>{formatWeight(bulkSummary.totalWeight)}</span>

                            <span>Slots Needed</span>
                            <span>{bulkSummary.totalSlotsNeeded}</span>

                            <span>Total Fees Paid</span>
                            <span className="negative">− {formatGp(bulkSummary.totalFees)}</span>

                            <span>Total NPC Revenue</span>
                            <span className="positive">+ {formatGp(bulkSummary.npcRevenue)}</span>

                            <span>Total Cost</span>
                            <span>{formatGp(bulkSummary.totalCost)}</span>

                            {bulkProfitPerOz !== null && (
                                <>
                                    <span>Profit per oz. (bulk)</span>
                                    <span>{formatNumber(bulkProfitPerOz)} gp/oz.</span>
                                </>
                            )}

                            <div className="divider"/>

                            <span className="bold">💰 Net Profit</span>
                            <span className={`bold ${bulkSummary.netProfit >= 0 ? "positive" : "negative"}`}>
                                {bulkSummary.netProfit >= 0 ? "✅" : "❌"} {formatGp(bulkSummary.netProfit)}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {bulkSummary && (
                <div className="card">
                    <h2>Capacity & Travels</h2>

                    <div className="cap-grid">
                        <label>
                            Level
                            <input
                                type="number"
                                min={1}
                                value={level}
                                onChange={(e) => setLevel(Math.max(1, parseInt(e.target.value) || 1))}
                            />
                        </label>

                        <label>
                            Vocation
                            <select
                                value={vocation}
                                onChange={(e) => setVocation(e.target.value as Vocation)}
                            >
                                <option>Knight/Monk</option>
                                <option>Paladin</option>
                                <option>Sorcerer/Druid</option>
                                <option>Rookstayer</option>
                            </select>
                        </label>

                        <div className="cap-row">
                            <span>Estimated Capacity</span>
                            <span>{capacitySummary ? formatWeight(capacitySummary.cap) : "—"}</span>
                        </div>
                    </div>

                    <div className="divider" style={{margin: "0.75rem 0"}}/>

                    <div className="cap-bp">
                        <label className="checkbox-line">
                            <input
                                type="checkbox"
                                checked={useBackpack}
                                onChange={(e) => setUseBackpack(e.target.checked)}
                            />
                            Use backpacks in calculation
                        </label>

                        {useBackpack && (
                            <div className="cap-grid">
                                <label>
                                    Backpack slots
                                    <input
                                        type="number"
                                        min={1}
                                        value={bpSlots}
                                        onChange={(e) =>
                                            setBpSlots(Math.max(1, parseInt(e.target.value) || 1))
                                        }
                                    />
                                </label>

                                <label>
                                    Backpack weight (oz.)
                                    <input
                                        type="number"
                                        min={0}
                                        value={bpWeight}
                                        onChange={(e) =>
                                            setBpWeight(Math.max(0, parseFloat(e.target.value) || 0))
                                        }
                                    />
                                </label>
                            </div>
                        )}
                    </div>

                    {capacitySummary && (
                        <div className="result-grid" style={{marginTop: "0.75rem"}}>
                            <span>Travels (only item weight)</span>
                            <span>{capacitySummary.travelsBare ?? "—"}</span>

                            <span>Slots Needed</span>
                            <span>{bulkSummary.totalSlotsNeeded}</span>

                            <span>Backpacks Needed</span>
                            <span>{useBackpack ? capacitySummary.bpAmountNeeded : "Disabled"}</span>

                            <span>Total Backpacks Weight</span>
                            <span>
                                {useBackpack ? formatWeight(capacitySummary.totalBpsWeight) : "Disabled"}
                            </span>

                            <span>Total Weight with Backpacks</span>
                            <span>
                                {useBackpack
                                    ? formatWeight(capacitySummary.totalWeightWithBps)
                                    : "Disabled"}
                            </span>

                            <span>Travels (with backpacks)</span>
                            <span>
                                {useBackpack ? capacitySummary.travelsWithBp ?? "—" : "Disabled"}
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}