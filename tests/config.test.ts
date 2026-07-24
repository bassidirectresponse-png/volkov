import assert from "node:assert/strict";
import test from "node:test";
import { company, companyAddress } from "@/src/config/company";
import {
  breadcrumbJsonLd,
  organizationJsonLd,
} from "@/src/lib/structured-data";

test("central company configuration is exact", () => {
  assert.equal(company.legalName, "VOLKOV LTDA");
  assert.equal(company.taxId, "67.827.419/0001-92");
  assert.equal(company.email, "contact@groupvolkov.com");
  assert.equal(company.phone.href, "tel:+5517992044283");
  assert.equal(company.phone.display, "(17) 99204-4283");
});

test("renders the official addresses in both required formats", () => {
  assert.deepEqual(companyAddress.ptBR, [
    "Rua Paulo Brancalião, 184",
    "Conjunto Habitacional Helio Cazarini",
    "Olímpia – SP, CEP 15400-726",
    "Brasil",
  ]);
  assert.deepEqual(companyAddress.enUS, [
    "Rua Paulo Brancalião, 184",
    "Conjunto Habitacional Helio Cazarini",
    "Olímpia, São Paulo 15400-726",
    "Brazil",
  ]);
});

test("organization and breadcrumb structured data use supported types", () => {
  assert.equal(organizationJsonLd["@type"], "Organization");
  assert.equal(organizationJsonLd.address.addressCountry, "BR");
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);
  assert.equal(breadcrumbs["@type"], "BreadcrumbList");
  assert.equal(breadcrumbs.itemListElement.length, 2);
});
