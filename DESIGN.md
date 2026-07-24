# VOLKOV Design System

## Direction

A cinematic institutional research dossier that combines typographic
brutalism, restrained luxury, and editorial clarity. Asymmetric layouts and
large negative space create distinction; structured evidence blocks and
visible disclosures create trust.

## Color

- Primary forest: `#171e19`
- Sage: `#b7c6c2`
- White: `#ffffff`
- Taupe: `#9f8d8b`
- Beige: `#d7c5b2`
- Cyan: `#d5f4f9`
- Soft blue: `#bbe2f5`
- Charcoal: `#302b2f`
- Light background: `#fafafa`

Forest and light are the dominant surfaces. Sage, cyan, taupe, and beige signal
content layers and editorial metadata. Contrast must meet WCAG 2.2 AA.

## Typography

Anton is the specified display face for short uppercase headings. Plus Jakarta
Sans is the specified text and interface face. Display sizes use fluid `clamp()`
with a 6rem ceiling and tracking no tighter than `-0.04em`. Body copy stays
within 72 characters and uses comfortable leading.

## Layout

Use a 12-column editorial grid on wide screens, intentional asymmetry, and
fluid vertical spacing. Sections alternate between dense research assemblies
and generous negative space. Mobile layouts become linear and never depend on
horizontal animation.

## Components

- Navigation: fixed, translucent when useful, always legible, with an accessible
  focus-managed mobile menu.
- Buttons: compact text-forward actions with strong focus states and at least
  44px touch height.
- Insight previews: image-led editorial compositions with category, reading
  metadata, and a restrained circular read marker.
- Research assembly: layered paper-like panels, controlled scroll transforms,
  visible connector lines on desktop, and a static/reduced-motion layout.
- Legal content: narrow readable measure, explicit update date, strong internal
  navigation, and reusable disclosure notices.
- Forms: clear labels, inline errors, honeypot protection, explicit consent, and
  honest delivery states.

## Motion

Use the easing curve `cubic-bezier(0.16, 1, 0.3, 1)`. Animate only transforms
and opacity, generally between 700ms and 1000ms. Respect
`prefers-reduced-motion`, preserve native scroll, and ensure all content remains
available without animation.

## Imagery

Use original abstract or editorial imagery focused on ingredients, paper,
research, natural materials, healthy routines, and transparent organization.
Avoid people presented as experts, medical environments, products, brands,
children, before-and-after comparisons, and implied endorsements.
