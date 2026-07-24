import { LegalPageLayout } from "@/src/components/legal/legal-page-layout";
import { CookieSettingsButton } from "@/src/components/cookies/cookie-settings-button";
import { createMetadata } from "@/src/lib/metadata";

export const metadata = createMetadata(
  "Cookie Policy",
  "How VOLKOV uses necessary storage and optional cookies.",
  "/cookie-policy",
);

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      intro="Non-essential cookies and measurement remain off unless you choose to enable them."
    >
      <h2>What cookies are</h2>
      <p>
        Cookies and similar technologies store or read small pieces of
        information on a device. They can support essential operation, remember
        choices, measure aggregate usage or help attribute an external referral.
      </p>
      <h2>Categories</h2>
      <h3>Strictly necessary</h3>
      <p>
        Used for security, basic delivery and remembering privacy choices. These
        functions cannot reasonably be provided without limited device storage.
      </p>
      <h3>Preferences</h3>
      <p>
        Remember optional display or content choices. They are disabled by
        default until selected.
      </p>
      <h3>Analytics</h3>
      <p>
        Help us understand aggregate site use, such as popular pages and
        technical performance. Analytics is disabled by default and should load
        only after consent when enabled operationally.
      </p>
      <h3>Advertising and affiliate measurement</h3>
      <p>
        May help a merchant or affiliate program attribute a qualifying
        purchase to a referral. These technologies are disabled by default on
        VOLKOV pages and may also be governed by the independent merchant&apos;s
        choices and policy after you leave this site.
      </p>
      <h2>Your choices</h2>
      <p>
        The consent banner gives balanced options to accept all, reject
        non-essential technologies or customize categories. No optional category
        is preselected. Your choice is stored on this device and can be changed
        at any time.
      </p>
      <CookieSettingsButton />
      <h2>Browser controls and retention</h2>
      <p>
        You can also delete or block cookies in your browser. Doing so may remove
        the stored consent choice and cause the banner to appear again. Retention
        periods depend on purpose and provider and should be kept no longer than
        necessary.
      </p>
    </LegalPageLayout>
  );
}
