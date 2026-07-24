export type AffiliateProduct = {
  slug: string;
  name: string;
  merchant: string;
  manufacturer: string;
  category: string;
  ingredientList: string[];
  suggestedUse?: string;
  warnings: string[];
  evidenceContext: string[];
  refundInformation?: string;
  customerSupport?: string;
  lastReviewedDate?: string;
  affiliateUrl?: string;
  disclosure: string;
  sources: Array<{ title: string; url: string }>;
  approvedClaims: string[];
  prohibitedClaims: string[];
  geographicAvailability: string[];
};

export const products: AffiliateProduct[] = [];
