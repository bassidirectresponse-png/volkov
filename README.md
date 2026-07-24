# VOLKOV Institutional Website

Production-oriented institutional and editorial website for **VOLKOV LTDA**.
The site presents the company, explains its editorial standards, publishes
responsible wellness education, discloses affiliate relationships, and provides
clear legal and contact information.

## Stack

- Next.js App Router API through vinext
- React and strict TypeScript
- Tailwind CSS 4 plus a project-level semantic design system
- Anton and Plus Jakarta Sans through `next/font`
- Framer Motion for the scroll-driven research-file assembly
- Lucide React for icons
- Zod for client and server validation
- Nodemailer for SMTP delivery when configured
- Node test runner with `tsx`
- Cloudflare Worker-compatible output for OpenAI Sites

## Structure

```text
app/
  api/contact/route.ts
  api/newsletter/route.ts
  insights/[slug]/page.tsx
  products/[slug]/page.tsx
  ...institutional and legal routes
src/
  components/
  config/
  content/
  lib/
public/
  images/
tests/
```

Company data is centralized in `src/config/company.ts`. Do not duplicate or
override official company details in page files.

## Local setup

Requirements: Node.js 22.13 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

The development server normally runs at `http://localhost:3000`.

## Environment variables

Copy `.env.example` and configure only values required by the active
environment. Never commit `.env`, `.env.local`, SMTP credentials or API keys.

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, the sitemap and structured
data. Keep it set to the final HTTPS origin in production.

## Contact form and SMTP

The contact API validates the payload on both client and server, rejects a
honeypot field, limits payload size, verifies request origin, removes header
line breaks and applies an in-memory rate limit.

For real delivery, configure:

```env
CONTACT_EMAIL="contact@groupvolkov.com"
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="..."
SMTP_PASSWORD="..."
SMTP_FROM="VOLKOV <contact@groupvolkov.com>"
```

When SMTP is absent, the form returns an honest unavailable state and offers a
direct `mailto:` fallback. It never simulates delivery.

The in-memory rate limiter is suitable for basic abuse reduction. For sustained
high-volume production traffic, replace it with a shared store or provider edge
rate limit.

## Newsletter

The newsletter is disabled by default:

```env
NEWSLETTER_ENABLED="false"
```

When disabled, the interface shows a non-interactive editorial notice. Setting
the flag to `true` does not invent a subscription: the API still reports that a
provider is required. Before launch, integrate a provider that supports:

- consent timestamp and source
- double opt-in
- suppression lists
- one-click unsubscribe
- deletion and export requests

## Cookies and analytics

Necessary storage remembers privacy choices. Preferences, analytics and
affiliate measurement are disabled by default. The banner provides equivalent
accept, reject and customize paths and can be reopened from the footer.

Do not load analytics or marketing scripts until the corresponding
`volkov:cookie-consent` event category is true. `ANALYTICS_ENABLED=false` is the
safe default.

## Content

### Add an article

Add a typed item to `src/content/insights.ts` with:

- unique slug
- natural-language title and summary
- publication and update dates
- sections and source links
- responsible alt text

The index, dynamic route, metadata, RSS and sitemap update from the same data.
Keep medical claims qualified and have every publication reviewed by a human.

### Add a product

Create a fully reviewed `AffiliateProduct` entry in
`src/content/products.ts`. Never publish a fictitious placeholder product. At
minimum, verify manufacturer, seller, current label, warnings, customer support,
commercial disclosure and sources.

External purchase links must use:

```html
rel="sponsored nofollow noopener"
```

Place `AffiliateDisclosure` before the first commercial action and
`ExternalPurchaseNotice` at the exit point.

### Update policies

Legal routes live under `app/*-policy`, `app/terms-of-use`,
`app/affiliate-disclosure` and `app/health-disclaimer`. Update the visible
revision date and request qualified legal review before launch or after
material operational changes.

## Commands

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:render
```

`test:render` rebuilds and checks server-rendered critical routes and the
branded 404. Unit tests cover company data, address formats, contact and
newsletter validation, rate limiting, disclosures, content slugs, cookie
choices, reduced motion and structured data.

## Security notes

- Security headers and CSP are declared in `next.config.ts`.
- API endpoints allow only POST for mutations and return 405 for GET.
- Request bodies are size-limited and validated with Zod.
- No sensitive health data is requested.
- External links use safe `rel` attributes.
- JSON-LD output escapes `<` before insertion.
- Logs avoid message contents and personal data.
- Secrets remain server-only.

Run `npm audit` regularly. Evaluate dependency advisories in context; do not use
`npm audit fix --force` without reviewing breaking changes.

## Accessibility and reduced motion

The interface targets WCAG 2.2 AA with semantic headings, skip navigation,
visible focus, labeled forms, 44px touch targets, keyboard-accessible menus and
balanced cookie controls. The exploded view uses a static grid when reduced
motion is requested and becomes a linear document on mobile.

Test:

1. Enable “Reduce motion” in the operating system.
2. Reload the home page.
3. Confirm the research file is readable without prolonged sticky motion.
4. Navigate the entire header, forms and cookie modal with the keyboard.
5. Zoom to 200% and confirm there is no horizontal page scroll.

## Structured data

The site publishes `Organization`, `WebSite`, `BreadcrumbList` and `Article`
data only. Validate production URLs with Google Rich Results Test and Schema.org
Validator. Do not add ratings, physician, pharmacy, medical organization or
fictitious product schemas.

## Build and deployment

### OpenAI Sites

```bash
npm run build
```

The project includes `.openai/hosting.json`, the Sites Vite plugin and a
Cloudflare-compatible worker entry. Build output is generated in `dist/`.

### Vercel

For a standard Vercel deployment, use the canonical Next.js runtime rather than
the vinext/Sites worker adapter, set all environment variables in the project
settings, configure the production domain and run the build command.

### Netlify

Use Netlify's current Next.js adapter, define environment variables in the site
settings, and verify dynamic route, API and security-header behavior in the
deployed environment.

### Domain

Point `groupvolkov.com` only after the target host provides the required DNS
records. Then set `NEXT_PUBLIC_SITE_URL=https://groupvolkov.com`, confirm the
certificate, choose the canonical hostname and redirect any alternate hostname.

## Launch checklist

- [x] Razão social configurada
- [x] CNPJ configurado
- [x] E-mail de suporte configurado
- [x] Telefone configurado
- [x] Logradouro e número configurados
- [x] Bairro configurado
- [x] Cidade configurada: Olímpia
- [x] Estado configurado: São Paulo
- [x] Sigla configurada: SP
- [x] CEP configurado: 15400-726
- [x] País configurado: Brasil
- [ ] Domínio groupvolkov.com apontado
- [ ] HTTPS validado
- [ ] Telefone testado em dispositivo real
- [ ] E-mail testado
- [ ] SMTP configurado
- [ ] Formulário testado com SMTP real
- [ ] Newsletter/provider configurado e testado
- [ ] Descadastro testado
- [ ] Cookie consent testado nos navegadores-alvo
- [ ] Analytics condicionado ao consentimento
- [ ] Políticas revisadas por assessoria jurídica
- [ ] Structured data validado
- [ ] Mobile e zoom 200% validados
- [ ] Lighthouse executado
- [ ] Exploded View testado no desktop, tablet e mobile
- [ ] Reduced motion e fallback sem JavaScript testados
- [ ] Safari e Chrome Android testados
- [ ] Ausência de scroll horizontal confirmada
- [ ] Core Web Vitals validados em produção
- [x] Nenhum produto fictício
- [x] Nenhum depoimento fictício
- [x] Nenhuma alegação médica promocional
- [x] Nenhuma marca de terceiro sem autorização
- [x] Nenhum segredo versionado
