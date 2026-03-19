# Dropship Funnel Architecture — Mongolia

## Funnel Flow

```
Facebook/Instagram Ad
       ↓
Landing Page (index.html)
       ↓
Direct Order Form (name, phone, address, tier)
       ↓
Telegram Bot Notification  →  You confirm via Telegram
       ↓
WhatsApp/Phone Follow-Up  →  Confirm order + COD
       ↓
Ship from China (1688/AliExpress) or Local Warehouse
       ↓
Customer receives + COD payment
```

## Ad → Landing Strategy

### Facebook Ad Checklist
- **Format:** Video (15-30sec) or carousel (3-5 images)
- **Copy:** Problem → Solution → "Одоо авах" CTA
- **Targeting:** Women 22-40, UB + major cities, interests: Korean beauty, skincare
- **Budget:** Start ₮30,000-50,000/day ($10-15 USD)
- **Pixel:** Add Facebook Pixel to `index.html` `<head>`:

```html
<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','YOUR_PIXEL_ID');
fbq('track','PageView');
</script>
```

### Key Events to Track
- `PageView` — page load
- `ViewContent` — scroll past price section
- `AddToCart` — click tier selector
- `InitiateCheckout` — scroll to order form
- `Purchase` — form submitted

## Pricing Strategy

```
Product cost (1688):     $3-8 USD
Shipping to MN:          $2-5 USD
Total cost:              $5-13 USD (₮17K-45K)

Sell at:                 ₮69,000-89,900
Margin:                  ₮45K-73K per unit (60-80%)
Ad cost per purchase:    ₮15K-30K (target)
Net profit:              ₮15K-58K per sale
```

### Tiered Pricing Math
| Tier | Price | Per Unit | Your Margin |
|---|---|---|---|
| 1 pc | ₮89,900 | ₮89,900 | ~₮60K |
| 2 pcs | ₮149,900 | ₮74,950 | ~₮100K total |
| 3 pcs | ₮199,900 | ₮66,633 | ~₮140K total |

## Telegram Bot Setup

1. Create bot via [@BotFather](https://t.me/BotFather) → get `BOT_TOKEN`
2. Send a message to your bot, then get `CHAT_ID`:
   ```
   https://api.telegram.org/bot<TOKEN>/getUpdates
   ```
3. Replace in `index.html`:
   ```js
   fetch(`https://api.telegram.org/bot<TOKEN>/sendMessage`, {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       chat_id: '<CHAT_ID>',
       text: msg
     })
   });
   ```

## Shipping / Logistics

### Option A: Direct Ship from China
- Source from 1688.com or AliExpress
- Ship via air cargo to UB (7-14 days)
- Cost: $2-5/item via consolidated shipping agents
- Risk: Slow, customs delays

### Option B: Local Warehouse (Better)
- Pre-order 50-100 units, ship in bulk
- Store at home or shared warehouse in UB
- Ship via local couriers (Дархан Экспресс, MN Post)
- Faster delivery = higher reviews = better conversion

### COD (Кассын төлбөр)
- Most popular payment in Mongolia
- Mongolyn Шуудан, Дархан Экспресс support COD
- Customer pays on delivery
- You receive money within 3-5 days

## Hosting the Page

### Free Options
1. **Netlify** — drag & drop folder, free HTTPS, custom domain
2. **Vercel** — same as Netlify
3. **GitHub Pages** — push to repo, enable pages

### Custom Domain
- Buy from `.mn` registrar or use `.store` / `.shop` from Namecheap
- Example: `lumina-korea.store`
- Connect to Netlify/Vercel via DNS
