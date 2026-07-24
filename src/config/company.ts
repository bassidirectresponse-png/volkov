const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://groupvolkov.com";

export const company = {
  legalName: "VOLKOV LTDA",
  publicName: "VOLKOV",
  taxId: "67.827.419/0001-92",
  email: "contact@groupvolkov.com",
  phone: {
    international: "+5517992044283",
    internationalDisplay: "+55 17 99204-4283",
    display: "(17) 99204-4283",
    href: "tel:+5517992044283",
  },
  address: {
    line1: "Rua Paulo Brancalião, 184",
    district: "Conjunto Habitacional Helio Cazarini",
    city: "Olímpia",
    state: "São Paulo",
    stateCode: "SP",
    postalCode: "15400-726",
    country: "Brazil",
    countryCode: "BR",
  },
  siteUrl,
  contactUrl: `${siteUrl}/contact`,
  privacyUrl: `${siteUrl}/privacy-policy`,
  termsUrl: `${siteUrl}/terms-of-use`,
  affiliateDisclosureUrl: `${siteUrl}/affiliate-disclosure`,
  healthDisclaimerUrl: `${siteUrl}/health-disclaimer`,
  editorialPolicyUrl: `${siteUrl}/editorial-policy`,
  correctionsPolicyUrl: `${siteUrl}/corrections-policy`,
} as const;

export const companyAddress = {
  ptBR: [
    company.address.line1,
    company.address.district,
    `${company.address.city} – ${company.address.stateCode}, CEP ${company.address.postalCode}`,
    "Brasil",
  ],
  enUS: [
    company.address.line1,
    company.address.district,
    `${company.address.city}, ${company.address.state} ${company.address.postalCode}`,
    company.address.country,
  ],
} as const;
