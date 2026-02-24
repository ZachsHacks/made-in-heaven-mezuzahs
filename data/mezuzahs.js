// ┌─────────────────────────────────────────────────────────────────────────┐
// │  MADE IN HEAVEN MEZUZAHS — Collection Data                              │
// │                                                                         │
// │  This is the ONLY file you need to edit to update the gallery.          │
// │                                                                         │
// │  To EDIT a piece  → change the name, tagline, price, or description     │
// │  To ADD a piece   → copy any entry, paste it at the end, fill it in,   │
// │                     and drop the photo in the /images/ folder           │
// │  To REMOVE a piece → delete its entire entry (from { to the closing },) │
// │                                                                         │
// │  CATEGORIES — tag each piece with one or more of:                       │
// │    "Small (4\")"  "Medium (4-6\")"  "Large (7-8\")"                     │
// │    "Extra Large (10-12\")"  "With Gold Leaf"  "Custom"  "Coming Soon"  │
// └─────────────────────────────────────────────────────────────────────────┘

const MEZUZAHS = [

  {
    // The filename of the photo inside the /images/ folder
    image: "images/Bitachon.avif",

    // The piece name shown on the card and detail view
    name: "Bitachon",

    // Short subtitle shown under the name on the card
    tagline: "Trust & Faith",

    // Price in dollars (number, no $ sign needed)
    price: 95,

    // Categories — comma-separated tags for filtering
    categories: ["Medium (4-6\")"],

    // Full description shown when someone clicks "View Details"
    description: `Bitachon — the Hebrew word for complete trust in the Divine — is the
      soul of this piece. Hand-sculpted and finished with intention, it serves
      as a daily reminder that your home is held in something greater than
      yourself. A meaningful gift for any milestone or occasion.`,
  },

  {
    image: "images/Dream-Column.avif",
    name: "Dream Column",
    tagline: "Elegant & Statuesque",
    price: 125,
    categories: ["Large (7-8\")"],
    description: `Rising with quiet grace, the Dream Column mezuzah brings a refined,
      architectural beauty to any doorpost. Its tall, composed form is an
      invitation to pause at the threshold — to remember where you are going
      and why. Handcrafted by Sorah Weiss in a single, luminous piece.`,
  },

  {
    image: "images/I-Love-You-Hashem.avif",
    name: "I Love You Hashem",
    tagline: "Joyful Devotion",
    price: 85,
    categories: ["Small (4\")"],
    description: `A declaration of love painted in the most personal and direct language —
      "I Love You, Hashem." This vibrant, heartfelt piece radiates warmth and
      joy. Perfect for a home that celebrates faith openly and joyfully.
      Every detail is handcrafted with devotion and care by Sorah Weiss.`,
  },

  {
    image: "images/Raw-Terracotta.avif",
    name: "Raw Terracotta",
    tagline: "Earthy & Honest",
    price: 70,
    categories: ["Small (4\")"],
    description: `In its natural, unglazed state, terracotta tells the truth — it is of
      the earth, shaped by hands, warmed by fire. This mezuzah celebrates
      the beauty of raw materials and the craft behind every curve. Timeless
      and grounding, it brings a sense of the ancient and sacred into any home.`,
  },

  {
    image: "images/Terracotta-Blessing.avif",
    name: "Terracotta Blessing",
    tagline: "Warmth & Sacred Word",
    price: 110,
    categories: ["Large (7-8\")"],
    description: `Rich terracotta clay meets the power of sacred blessing in this warm,
      handcrafted mezuzah. The clay carries a natural warmth that feels alive
      in your hand — and on your doorpost, it speaks a blessing over all who
      enter and leave. A piece filled with intention and made with love.`,
  },

  {
    image: "images/Terracotta-Silver.avif",
    name: "Terracotta Silver",
    tagline: "Rustic Meets Refined",
    price: 145,
    categories: ["Extra Large (10-12\")", "With Gold Leaf"],
    description: `The warmth of handcrafted terracotta clay meets the cool elegance of
      silver in a striking, balanced contrast. Traditional craft and timeless
      beauty come together in this one-of-a-kind piece. Sorah Weiss handcrafts
      each one individually — no two are ever exactly the same.`,
  },

  // ─── ADD NEW PIECES BELOW THIS LINE ────────────────────────────────────
  //
  // Template — copy, paste below, and fill in your details:
  //
  // {
  //   image:       "images/Your-Photo-Name.avif",
  //   name:        "Piece Name",
  //   tagline:     "Short subtitle",
  //   price:       100,
  //   categories:  ["Medium (4-6\")"],
  //   description: `Your description here. Can be multiple sentences.
  //     Indent continuation lines however you like.`,
  // },

];
