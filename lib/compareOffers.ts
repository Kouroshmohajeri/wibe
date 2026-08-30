export type MobileLine = {
  number: string;
  data_gb: number;
};

export type InvoiceData = {
  provider: string;
  monthly_price: number;
  fiber_speed_mb: number;
  fiber_symmetric: boolean;
  mobile_lines: MobileLine[];
  has_permanence: boolean;
};

export type WibePlan = {
  id: string;
  title: string;
  fiberMb: number;
  fiberSymmetric: boolean;
  mobileGbPerLine: number;
  includedLines: number;
  priceNum: number;
  priceLabel: string;
};

export const WIBE_PLANS: WibePlan[] = [
  {
    id: "f600-30",
    title: "Fibra 600 + 30 GB",
    fiberMb: 600,
    fiberSymmetric: false,
    mobileGbPerLine: 30,
    includedLines: 2,
    priceNum: 31,
    priceLabel: "31€",
  },
  {
    id: "f600-60",
    title: "Fibra 600 + 60 GB",
    fiberMb: 600,
    fiberSymmetric: false,
    mobileGbPerLine: 60,
    includedLines: 2,
    priceNum: 35,
    priceLabel: "35€",
  },
  {
    id: "f600-ilim",
    title: "Fibra 600 + Ilimitada",
    fiberMb: 600,
    fiberSymmetric: false,
    mobileGbPerLine: 999,
    includedLines: 2,
    priceNum: 48,
    priceLabel: "48€",
  },
  {
    id: "f1000-30",
    title: "Fibra 1 Gb + 2×30GB",
    fiberMb: 1000,
    fiberSymmetric: true,
    mobileGbPerLine: 30,
    includedLines: 2,
    priceNum: 39,
    priceLabel: "39€",
  },
  {
    id: "f1000-60",
    title: "Fibra 1 Gb + 60 GB",
    fiberMb: 1000,
    fiberSymmetric: true,
    mobileGbPerLine: 60,
    includedLines: 2,
    priceNum: 39,
    priceLabel: "39€",
  },
  {
    id: "f1000-ilim",
    title: "Fibra 1 Gb + Ilimitada",
    fiberMb: 1000,
    fiberSymmetric: true,
    mobileGbPerLine: 999,
    includedLines: 2,
    priceNum: 52,
    priceLabel: "52€",
  },
];

const EXTRA_LINE_PRICE = 3;

export function formatSpeed(mb: number, symmetric?: boolean) {
  if (mb <= 0) return "No incluida";
  return `${mb} Mb${symmetric ? " simétrica" : ""}`;
}

export function formatGb(gb: number) {
  if (gb >= 999) return "Ilimitados";
  if (gb <= 0) return "No incluidos";
  return `${gb} GB`;
}

export type LineComparison = {
  number: string;
  currentGb: number;
  offeredGb: number;
  improved: boolean;
  isExtra: boolean;
};

export type OfferCandidate = {
  plan: WibePlan;
  extraLines: number;
  extraLinesCost: number;
  totalMonthly: number;
  monthlySavings: number;
  annualSavings: number;
  isCheaper: boolean;
  fiberComparison: { current: string; offered: string; improved: boolean };
  lineComparisons: LineComparison[];
};

function buildOffer(invoice: InvoiceData, plan: WibePlan): OfferCandidate {
  const lines = invoice.mobile_lines ?? [];
  const lineCount = lines.length;
  const extraLines = Math.max(0, lineCount - plan.includedLines);
  const extraLinesCost = extraLines * EXTRA_LINE_PRICE;
  const totalMonthly = plan.priceNum + extraLinesCost;
  const monthlySavings = invoice.monthly_price - totalMonthly;

  const lineComparisons: LineComparison[] = lines.map((line, i) => ({
    number: line.number || `Línea ${i + 1}`,
    currentGb: line.data_gb,
    offeredGb: plan.mobileGbPerLine,
    improved: plan.mobileGbPerLine > line.data_gb,
    isExtra: i >= plan.includedLines,
  }));

  return {
    plan,
    extraLines,
    extraLinesCost,
    totalMonthly,
    monthlySavings,
    annualSavings: monthlySavings * 12,
    isCheaper: monthlySavings > 0,
    fiberComparison: {
      current: formatSpeed(invoice.fiber_speed_mb, invoice.fiber_symmetric),
      offered: formatSpeed(plan.fiberMb, plan.fiberSymmetric),
      improved: plan.fiberMb > invoice.fiber_speed_mb,
    },
    lineComparisons,
  };
}

/**
 * Returns a ranked list of WiBe plan candidates for the given invoice:
 * the best-matching 600 Mb plan, its 1 Gb upgrade equivalent, and the
 * unlimited-data tier — deduplicated and sorted by monthly savings.
 */
export function getOfferCandidates(invoice: InvoiceData): OfferCandidate[] {
  const lines = invoice.mobile_lines ?? [];
  const maxLineGb =
    lines.length > 0 ? Math.max(...lines.map((l) => l.data_gb)) : 0;

  const has600 = WIBE_PLANS.filter(
    (p) => p.fiberMb === 600 && p.mobileGbPerLine >= maxLineGb,
  );
  const has1000 = WIBE_PLANS.filter(
    (p) => p.fiberMb === 1000 && p.mobileGbPerLine >= maxLineGb,
  );
  const pickCheapest = (list: WibePlan[]) =>
    [...list].sort((a, b) => a.priceNum - b.priceNum)[0];

  const primaryPool = invoice.fiber_speed_mb > 600 ? has1000 : has600;
  const primary = pickCheapest(primaryPool) ?? pickCheapest(WIBE_PLANS);

  const upgrade =
    primary.fiberMb === 600
      ? pickCheapest(
          WIBE_PLANS.filter(
            (p) =>
              p.fiberMb === 1000 &&
              p.mobileGbPerLine >= primary.mobileGbPerLine,
          ),
        )
      : undefined;

  const unlimited = pickCheapest(
    WIBE_PLANS.filter(
      (p) => p.fiberMb === primary.fiberMb && p.mobileGbPerLine >= 999,
    ),
  );

  const candidatePlans = [primary, upgrade, unlimited].filter(
    (p): p is WibePlan => !!p,
  );

  const uniquePlans = Array.from(
    new Map(candidatePlans.map((p) => [p.id, p])).values(),
  );

  return uniquePlans
    .map((plan) => buildOffer(invoice, plan))
    .sort((a, b) => b.monthlySavings - a.monthlySavings);
}

/**
 * Legacy single-result shape, kept for compatibility with older callers.
 */
export type ComparisonResult = {
  matchedPlan: WibePlan;
  upgradePlan: WibePlan | null;
  extraLines: number;
  extraLinesCost: number;
  totalMonthlyWithExtras: number;
  monthlySavings: number;
  annualSavings: number;
  upgradeMonthlyDiff: number;
  fiberComparison: { current: string; offered: string; improved: boolean };
  permanenceComparison: { current: string; offered: string; improved: boolean };
  lineComparisons: LineComparison[];
};

export function findBestOffer(invoice: InvoiceData): ComparisonResult {
  const offers = getOfferCandidates(invoice);
  const [best, upgrade] = offers;
  const matchedPlan = best.plan;

  return {
    matchedPlan,
    upgradePlan:
      upgrade && upgrade.plan.fiberMb > matchedPlan.fiberMb
        ? upgrade.plan
        : null,
    extraLines: best.extraLines,
    extraLinesCost: best.extraLinesCost,
    totalMonthlyWithExtras: best.totalMonthly,
    monthlySavings: best.monthlySavings,
    annualSavings: best.annualSavings,
    upgradeMonthlyDiff:
      upgrade && upgrade.plan.fiberMb > matchedPlan.fiberMb
        ? upgrade.totalMonthly - best.totalMonthly
        : 0,
    fiberComparison: best.fiberComparison,
    permanenceComparison: {
      current: invoice.has_permanence ? "Sí" : "No",
      offered: "No",
      improved: invoice.has_permanence,
    },
    lineComparisons: best.lineComparisons,
  };
}
