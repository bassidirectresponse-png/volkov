import { company } from "@/src/config/company";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.publicName,
  url: company.siteUrl,
  email: company.email,
  telephone: company.phone.international,
  taxID: company.taxId,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.district}`,
    addressLocality: company.address.city,
    addressRegion: company.address.stateCode,
    postalCode: company.address.postalCode,
    addressCountry: company.address.countryCode,
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.publicName,
  url: company.siteUrl,
  publisher: {
    "@type": "Organization",
    name: company.legalName,
  },
};

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, company.siteUrl).toString(),
    })),
  };
}
