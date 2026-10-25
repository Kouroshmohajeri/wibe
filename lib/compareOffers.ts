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

  /**
   * Some plans have an alternative configuration:
   * 1 line with 60 GB OR 2 lines with 30 GB each.
   */
  alternativeLines?: number;
  alternativeGbPerLine?: number;
};

export const WIBE_PLANS: WibePlan[] = [
  {
    id: "f600-30",
    title: "Fibra 600 + 30 GB",
    fiberMb: 600,
    fiberSymmetric: false,
    mobileGbPerLine: 30,
    includedLines: 1,
    priceNum: 29.9,
    priceLabel: "29.90€",
  },

  {
    id: "f600-60",
    title: "Fibra 600 + 60 GB",
    fiberMb: 600,
    fiberSymmetric: false,
    mobileGbPerLine: 60,
    includedLines: 1,
    alternativeLines: 2,
    alternativeGbPerLine: 30,
    priceNum: 35,
    priceLabel: "35€",
  },
  {
    id: "f600-150",
    title: "Fibra 600 + 150 GB",
    fiberMb: 600,
    fiberSymmetric: false,
    mobileGbPerLine: 150,
    includedLines: 1,
    priceNum: 39,
    priceLabel: "39€",
  },

  {
    id: "f600-ilim",
    title: "Fibra 600 + GB Ilimitadas",
    fiberMb: 600,
    fiberSymmetric: false,
    mobileGbPerLine: 999,
    includedLines: 1,
    priceNum: 48,
    priceLabel: "48€",
  },

  {
    id: "f1000-30",
    title: "Fibra 1 Gb + 30 GB",
    fiberMb: 1000,
    fiberSymmetric: true,
    mobileGbPerLine: 30,
    includedLines: 1,
    priceNum: 35,
    priceLabel: "35€",
  },

  {
    id: "f1000-60",
    title: "Fibra 1 Gb + 60 GB",
    fiberMb: 1000,
    fiberSymmetric: true,
    mobileGbPerLine: 1,
    includedLines: 1,
    alternativeLines: 2,
    alternativeGbPerLine: 30,
    priceNum: 39,
    priceLabel: "39€",
  },

  {
    id: "f1000-ilim",
    title: "Fibra 1 Gb + GB Ilimitadas",
    fiberMb: 1000,
    fiberSymmetric: true,
    mobileGbPerLine: 999,
    includedLines: 1,
    priceNum: 52,
    priceLabel: "52€",
  },
];

export const EXTRA_LINE_PRICE = 3;

export function formatSpeed(mb: number, symmetric?: boolean) {
  if (mb <= 0) return "No incluida";

  if (mb >= 1000) {
    return `1 Gb${symmetric ? " simétrica" : ""}`;
  }

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
  fiberComparison: {
    current: string;
    offered: string;
    improved: boolean;
  };
  lineComparisons: LineComparison[];
};

/**
 * Returns true when the invoice's mobile configuration
 * can be completely covered by the plan without extra lines.
 *
 * Examples:
 * - 1 × 30 GB → 30 GB plan
 * - 1 × 60 GB → 60 GB plan
 * - 2 × 30 GB → 60 GB plan
 * - 1 × 100 GB → unlimited plan
 */
function planCoversMobileLines(invoice: InvoiceData, plan: WibePlan): boolean {
  const lines = invoice.mobile_lines ?? [];

  if (lines.length === 0) {
    return true;
  }

  // Standard configuration:
  // e.g. 1 × 30 GB, 1 × 60 GB, 1 × unlimited
  if (
    lines.length <= plan.includedLines &&
    lines.every((line) => plan.mobileGbPerLine >= line.data_gb)
  ) {
    return true;
  }

  // Alternative configuration:
  // e.g. 2 × 30 GB for the 60 GB plans
  if (
    plan.alternativeLines !== undefined &&
    plan.alternativeGbPerLine !== undefined &&
    lines.length <= plan.alternativeLines &&
    lines.every((line) => plan.alternativeGbPerLine! >= line.data_gb)
  ) {
    return true;
  }

  return false;
}

/**
 * Determines how many mobile lines are included
 * for this particular invoice/plan combination.
 */
function getIncludedLineCount(invoice: InvoiceData, plan: WibePlan): number {
  const lines = invoice.mobile_lines ?? [];

  // Standard configuration
  if (
    lines.length <= plan.includedLines &&
    lines.every((line) => plan.mobileGbPerLine >= line.data_gb)
  ) {
    return plan.includedLines;
  }

  // Alternative configuration, such as 2 × 30 GB
  if (
    plan.alternativeLines !== undefined &&
    plan.alternativeGbPerLine !== undefined &&
    lines.length <= plan.alternativeLines &&
    lines.every((line) => plan.alternativeGbPerLine! >= line.data_gb)
  ) {
    return plan.alternativeLines;
  }

  return plan.includedLines;
}

/**
 * Calculates additional mobile lines.
 *
 * Extra lines cost 3€/month each.
 */
function getExtraLines(invoice: InvoiceData, plan: WibePlan): number {
  const lines = invoice.mobile_lines ?? [];

  if (planCoversMobileLines(invoice, plan)) {
    return 0;
  }

  const includedLines = getIncludedLineCount(invoice, plan);

  return Math.max(0, lines.length - includedLines);
}

/**
 * Returns the GB available for a particular line.
 */
function getOfferedGbForLine(plan: WibePlan, lineIndex: number): number {
  // For the 60 GB / 2 × 30 GB configuration,
  // the second line receives 30 GB.
  if (
    plan.alternativeLines === 2 &&
    plan.alternativeGbPerLine === 30 &&
    lineIndex === 1
  ) {
    return 30;
  }

  return plan.mobileGbPerLine;
}

function buildOffer(invoice: InvoiceData, plan: WibePlan): OfferCandidate {
  const lines = invoice.mobile_lines ?? [];

  const extraLines = getExtraLines(invoice, plan);

  const extraLinesCost = extraLines * EXTRA_LINE_PRICE;

  const totalMonthly = plan.priceNum + extraLinesCost;

  const monthlySavings = invoice.monthly_price - totalMonthly;

  const includedLineCount = getIncludedLineCount(invoice, plan);

  const lineComparisons: LineComparison[] = lines.map((line, i) => {
    const offeredGb = getOfferedGbForLine(plan, i);

    return {
      number: line.number || `Línea ${i + 1}`,

      currentGb: line.data_gb,

      offeredGb,

      improved: offeredGb > line.data_gb,

      isExtra: i >= includedLineCount,
    };
  });

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
 * Returns a ranked list of WiBe plan candidates
 * for the given invoice.
 *
 * Current plans:
 *
 * 600 Mb
 * - 30 GB — 29.90€
 * - 60 GB / 2 × 30 GB — 35€
 * - GB Ilimitadas — 48€
 *
 * 1 Gb
 * - 30 GB — 35€
 * - 60 GB / 2 × 30 GB — 39€
 * - GB Ilimitadas — 52€
 *
 * Additional mobile lines:
 * +3€/month
 */
export function getOfferCandidates(invoice: InvoiceData): OfferCandidate[] {
  const lines = invoice.mobile_lines ?? [];

  const maxLineGb =
    lines.length > 0 ? Math.max(...lines.map((line) => line.data_gb)) : 0;

  const lineCount = lines.length;

  /**
   * A plan is suitable when:
   *
   * 1. Its normal configuration covers the invoice, OR
   * 2. Its alternative configuration covers the invoice.
   */
  const fitsPlan = (plan: WibePlan): boolean => {
    if (lineCount === 0) {
      return true;
    }

    const standardFits =
      lineCount <= plan.includedLines && plan.mobileGbPerLine >= maxLineGb;

    const alternativeFits =
      plan.alternativeLines !== undefined &&
      plan.alternativeGbPerLine !== undefined &&
      lineCount <= plan.alternativeLines &&
      plan.alternativeGbPerLine >= maxLineGb;

    return standardFits || alternativeFits;
  };

  const pickCheapest = (list: WibePlan[]): WibePlan | undefined =>
    [...list].sort((a, b) => a.priceNum - b.priceNum)[0];

  const suitablePlans = WIBE_PLANS.filter(fitsPlan);

  const sixHundredPlans = suitablePlans.filter((plan) => plan.fiberMb === 600);

  const oneGigPlans = suitablePlans.filter((plan) => plan.fiberMb === 1000);

  /**
   * Match the customer's current fibre speed first.
   *
   * If they currently have more than 600 Mb,
   * start with the 1 Gb plans.
   */
  const primaryPool =
    invoice.fiber_speed_mb > 600 ? oneGigPlans : sixHundredPlans;

  const primary =
    pickCheapest(primaryPool) ??
    pickCheapest(suitablePlans) ??
    pickCheapest(WIBE_PLANS);

  if (!primary) {
    return [];
  }

  /**
   * Find the equivalent 1 Gb upgrade.
   *
   * Example:
   * 600 + 30 GB → 1 Gb + 30 GB
   * 600 + 60 GB → 1 Gb + 60 GB
   * 600 + unlimited → 1 Gb + unlimited
   */
  const upgrade =
    primary.fiberMb === 600
      ? pickCheapest(
          WIBE_PLANS.filter(
            (plan) =>
              plan.fiberMb === 1000 &&
              plan.mobileGbPerLine >= primary.mobileGbPerLine &&
              planCoversMobileLines(invoice, plan),
          ),
        )
      : undefined;

  /**
   * Find the unlimited-data option
   * at the same fibre speed.
   */
  const unlimited = pickCheapest(
    WIBE_PLANS.filter(
      (plan) =>
        plan.fiberMb === primary.fiberMb &&
        plan.mobileGbPerLine >= 999 &&
        planCoversMobileLines(invoice, plan),
    ),
  );

  const candidatePlans = [primary, upgrade, unlimited].filter(
    (plan): plan is WibePlan => !!plan,
  );

  /**
   * Remove duplicate plans.
   */
  const uniquePlans = Array.from(
    new Map(candidatePlans.map((plan) => [plan.id, plan])).values(),
  );

  return uniquePlans
    .map((plan) => buildOffer(invoice, plan))
    .sort((a, b) => b.monthlySavings - a.monthlySavings);
}

/**
 * Legacy single-result shape,
 * kept for compatibility with older callers.
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

  fiberComparison: {
    current: string;
    offered: string;
    improved: boolean;
  };

  permanenceComparison: {
    current: string;
    offered: string;
    improved: boolean;
  };

  lineComparisons: LineComparison[];
};

export function findBestOffer(invoice: InvoiceData): ComparisonResult {
  const offers = getOfferCandidates(invoice);

  if (offers.length === 0) {
    throw new Error("No WiBe plans available for this invoice.");
  }

  const [best, ...rest] = offers;

  const matchedPlan = best.plan;

  /**
   * Find the first candidate that
   * represents a genuine fibre upgrade.
   */
  const upgrade = rest.find(
    (offer) => offer.plan.fiberMb > matchedPlan.fiberMb,
  );

  return {
    matchedPlan,

    upgradePlan: upgrade?.plan ?? null,

    extraLines: best.extraLines,

    extraLinesCost: best.extraLinesCost,

    totalMonthlyWithExtras: best.totalMonthly,

    monthlySavings: best.monthlySavings,

    annualSavings: best.annualSavings,

    upgradeMonthlyDiff: upgrade ? upgrade.totalMonthly - best.totalMonthly : 0,

    fiberComparison: best.fiberComparison,

    permanenceComparison: {
      current: invoice.has_permanence ? "Sí" : "No",

      offered: "No",

      improved: invoice.has_permanence,
    },

    lineComparisons: best.lineComparisons,
  };
}
