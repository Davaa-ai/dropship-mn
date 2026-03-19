# Dropship MN — Design System

> Reusable system for building Mongolian-language product landing pages targeted at Facebook ad traffic. Mobile-first, conversion-focused, minimal JS.

---

## Color Tokens

```css
--primary: #e8364e;       /* CTA buttons, prices, urgency */
--primary-soft: #fff1f3;  /* Backgrounds, highlights */
--accent: #ff8c42;        /* Gradients, secondary CTAs */
--gold: #b8860b;          /* Stars, premium feel */
--green: #16a34a;         /* Savings, success, "free" */
--bg: #fafafa;            /* Page background */
--white: #ffffff;         /* Card backgrounds */
--text: #111;             /* Primary text */
--text-secondary: #555;   /* Body copy */
--text-muted: #999;       /* Labels, meta */
--border: #ebebeb;        /* Dividers, card borders */
```

## Typography

- **Font:** Inter (Google Fonts) — works perfectly with Mongolian Cyrillic
- **Scale:** 11px (meta) → 13px (body) → 14px (labels) → 16-18px (headers) → 32px (price)
- **Weights:** 400 (body), 600 (labels), 700 (headers), 800-900 (prices, CTAs)

## Spacing

- Section gap: `8px` (between cards)
- Inner padding: `20px` (card content)
- Small gap: `10px` (between chips, items)
- Radius: `14px` (cards), `8px` (small), `10px` (inputs), `12px` (buttons)

---

## Component Inventory

| Component | CSS Class | Purpose |
|---|---|---|
| Sticky header | `.header` | Search + cart + back |
| Image gallery | `.gallery` | Horizontal scroll, snap |
| Gallery dots | `.gallery-dots` | Active indicator |
| Price block | `.price-block` | Price + discount + title |
| Promo strip | `.promo-strip` | Flash sale + countdown |
| Urgency bar | `.urgency` | Live viewers + stock |
| Tiered pricing | `.tiers > .tier` | 1/2/3 pc radio select |
| Coupon scroll | `.coupon-scroll` | Horizontal coupon cards |
| Trust badges | `.trust` | 2x2 guarantee grid |
| Seller card | `.seller` | Store info + follow |
| Info rows | `.info-rows` | Key-value detail rows |
| Section header | `.section-head` | H2 + "see all" link |
| Review card | `.review` | Avatar + stars + text |
| Reviews summary | `.reviews-summary` | Big number + bar chart |
| Q&A | `.qa` | Question + answer |
| Description images | `.desc-section` | Full-width img + text |
| Order form | `.order-form` | Name/phone/address/submit |
| Related scroll | `.related-scroll` | Horizontal product cards |
| Bottom bar | `.bottom-bar` | Sticky CTA buttons |
| Purchase toast | `.toast-container` | Fake buyer notifications |

---

## Image Generation Prompts

### Hero Shot
```
Premium [PRODUCT_TYPE] product photography. [PRODUCT_DESCRIPTION] arranged elegantly on [SURFACE]. Clean, minimalist aesthetic, soft diffused studio lighting, [COLOR_PALETTE]. Commercial product photography style, ultra-high detail.
```

### Model Shot
```
Beautiful East Asian woman [USING/WEARING/HOLDING PRODUCT], minimal makeup, [POSE]. Studio portrait with soft [COLOR] background. Professional beauty/fashion photography, high fashion editorial style.
```

### Before/After
```
Before and after [PRODUCT_BENEFIT] infographic. Left side labeled "ӨМНӨ" shows [BEFORE_STATE]. Right side labeled "ДАРАА" shows [AFTER_STATE]. Split screen comparison, soft pink background, professional advertisement style.
```

### Ingredient Flat Lay
```
Natural ingredient flat lay — [LIST_INGREDIENTS] arranged on white marble. Premium [CATEGORY] concept, soft pastel editorial photography.
```

### Steps Infographic
```
[PRODUCT_TYPE] routine infographic showing [N] numbered steps. Step 01: [ITEM1], Step 02: [ITEM2]... Each product in elegant [MATERIAL] with [ACCENTS]. Clean white background, premium product photography, editorial style.
```

---

## Mongolian UX Copy Patterns

### Urgency
- Хямдрал дуусахад → (countdown)
- Өнөөдрийн санал — хязгаартай!
- Зөвхөн энэ долоо хоногт

### Scarcity
- Зөвхөн [N] ширхэг үлдлээ!
- Нөөц дуусч байна
- Сүүлийн [N] ширхэг — дахин нөхөгдөхгүй

### Social Proof
- [N] хүн худалдан авсан
- Одоо [N] хүн үзэж байна
- [NAME] ([DISTRICT]) захиалга өглөө — [N] мин өмнө

### Trust
- 100% жинхэнэ бараа
- Үнэгүй хүргэлт
- 7 хоногт буцаах боломжтой
- Аюулгүй төлбөр

---

## Folder Structure

```
dropship-mn/
├── index.html          ← Current LUMINA product page
├── style.css           ← Shared design system CSS
├── template.html       ← Blank product template
├── design-system.md    ← This file
├── tricks.md           ← Mongolian copy library
├── funnel-architecture.md ← Business system docs
├── img_hero.png        ← Product-specific images
├── img_model.png
├── img_texture.png
├── img_flatlay.png
├── img_ingredients.png
├── img_before_after.png
├── img_steps.png
├── img_ingredients_info.png
└── .agents/workflows/
    └── new-product.md  ← Step-by-step workflow
```
