// ┌─────────────────────────────────────────────────────────────────────────┐
// │  MADE IN HEAVEN MEZUZAHS — Collection Data                              │
// │                                                                         │
// │  Managed via the admin panel.                                           │
// │                                                                         │
// │  CATEGORIES — mix and match any of:                                     │
// │    "Small (4″)"  "Medium (4-6″)"  "Large (7-8″)"  "Extra Large (10-12″)" │
// │    "With Gold Leaf"  "New Arrival"                                      │
// └─────────────────────────────────────────────────────────────────────────┘

const MEZUZAHS = [

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/7086d73d-7723-41d5-b084-848e97c7efd3.jpeg"],
    name:       "Amethyst from Hashem",
    tagline:    "Large amethyst",
    price:      140,
    categories: ["Extra Large (12 inches)","Porcelain","With Gold Leaf","With large Amethyst"],
    description: `This extra-large mezuzah celebrates through a striking large raw amethyst stone set against hand-painted porcelaiin in soft blues, purples, and greens, accented with delicate gold leaf that catches the light like blessings. A gentle reminder that protection and spiritual abundance come only from Hashem.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/5bd7438e-b640-40c9-b60f-27555c4117e7.jpeg"],
    name:       "Celestial Blue with Gold Leaf",
    tagline:    "Blue and Gold Leaf with Tube for Kosher Parchment",
    price:      45,
    categories: ["Small (4″)","Porcelain","With Gold Leaf"],
    description: `This handcrafted mezuzah pairs deep celestial blue with shimmering gold leaf accents, creating a luminous piece that catches the light beautifully and brings warmth to any doorway. The pre-fitted tube holds your kosher parchment, inviting blessings and divine protection into your home with artistic grace.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/9894402e-8718-48ed-8b90-6c3af090ca39.jpeg"],
    name:       "Rainbow Blessing",
    tagline:    "Colors of Divine Promise",
    price:      35,
    categories: ["Medium (5-7″)","Porcelain","With Gold Leaf"],
    description: `Jewel-toned and pastel bands in teals, oranges, yellows, and rose hues are stacked into a vibrant modern interpretation of sacred ritual and tradition. Gold leaf accent frames the colorful layers,  catching light like a radiant promise. `,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/38539d3e-0244-4aa7-a7a9-ad95b5687269.jpeg"],
    name:       "Swarovski Crystal  and Elegance meet",
    tagline:    "12 inch - Swarovski Crystals graceful and elegant.",
    price:      345,
    categories: ["Extra Large (12 inches)","White Stone","New Arrivals"],
    description: `Creamy ivory tower is made from white stone. This is simple and tasteful, once in a lifetime find has delicate Swarovski crystal petals catching light and creating rainbows.  A 12-inch showpiece that transforms any doorway into something truly extraordinary.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/2593d560-2ce7-4779-bd88-8e6028ed716a.jpeg"],
    name:       "Turquoise Footprints",
    tagline:    "Magnesita Crystals make up the shin on white stone fired in kiln",
    price:      65,
    categories: ["White Stone","With (Turquoise-colored) Magnesita Crystals","Large (8-10″)"],
    description: `Vibrant turquoise magnesita crystals shape the shin, as it presses gently into a weathered white stone base, capturing the tender imprint of a child's journey. Hopes and dreams in a white stone tower, waiting for a kosher mezuzah, to fulfill the mitzvah, from the Shema.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/e25a1a59-59dc-4e58-bcc6-e35fe92800f9.jpeg"],
    name:       "Retro-Pastel Garden Rose",
    tagline:    "Blooming at Your Door",
    price:      65,
    categories: ["With Gold Leaf","Porcelain","Large (8-10″)"],
    description: `Hand-sculpted floral in jewel-toned blues, purples, and pinks, with golden leaf accents dancing like morning dew. Artistic piece that honors both nature's beauty and the sanctity of the mitzvah from the Shema.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/ed6d5be8-015c-49f4-a909-25c428ee61e5.jpeg"],
    name:       "The Alabaster Divine",
    tagline:    "Porcelain fired in kiln, Sacred Tablets w/ Gold Leaf",
    price:      115,
    categories: ["Medium (5-7″)","With Gold Leaf","New Arrivals","Porcelain"],
    description: `Glowing with soft cream and ivory, its surface alive with organic striations and hand-carved detail. Gold leaf shimmers through the twin tablets adorned with Gold Leaf, infusing the piece with quiet spiritual radiance.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/b68bc5c6-bdf2-46fc-a29f-1718fa4de59b.jpeg"],
    name:       "Hashem's Amethyst Crystal",
    tagline:    "Raw and powerful w/ extra-large Amethyst Crystal",
    price:      175,
    categories: ["Large (8-10″)","White Stone"],
    description: `Raw large amethyst crystal with deep purple facets nestled on hand-carved white stone, with an earthly design, honoring the amethyst's ancient gift of healing and protection. The amethyst is just another masterpiece from Hashem.  The least we can do is fulfill the mitzvah of a kosher parchment in it with the Hebrew prayer.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/46c89423-63d6-40e7-a1f8-8daa8e860b67.jpeg"],
    name:       "The Cobalt Spirit",
    tagline:    "Where Heaven Meets the Threshold",
    price:      40,
    categories: ["Small (4″)","Porcelain","With Silver Leaf"],
    description: `Deep celestial blue glows like a twilight sky, hand-painted with a reverent touch and accented by a shimmering ,silver leaf shin. Small yet luminous, it invites heaven's blessing into every doorway it graces. `,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/783e282c-710f-4b81-a792-06f93a3eca32.jpeg"],
    name:       "Painted Joy",
    tagline:    "12\" Chaos Dreams in Rainbow Motion",
    price:      140,
    categories: ["Extra Large (12 inches)","New Arrivals","Porcelain"],
    description: `An exuberant burst of hot pinks, soft blues, sage greens, and earth tones dance across hand-painted linen in fearless brushwork. This generous 12-inch piece brings artistic passion and sacred intention together in perfect harmony.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/c33b0aaf-cf37-47ae-adf9-f6caa37ce971.jpg"],
    name:       "Celestial Whisper",
    tagline:    "12\"  Starlight Frozen in Sky Blue",
    price:      165,
    categories: ["Extra Large (12 inches)","White Stone","With Silver Leaf"],
    description: `Ethereal sky blue glazing captures the quiet majesty of a starlit night, while delicate silver accents trace constellations across its elongated form. A luminous extra-large sentinel that honors both artistic beauty and sacred tradition. My personal favorite!`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/b53584b3-d9ee-4204-8abd-258bfe83d0ca.jpeg"],
    name:       "Blue on Blue",
    tagline:    "Turquoise Marble, Golden Shin",
    price:      35,
    categories: ["Medium (5-7″)","Porcelain"],
    description: `Swirls of turquoise and deep blue marble dance across smooth porcelain, crowned by a gleaming golden shin. A serene piece that brings calm and blessing to your doorway.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/5db9a429-ae2b-4d8b-9916-04216ff7bcce.jpeg"],
    name:       "Earthen Whisper",
    tagline:    "Ancient Clay Speaks in Silence",
    price:      10,
    categories: ["Small (4″)","Raw Terracotta"],
    description: `Hand-sculpted from terracotta clay, its warm peachy-rose surface bears the gentle fingerprints of creation with a delicate botanical motif carved into its face. Weathered and organic, it invites the sacred into your doorway with humble, ancient beauty.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/01cbbb51-bc36-4b8a-b3ee-fc2b1771a155.jpeg"],
    name:       "Garden Rose",
    tagline:    "Blossoms of Clay, Blessings of Home",
    price:      285,
    categories: ["Large (8-10″)","Raw Terracotta"],
    description: `A blooming rose in full glory, with delicate petals and graceful leaves carved in exquisite detail from warm terracotta clay. A reminder that blessings grow naturally when we tend to our homes with intention and love.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/c8b3a615-db77-42da-a5dc-81dbb0fd45e7.jpeg"],
    name:       "Western Wall",
    tagline:    "Sacred Stones in Gold",
    price:      225,
    categories: ["Large (8-10″)","White Stone","With Gold Leaf"],
    description: `Hand-carved white stone evokes the ancient Western Wall, with gold leaf accents bringing warmth and reverence to every detail. A meaningful piece that connects your home to the holiest place on earth.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/9492b996-a10c-45c4-b68d-cf0e433da09d.jpeg"],
    name:       "Ancient Spirit",
    tagline:    "Ancient Clay Meets Spirit",
    price:      45,
    categories: ["Medium (5-7″)","Raw Terracotta"],
    description: `Raw terracotta fired in the kiln channels the wisdom of ancient ceramics, with a sculptural figure emerging from the top and graceful curved apertures. Each imperfection in the clay is a testament to authenticity and the artisan's devoted hands.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/c3d8d097-b41d-4393-9a08-ddd0626feade.jpeg"],
    name:       "Amethyst Glow",
    tagline:    "Purple Light on Sacred Stone with Gold Leaf shin",
    price:      50,
    categories: ["Small (4″)","White Stone","With Gold Leaf"],
    description: `A delicate amethyst stone sits nestled in creamy white stone accented with shimmering gold leaf. Small but radiant, it brings spiritual warmth and natural beauty to any doorway.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/2dd1cd91-c93e-476a-9b43-a4b40de93941.jpeg"],
    name:       "Israel",
    tagline:    "Holy Land w/ Gold Leaf",
    price:      180,
    categories: ["Medium (5-7″)","With Gold Leaf","White Stone"],
    description: `Soft pastels depict the land of Israel on white stone, with gold leaf lettering adding sacred warmth and intention. Fired in the kiln, each detail connects your doorway to the Holy Land and Hashem's holy mitzvah of putting  mezuzahs on each doorpost.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/14e49eb0-4f1f-4b64-aa8f-fed752900a3a.jpeg"],
    name:       "Blue Tower",
    tagline:    "Porcelain Grace in Gold",
    price:      65,
    categories: ["Porcelain","New Arrivals","With Gold Leaf","Medium (5-7″)"],
    description: `Fine porcelain shaped into a slender tower with pastel blue glaze and a gold leaf shin that catches the light. Elegant and refined, a graceful guardian for your doorway.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/4c28992c-2a9e-450b-a2e1-8c0b80df677f.jpeg"],
    name:       "Pastel Kiss",
    tagline:    "Soft Colors on Ivory Stone",
    price:      130,
    categories: ["White Stone","Small (4″)"],
    description: `Gentle pastel hues kiss the surface of smooth white stone, with a glass window ready for your kosher parchment. A sweet, understated piece that radiates quiet beauty.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/8676cf21-e006-4e20-9dc7-20b178b10d72.jpeg"],
    name:       "Painted Earth",
    tagline:    "Vibrant Strokes on Warm Clay",
    price:      60,
    categories: ["Small (4″)","Raw Terracotta"],
    description: `Bold strokes of jewel-toned blues, soft pinks, and fresh greens dance across raw terracotta clay like a prayer made visible. A small sanctuary that celebrates the marriage of earthy simplicity and artistic expression.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/974329f1-ed58-45ac-b6ef-a68091cc66c2.jpeg"],
    name:       "Jeweled Porcelain",
    tagline:    "Jewel Tones Meet Golden Light",
    price:      120,
    categories: ["Medium (5-7″)","Porcelain","With Gold Leaf"],
    description: `Deep aqua, turquoise, purple, and scarlet swirl together on smooth porcelain, accented with shimmering gold leaf. A richly layered piece that brings bold color and sacred warmth to your home.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/6f95cc6c-bcd5-4d80-99d7-0b3f165f26d6.jpg"],
    name:       "Dripping Aqua",
    tagline:    "Silver Rain on Warm Clay",
    price:      65,
    categories: ["Medium (5-7″)","Raw Terracotta","With Silver Leaf"],
    description: `Stunning aqua glaze drips like a gentle waterfall across warm terracotta, accented with delicate silver leaf that catches the light. Each visible brushstroke celebrates the beauty of handcraft and natural materials.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/3dd33acb-6d78-40af-a2a1-7da624dc43cf.jpeg"],
    name:       "Earthen Radiance",
    tagline:    "Golden Shin on Warm Clay",
    price:      65,
    categories: ["Raw Terracotta","Medium (5-7″)","With Gold Leaf"],
    description: `Warm terracotta clay glows with earthy authenticity, lovingly textured by artisan hands. A luminous gold leaf shin crowns the piece, catching light and drawing the eye heavenward.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/2c1b6be0-580e-4b90-9699-a466db288c10.jpeg"],
    name:       "Amethyst Crown",
    tagline:    "Raw Crystal on Sacred Stone",
    price:      130,
    categories: ["White Stone","New Arrivals","Medium (5-7″)"],
    description: `A generous raw amethyst crystal sits proudly embedded in creamy white stone, its deep purple surface still rough and unpolished. A freeform piece that celebrates the natural beauty of raw materials and spiritual craftsmanship.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/51063c7a-01aa-4ac7-beeb-38015d15eb0d.jpeg"],
    name:       "Pastel Crystals",
    tagline:    "Sunrise Colors, Crystal Heart",
    price:      65,
    categories: ["Porcelain","New Arrivals","With (Turquoise-colored) Magnesita Crystals","With Tiger Eye crystals","With Citrine crystals","Medium (5-7″)"],
    description: `Soft layers of blush pink, sage green, and pale yellow flow across delicate porcelain like a gentle sunrise, crowned with turquoise magnesita crystals. A small work of art that honors tradition while celebrating the beauty of handcraft.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/9ee79d84-18a5-4d6b-9600-4f70cc05a7b1.jpeg"],
    name:       "Turquoise Whispers",
    tagline:    "Whispers of Sky on Stone",
    price:      40,
    categories: ["Medium (5-7″)","New Arrivals","With (Turquoise-colored) Magnesita Crystals","Porcelain"],
    description: `Creamy white porcelain is adorned with turquoise magnesita crystals that catch the light like tiny windows into something sacred. Each hand-carved texture speaks to intentional craftsmanship and quiet spiritual beauty.`,
  },

  {
    images:     ["https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/66915d42-c66a-4d66-a421-506a437a1979.jpeg"],
    name:       "Heavenly Gilt",
    tagline:    "Divine Light on Sacred Texture",
    price:      65,
    categories: ["Small (4″)","With Gold Leaf","White Stone"],
    description: `A serene white textured base with deliberate vertical striations is crowned with shimmering gold leaf that catches the light like divine presence. The contrast between matte organic surface and radiant gold speaks to the meeting of earth and heaven.`,
  },

  {
    images:     ["images/img_2395-1772150231239.jpeg","images/img_2399-1772150233059.jpeg"],
    name:       "Amethyst Shell",
    tagline:    "Crystal Nestled in Golden Shell",
    price:      95,
    categories: ["Medium (5-7″)","New Arrivals","Porcelain","With Gold Leaf"],
    description: `An amethyst stone rests inside a turquoise porcelain shell, with the shin written in gold leaf and gold dust sprinkled throughout. A one-of-a-kind treasure awaiting your kosher parchment.`,
  },

  {
    images:     ["images/img_2400-1772149779053.jpeg"],
    name:       "Sunset Tower",
    tagline:    "Radiant Warmth, Towering Grace",
    price:      175,
    categories: ["Extra Large (12 inches)","New Arrivals","Porcelain","With Gold Leaf"],
    description: `Warm sunset tones glow across this eye-catching 12-inch porcelain mezuzah case, finished with gold leaf accents. A bold, statuesque piece that commands attention at any doorway.`,
  },

  {
    images:     ["images/img_2273-1771958132770.jpeg"],
    name:       "Modim Anachnu Lach",
    tagline:    "Sacred Thanks in Gold",
    price:      125,
    categories: ["Medium (5-7″)","With Gold Leaf","New Arrivals","Porcelain"],
    description: `White stone clay fired at high temperature, inscribed with the sacred words "Modim Anachnu Lach" — "We Thank You" — from the Shemoneh Esrei prayer, in shimmering gold leaf. A freeform art piece shaped entirely by hand, a daily reminder of gratitude to Hashem.`,
  },

  {
    images:     ["images/IMG_2278.jpg"],
    name:       "Modim in Silver",
    tagline:    "Sacred Words on Ancient Clay",
    price:      175,
    categories: ["Medium (5-7″)"],
    description: `Raw terracotta fired at high temperature, inscribed with "Modim Anachnu Lach" in silver leaf — sacred words of gratitude from the Shemoneh Esrei. Organic edges and textured lettering worn into the clay evoke the ancient stones of Israel.`,
  },

  {
    images:     ["images/img_1016-1771950530238.jpeg"],
    name:       "Bitachon",
    tagline:    "Trust and Faith",
    price:      125,
    categories: ["Medium (5-7″)","With Gold Leaf","Porcelain"],
    description: `Bitachon — complete trust in the Divine — is the soul of this hand-sculpted piece. A daily reminder that your home is held in something greater than yourself.`,
  },

  {
    images:     ["images/Dream-Column.avif","https://rqtojjycklmtycvohijv.supabase.co/storage/v1/object/public/mezuzah-images/03a73ef5-b0d7-475d-9ec0-ae041327cec6.mp4"],
    name:       "Dream Column",
    tagline:    "Elegant and Statuesque",
    price:      150,
    categories: ["Porcelain","With Gold Leaf","Large (8-10″)"],
    description: `Rising with quiet grace, this tall porcelain mezuzah brings refined architectural beauty to any doorpost. Handcrafted in a single luminous piece with gold leaf accents, an invitation to pause at the threshold.`,
  },

  {
    images:     ["images/I-Love-You-Hashem.avif"],
    name:       "I Love You Hashem",
    tagline:    "Joyful Devotion",
    price:      85,
    categories: ["With Gold Leaf","Medium (5-7″)"],
    description: `A declaration of love painted in the most personal and direct language — I Love You, Hashem. Vibrant, heartfelt, and handcrafted with devotion by Sorah Weiss.`,
  },

  {
    images:     ["images/Raw-Terracotta.avif"],
    name:       "Terracotta Tower",
    tagline:    "Earthy and Honest",
    price:      120,
    categories: [],
    description: `In its natural, unglazed state, this 12-inch terracotta mezuzah tells the truth — shaped by hands, warmed by fire. Timeless and grounding, it brings a sense of the ancient and sacred into any home.`,
  },

  {
    images:     ["images/Terracotta-Blessing.avif"],
    name:       "Terracotta Blessing",
    tagline:    "Warmth and Sacred Word",
    price:      110,
    categories: ["With Gold Leaf"],
    description: `Rich terracotta clay meets the power of sacred blessing in this warm, handcrafted mezuzah. On your doorpost, it speaks a blessing over all who enter and leave.`,
  },

  {
    images:     ["images/Terracotta-Silver.avif"],
    name:       "Terracotta Silver",
    tagline:    "Rustic Meets Refined",
    price:      75,
    categories: ["Small (4″)","With Silver Leaf","Raw Terracotta"],
    description: `The warmth of handcrafted terracotta meets the cool elegance of silver in a striking, balanced contrast. No two are ever exactly the same — each one shaped individually by Sorah's hands.`,
  },

];
