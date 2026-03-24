# Coffee Personality Quiz — Requirements

## Overview
A "What's Your Coffee Personality?" quiz for Basecamp Coffee. Users answer 6 abstract & quirky questions and get a single personality result with a coffee recommendation.

---

## Personality → Coffee Pairings

| Personality | Coffee | Tagline |
|-------------|--------|---------|
| Bold Adventurer | Double Espresso | "You live for intensity" |
| Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" |
| Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." |
| Night Owl | Red Eye (coffee + espresso shot) | "Sleep is optional" |
| Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" |

---

## Result Display
**Single recommendation** — show the top personality only. Example: "You're a Night Owl! Your coffee: Red Eye."

---

## Visual Style
**Warm & Cozy** (Style 4)
- Background: soft warm beige (#f5ede0)
- Card: off-white (#fffcf8) with subtle border
- Typography: Lora serif for headings, Source Sans for body
- Accent color: warm brown/caramel (#b07d50, #c8894a)
- Progress indicator: coffee cup emojis (☕☕☕☕☕)
- Rounded corners, soft shadows

---

## Images & Icons
**Emoji/icons only** — no photos. Use relevant emojis next to answer options for visual interest. Keep consistent with warm, cozy feel.

---

## Quiz Questions

### Q1: You're given a blank canvas and unlimited paint. What do you make?
- 🎨 Something explosive and chaotic — pure energy on canvas → **Bold Adventurer**
- 🍰 A dessert. Obviously. → **Sweet Enthusiast**
- ✦ A single perfect brushstroke, then stop → **Zen Minimalist**
- 🌙 Something eerie and beautiful at 2am → **Night Owl**
- 📐 A color-coded grid. It's just efficient. → **Practical Pragmatist**

### Q2: You find $20 on the street. What do you do?
- 🎢 Spend it on something wild, immediately → **Bold Adventurer**
- 🧁 Treat yourself to something sweet → **Sweet Enthusiast**
- 🪴 Save it — you already have everything you need → **Zen Minimalist**
- 🍟 Keep it for a late-night snack run → **Night Owl**
- 🔧 Put it toward something practical → **Practical Pragmatist**

### Q3: Pick a superpower:
- ⚡ Time manipulation — move fast, never slow down → **Bold Adventurer**
- ✨ Make anything taste like your favorite dessert → **Sweet Enthusiast**
- 🧘 Absolute calm in any situation → **Zen Minimalist**
- 😴 Never need sleep → **Night Owl**
- 🛠️ Instantly fix anything that's broken → **Practical Pragmatist**

### Q4: Your ideal Saturday looks like:
- 🏔️ Something I've never done before — ideally with some danger → **Bold Adventurer**
- 🥐 A long brunch with too many pastries → **Sweet Enthusiast**
- 📖 Alone, quiet, perfectly undisturbed → **Zen Minimalist**
- 🌃 Starting at noon and going until 4am → **Night Owl**
- ✅ Getting things done so Sunday is actually free → **Practical Pragmatist**

### Q5: A mysterious door appears. You:
- 🚪 Kick it open immediately → **Bold Adventurer**
- 🎂 Hope there's cake inside → **Sweet Enthusiast**
- 👁️ Sit near it and observe first → **Zen Minimalist**
- 🕛 Wait until midnight to open it → **Night Owl**
- 🔍 Check if it's structurally sound first → **Practical Pragmatist**

### Q6: Your phone battery is at 3%. You:
- 😈 Live on the edge, keep going → **Bold Adventurer**
- 😱 Panic — you need to text someone about dessert → **Sweet Enthusiast**
- 😌 You already don't use your phone much → **Zen Minimalist**
- 😴 It's fine, you're up anyway → **Night Owl**
- 🔋 You have a backup charger. Obviously. → **Practical Pragmatist**

---

## Logic
- Each answer maps to one personality
- Tally at the end — highest count wins
- In case of tie: pick the personality that appeared first in the tied answers
- Show result screen with: personality name, tagline, coffee recommendation, emoji

---

## Tech Stack
- Next.js (React framework)
- JavaScript
- Tailwind CSS for styling
- No backend needed — all logic runs in the browser
