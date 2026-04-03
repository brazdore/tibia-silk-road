import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import TradeCalculator from "@/components/TradeCalculator";
import type { FlatOffer } from "@/lib/types";
import { calcCapacity, calcProfit } from "@/lib/calc";

vi.mock("@/lib/i18n", () => ({
  useTranslation: () => (key: string) => key,
}));

vi.mock("@/lib/calc", () => ({
  calcProfit: vi.fn(),
  calcCapacity: vi.fn(),
  formatGp: (v: number) => `${v} gp`,
  formatWeight: (v: number) => `${v} oz`,
}));

const flatOffers: FlatOffer[] = [
  {
    offerId: 1,
    itemId: 101,
    name: "Golden Armor",
    weight: 50,
    npcPrice: 1000,
    npcId: 10,
    npcName: "Rashid",
    npcCity: "Carlin",
    npcIconUrl: null,
    iconUrl: null,
    taskDeliverable: false,
  },
];

function renderCalculator() {
  render(<TradeCalculator flatOffers={flatOffers} />);
}

function selectGoldenArmor() {
  fireEvent.change(screen.getByPlaceholderText("searchPlaceholder"), {
    target: { value: "gold" },
  });

  const dropdown = screen.getByRole("list");
  fireEvent.click(within(dropdown).getByText("Golden Armor"));
}

function fillQuantity(value: number) {
  fireEvent.change(screen.getByLabelText("quantity"), {
    target: { value: String(value) },
  });
}

function fillMarketPrice(value: number) {
  fireEvent.change(screen.getByLabelText("marketBuyPrice"), {
    target: { value: String(value) },
  });
}

describe("TradeCalculator", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();

    vi.mocked(calcProfit).mockReturnValue({
      totalOffer: 2000,
      marketFee: 100,
      totalCost: 2100,
      npcRevenue: 3000,
      netProfit: 900,
      breakEven: 1050,
    });

    vi.mocked(calcCapacity).mockReturnValue(1000);
  });

  it("renders search input", () => {
    renderCalculator();

    expect(
      screen.getByPlaceholderText("searchPlaceholder"),
    ).toBeInTheDocument();
  });

  it("filters and selects an item", () => {
    renderCalculator();

    fireEvent.change(screen.getByPlaceholderText("searchPlaceholder"), {
      target: { value: "gold" },
    });

    const dropdown = screen.getByRole("list");
    expect(within(dropdown).getByText("Golden Armor")).toBeInTheDocument();

    fireEvent.click(within(dropdown).getByText("Golden Armor"));

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("sellsFor")),
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("weight")),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Golden Armor").length).toBeGreaterThan(0);
  });

  it("calculates result when item and market price are filled", () => {
    renderCalculator();

    selectGoldenArmor();
    fillQuantity(2);
    fillMarketPrice(1000);

    expect(calcProfit).toHaveBeenCalledWith(1000, 1000, 2, false);
    expect(screen.getByText("900 gp")).toBeInTheDocument();
    expect(
      screen.getByText(
        (content) => content.includes("1050 gp") && content.includes("perUnit"),
      ),
    ).toBeInTheDocument();
  });

  it("adds item to cart", () => {
    renderCalculator();

    selectGoldenArmor();
    fillMarketPrice(1000);

    fireEvent.click(screen.getByRole("button", { name: "addToBulk" }));

    expect(screen.getByText("bulkOperation")).toBeInTheDocument();
    expect(screen.getByText("capacityTravels")).toBeInTheDocument();
    expect(calcCapacity).toHaveBeenCalledWith(100, "Knight/Monk");
  });

  it("clears cart", () => {
    renderCalculator();

    selectGoldenArmor();
    fillMarketPrice(1000);

    fireEvent.click(screen.getByRole("button", { name: "addToBulk" }));

    expect(screen.getByText("bulkOperation")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "clear" }));

    expect(screen.queryByText("bulkOperation")).not.toBeInTheDocument();
    expect(screen.queryByText("capacityTravels")).not.toBeInTheDocument();
  });

  it("toggles standalone NPC filter", () => {
    renderCalculator();

    const rashidButton = screen.getByRole("button", { name: "Rashid" });

    fireEvent.click(rashidButton);
    expect(screen.getByText("clearFilter")).toBeInTheDocument();

    fireEvent.click(rashidButton);
    expect(screen.queryByText("clearFilter")).not.toBeInTheDocument();
  });

  it("shows empty result before a valid calculation", () => {
    renderCalculator();

    expect(screen.getByText("emptyResult")).toBeInTheDocument();
    expect(calcProfit).not.toHaveBeenCalled();
  });

  it("shows capacity calculation when cart exists", () => {
    renderCalculator();

    selectGoldenArmor();
    fillMarketPrice(1000);

    fireEvent.click(screen.getByRole("button", { name: "addToBulk" }));

    expect(screen.getByText("capacityTravels")).toBeInTheDocument();
    expect(screen.getByText("estimatedCapacity")).toBeInTheDocument();
    expect(screen.getByText("travelsItemOnly")).toBeInTheDocument();
    expect(calcCapacity).toHaveBeenCalled();
  });
});
