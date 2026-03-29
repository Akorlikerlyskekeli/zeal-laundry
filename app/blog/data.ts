export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  videoId?: string; // ← Add this (optional)
};

export const posts: Post[] = [
  {
    id: "how-to-remove-tough-stains",
    title: "How to Remove Tough Stains From Your Clothes",
    excerpt:
      "Stains happen to everyone. Whether it is food, oil or ink, here is your complete guide to removing the most common tough stains from your clothes at home.",
    content: `
      Stains are one of the most frustrating laundry challenges. But with the right technique, most stains can be removed completely. Here is what you need to know.

      **Act Quickly**
      The faster you treat a stain, the better your chances of removing it. Fresh stains are always easier to deal with than dried ones.

      **Common Stain Removal Tips:**

      - **Food stains** — Scrape off excess, then soak in cold water before washing.
      - **Oil/Grease** — Apply dish soap directly, let sit for 10 minutes, then wash.
      - **Blood** — Always use COLD water. Hot water sets blood stains permanently.
      - **Ink** — Dab with rubbing alcohol, then wash normally.
      - **Sweat stains** — Soak in a mix of white vinegar and water before washing.

      **When to Call the Professionals**
      Some stains on delicate fabrics like silk or wool require professional dry cleaning. Attempting to remove them at home can damage the fabric permanently.

      At Zeal Laundry, our expert team uses professional-grade stain removal products that are safe for all fabric types. Bring your stained garments to us in Koforidua and we will get them looking fresh again!
    `,
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop",
    videoId: "CHzLckkSATI", // ← YouTube video ID about stain removal
    author: "Zeal Laundry Team",
    date: "March 15, 2026",
    category: "Laundry Tips",
    tags: ["stains", "laundry tips", "cleaning"],
    readTime: "4 min read",
  },
  {
    id: "how-to-care-for-delicate-fabrics",
    title: "How to Care for Delicate Fabrics Like Silk and Wool",
    excerpt:
      "Delicate fabrics need special attention. Learn how to properly wash, dry and store your silk, wool and cashmere garments to keep them looking new.",
    content: `
      Delicate fabrics like silk, wool and cashmere require extra care. Here is how to keep them in perfect condition.

      **Silk Care**
      - Always hand wash in cold water or use a delicate machine cycle.
      - Use a gentle detergent designed for silk.
      - Never wring silk — gently press out water and lay flat to dry.
      - Iron on the lowest setting with a cloth between the iron and fabric.

      **Wool Care**
      - Hand wash in cool water or use a wool/delicate cycle.
      - Use a wool-specific detergent.
      - Never tumble dry wool — it will shrink. Lay flat to dry.
      - Store folded, not on hangers, to prevent stretching.

      **Cashmere Care**
      - Hand wash only in lukewarm water.
      - Use a small amount of baby shampoo as detergent.
      - Reshape while wet and dry flat.

      **When in Doubt — Dry Clean**
      If you are unsure about washing a delicate item, bring it to Zeal Laundry in Koforidua. Our dry cleaning service will handle it safely and professionally.
    `,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop",
    videoId: "zz_Q49_RecY", // ← YouTube video about fabric care
    author: "Zeal Laundry Team",
    date: "March 8, 2026",
    category: "Fabric Care",
    tags: ["silk", "wool", "delicate fabrics", "dry cleaning"],
    readTime: "5 min read",
  },
  {
    id: "why-professional-laundry-saves-money",
    title: "Why Using a Professional Laundry Service Saves You Money",
    excerpt:
      "Think doing laundry at home is cheaper? Think again. Here is a breakdown of the hidden costs of home laundry vs professional laundry services in Ghana.",
    content: `
      Many people assume doing laundry at home is always cheaper than using a professional service. But when you add up all the costs, the picture looks very different.

      **The Hidden Costs of Home Laundry:**
      - Water bills — Washing machines use a lot of water per cycle.
      - Electricity — Heating water and running a dryer is expensive.
      - Detergent & fabric softener — Quality products add up quickly.
      - Equipment wear — Washing machines need servicing and eventually replacement.
      - Your time — Your time has value!

      **The Value of Professional Laundry:**
      - We buy cleaning products in bulk at wholesale prices.
      - Industrial machines are more efficient and use less water per item.
      - Professional results mean clothes last longer.
      - Your time is freed up for more important things.

      **The Zeal Laundry Difference**
      At Zeal Laundry in Koforidua, our prices start from just GHS 5 per item. When you factor in your time, utilities and products, professional laundry is often the smarter financial choice.
    `,
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&auto=format&fit=crop",
    author: "Zeal Laundry Team",
    date: "February 28, 2026",
    category: "Tips & Advice",
    tags: ["save money", "professional laundry", "koforidua"],
    readTime: "3 min read",
  },
  {
    id: "how-to-wash-bedding-properly",
    title: "How to Wash Your Bedding Properly for a Healthy Sleep",
    excerpt:
      "Your bedding collects dust, sweat and bacteria over time. Here is how often you should wash your sheets, pillows and duvets for a cleaner and healthier sleep.",
    content: `
      Clean bedding is essential for good health and quality sleep. Here is everything you need to know about washing your bedding properly.

      **How Often Should You Wash Bedding?**
      - Bed sheets & pillowcases — Every 1–2 weeks.
      - Duvet covers — Every 2–4 weeks.
      - Pillows — Every 3–6 months.
      - Duvets/comforters — Every 6 months.
      - Mattress protector — Every 2 months.

      **Best Practices for Washing Sheets:**
      - Use hot water (60°C) to kill bacteria and dust mites.
      - Use a quality detergent.
      - Don't overload the washing machine.
      - Tumble dry on medium heat or line dry in the sun.

      **Let Zeal Laundry Handle It**
      Washing duvets and large bedding at home can be difficult without a large machine. Bring them to Zeal Laundry in Koforidua and we will wash, dry and return them fresh and crisp!
    `,
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&auto=format&fit=crop",
    videoId: "TnKBBfQoKLM", // ← YouTube video about washing bedding
    author: "Zeal Laundry Team",
    date: "February 15, 2026",
    category: "Health & Hygiene",
    tags: ["bedding", "sheets", "healthy home", "laundry tips"],
    readTime: "4 min read",
  },
  {
    id: "carpet-cleaning-tips",
    title: "5 Signs Your Carpet Needs a Professional Deep Clean",
    excerpt:
      "Carpets can hide a lot of dirt, allergens and bacteria beneath their surface. Here are 5 signs it is time to get your carpet professionally cleaned in Koforidua.",
    content: `
      Your carpet might look clean on the surface but still be harbouring dirt, allergens and bacteria deep in its fibres. Here are the top signs you need a professional carpet clean.

      **1. Visible Stains That Won't Come Out**
      If home cleaning products haven't worked on stubborn stains, it is time to call in the professionals.

      **2. Persistent Bad Smell**
      Odours from pets, food or moisture can get trapped in carpet fibres and won't go away with regular vacuuming.

      **3. Increased Allergy Symptoms**
      Carpets trap dust mites, pet dander and pollen. If your family is sneezing more, your carpet may be the culprit.

      **4. Carpet Looks Dull or Matted**
      Over time, dirt and foot traffic dull the carpet fibres. Professional cleaning restores the look and feel.

      **5. It Has Been Over 6 Months**
      Even if your carpet looks clean, it should be professionally cleaned every 6 months for hygiene.

      **Zeal Laundry Carpet Cleaning in Koforidua**
      Our carpet cleaning service uses deep extraction techniques to remove all dirt, stains and odours. Contact us today for a free quote!
    `,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    videoId: "tPTBBouHnbg", // ← YouTube video about carpet cleaning
    author: "Zeal Laundry Team",
    date: "February 5, 2026",
    category: "Carpet Care",
    tags: ["carpet cleaning", "deep clean", "koforidua", "home care"],
    readTime: "3 min read",
  },
  {
    id: "laundry-mistakes-to-avoid",
    title: "7 Common Laundry Mistakes You Are Probably Making",
    excerpt:
      "Are you accidentally shrinking your clothes or fading your colours? Here are 7 of the most common laundry mistakes and exactly how to fix them.",
    content: `
      Most people make these laundry mistakes without even realising it. Here is what to watch out for.

      **1. Overloading the Washing Machine**
      Too many clothes means they won't get properly clean. Fill the drum to about 75% capacity.

      **2. Using Too Much Detergent**
      More detergent doesn't mean cleaner clothes. Excess detergent leaves residue and can damage your machine.

      **3. Washing Everything in Hot Water**
      Hot water is great for whites and bedding but can shrink and fade coloured clothes. Always check the label.

      **4. Not Sorting Your Laundry**
      Always separate whites, lights and darks to prevent colour bleeding.

      **5. Leaving Clothes in the Washer Too Long**
      Clothes left in a damp machine for hours develop mildew and bad odours. Transfer to the dryer promptly.

      **6. Ignoring Fabric Care Labels**
      Those little symbols on your clothes tell you exactly how to wash them. Ignoring them can ruin garments.

      **7. Rubbing Stains Instead of Blotting**
      Rubbing spreads stains and damages fibres. Always blot from the outside in.

      **Save Yourself the Stress**
      Let Zeal Laundry in Koforidua handle your laundry professionally. We know exactly how to treat every fabric type!
    `,
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&auto=format&fit=crop",
    videoId: "qQOP_mKRnGQ", // ← YouTube video about laundry mistakes
    author: "Zeal Laundry Team",
    date: "January 20, 2026",
    category: "Laundry Tips",
    tags: ["laundry mistakes", "tips", "fabric care"],
    readTime: "5 min read",
  },
];

export const categories = [
  "All",
  "Laundry Tips",
  "Fabric Care",
  "Tips & Advice",
  "Health & Hygiene",
  "Carpet Care",
];
