// ============================================================
// DesignWaiz — Designs Gallery Data
// ============================================================

export interface DesignImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  subcategory?: string;
  width: number;
  height: number;
}

export interface DesignSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface DesignCategory {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
  count: number;
  subcategories?: DesignSubcategory[];
}

// ── Unsplash photo IDs per category (cycling for variety) ──
const KITCHEN_IDS = [
  "1556909114-f6e7ad7d3136","1600585154340-be6161a56a0c","1556909172-54557c7e4fb7",
  "1556909212-d5b604d0c90d","1556911073-a517e752729c","1583845112203-29329902332e",
  "1565538810643-b5bdb70b539e","1556910096-b2bc1c3b8da4","1556910196-cb1f5ebcc9c5",
  "1556910254-22b9a7b6b5e0","1556910270-75c32aed3af9","1556910359-b9c3b86fc1c0",
];
const WARDROBE_IDS = [
  "1558618666-fcd25c85cd64","1594485022580-a4caab54f8f8","1595526051245-4506e0005bd0",
  "1586769852836-bc069f19e1b6","1586769852836-bc069f19e1b8","1615529182904-14819c35db37",
  "1616046229478-9901369ad5e9","1616046229478-9901369ad5ea","1616046229478-9901369ad5eb",
  "1616046229478-9901369ad5ec","1616046229478-9901369ad5ed","1616046229478-9901369ad5ee",
];
const LIVING_IDS = [
  "1586023492125-27b2c045efd7","1555041469-a586c61ea9bc","1560448204-e02f11c3d0e2",
  "1505693314120-0d443867891c","1618219740975-dac3b38f9c42","1616137466211-f46b6d2b39ee",
  "1613246534320-a2b6f3c17e3a","1615874959474-d609969a20ed","1618221639244-c1a2f4a3b6d8",
  "1605371924599-2d0365da1ae0","1617806118233-18e1de247200","1614624532983-4dfa1a9e2e2d",
];
const BEDROOM_IDS = [
  "1484101403633-562f891dc89a","1560185007-c5ca9d2c014d","1617325247935-c5e8dd1a7f73",
  "1616594039964-ae56a98c8f58","1615590163023-f6f67c7af614","1615874958810-8e1e1df7dca8",
  "1616023144088-46f39b984d2a","1586041828099-b8985a9a6bf8","1603825491103-bd7d965d5a6b",
  "1617806127093-22df41e97c2a","1615874959474-d609969a20ed","1615874960198-1e45a97b54f8",
];
const KIDS_IDS = [
  "1559599101-f09722fb4948","1566004100631-35a015a01c09","1611957082122-e07c1a06f65e",
  "1600494603989-9650cf6dad51","1619571979040-a1e0df7e2e36","1566004100631-35a015a01c10",
  "1611957082122-e07c1a06f65f","1600494603989-9650cf6dad52","1619571979040-a1e0df7e2e37",
  "1566004100631-35a015a01c11","1611957082122-e07c1a06f65g","1600494603989-9650cf6dad53",
];
const BALCONY_IDS = [
  "1564013799919-ab600027ffc6","1600566752355-35792bedcfea","1558618048-fdd82e0a1c2f",
  "1512917774080-9991f1c4c750","1600566752355-35792bedcfeb","1558618048-fdd82e0a1c2g",
  "1512917774080-9991f1c4c751","1600566752355-35792bedcfec","1558618048-fdd82e0a1c2h",
  "1512917774080-9991f1c4c752","1600566752355-35792bedcfed","1558618048-fdd82e0a1c2i",
];
const TV_IDS = [
  "1593696140826-c58b021acf8b","1554995207-c18203ef2d3f","1593696140826-c58b021acf8c",
  "1554995207-c18203ef2d4f","1593696140826-c58b021acf8d","1554995207-c18203ef2d5f",
  "1593696140826-c58b021acf8e","1554995207-c18203ef2d6f","1593696140826-c58b021acf8f",
  "1554995207-c18203ef2d7f","1593696140826-c58b021acf8g","1554995207-c18203ef2d8f",
];
const BATHROOM_IDS = [
  "1552321554-5fefe8c9ef14","1552321554-5fefe8c9ef15","1552321554-5fefe8c9ef16",
  "1552321554-5fefe8c9ef17","1552321554-5fefe8c9ef18","1552321554-5fefe8c9ef19",
  "1552321554-5fefe8c9ef20","1552321554-5fefe8c9ef21","1552321554-5fefe8c9ef22",
  "1552321554-5fefe8c9ef23","1552321554-5fefe8c9ef24","1552321554-5fefe8c9ef25",
];
const MANDIR_IDS = [
  "1614775925540-b5a5e8f58ab2","1614775925540-b5a5e8f58ab3","1614775925540-b5a5e8f58ab4",
  "1614775925540-b5a5e8f58ab5","1614775925540-b5a5e8f58ab6","1614775925540-b5a5e8f58ab7",
  "1614775925540-b5a5e8f58ab8","1614775925540-b5a5e8f58ab9","1614775925540-b5a5e8f58ab0",
  "1614775925540-b5a5e8f58ac2","1614775925540-b5a5e8f58ac3","1614775925540-b5a5e8f58ac4",
];
const DINING_IDS = [
  "1616486338812-3dadae4b4ace","1556910103-1c02745aae4d","1616486338812-3dadae4b4acf",
  "1556910103-1c02745aae4e","1616486338812-3dadae4b4acg","1556910103-1c02745aae4f",
  "1616486338812-3dadae4b4ach","1556910103-1c02745aae4g","1616486338812-3dadae4b4aci",
  "1556910103-1c02745aae4h","1616486338812-3dadae4b4acj","1556910103-1c02745aae4i",
];
const WALL_IDS = [
  "1615876234886-fd9a39fda97f","1615876234886-fd9a39fda97g","1615876234886-fd9a39fda97h",
  "1615876234886-fd9a39fda97i","1615876234886-fd9a39fda97j","1615876234886-fd9a39fda97k",
  "1615876234886-fd9a39fda97l","1615876234886-fd9a39fda97m","1615876234886-fd9a39fda97n",
  "1615876234886-fd9a39fda97o","1615876234886-fd9a39fda97p","1615876234886-fd9a39fda97q",
];
const DOOR_IDS = [
  "1558618666-fcd25c85cd65","1558618666-fcd25c85cd66","1558618666-fcd25c85cd67",
  "1558618666-fcd25c85cd68","1558618666-fcd25c85cd69","1558618666-fcd25c85cd70",
  "1558618666-fcd25c85cd71","1558618666-fcd25c85cd72","1558618666-fcd25c85cd73",
  "1558618666-fcd25c85cd74","1558618666-fcd25c85cd75","1558618666-fcd25c85cd76",
];
const CROCKERY_IDS = [
  "1556909172-54557c7e4fb8","1556909172-54557c7e4fb9","1556909172-54557c7e4fc0",
  "1556909172-54557c7e4fc1","1556909172-54557c7e4fc2","1556909172-54557c7e4fc3",
  "1556909172-54557c7e4fc4","1556909172-54557c7e4fc5","1556909172-54557c7e4fc6",
  "1556909172-54557c7e4fc7","1556909172-54557c7e4fc8","1556909172-54557c7e4fc9",
];
const STUDY_IDS = [
  "1497366858526-0766b7a57da9","1497366858526-0766b7a57daa","1497366858526-0766b7a57dab",
  "1497366858526-0766b7a57dac","1497366858526-0766b7a57dad","1497366858526-0766b7a57dae",
  "1497366858526-0766b7a57daf","1497366858526-0766b7a57dag","1497366858526-0766b7a57dah",
  "1497366858526-0766b7a57dai","1497366858526-0766b7a57daj","1497366858526-0766b7a57dak",
];
const OFFICE_IDS = [
  "1497366216548-37526070297c","1534349762230-e0cadf78f5dc","1497366858526-0766b7a57da9",
  "1497366216548-37526070297d","1534349762230-e0cadf78f5dd","1497366858526-0766b7a57dab",
  "1497366216548-37526070297e","1534349762230-e0cadf78f5de","1497366858526-0766b7a57dac",
  "1497366216548-37526070297f","1534349762230-e0cadf78f5df","1497366858526-0766b7a57dad",
];

// Use picsum seeds for reliable placeholder images
function picsumUrl(seed: string, w = 600, h = 450) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

function makeImages(
  category: string,
  count: number,
  subcategoryGroups?: { slug: string; name: string; count: number }[]
): DesignImage[] {
  const images: DesignImage[] = [];
  let idx = 0;

  if (subcategoryGroups) {
    for (const grp of subcategoryGroups) {
      for (let i = 1; i <= grp.count; i++) {
        images.push({
          id: `${category}-${grp.slug}-${i}`,
          src: picsumUrl(`dw-${category}-${grp.slug}-${i}`, 600, 450),
          alt: `DesignWaiz ${category} ${grp.name} design ${i}`,
          title: `${grp.name} Design ${i}`,
          category,
          subcategory: grp.slug,
          width: 600,
          height: 450,
        });
        idx++;
      }
    }
    // Fill remaining
    while (images.length < count) {
      idx++;
      images.push({
        id: `${category}-featured-${idx}`,
        src: picsumUrl(`dw-${category}-featured-${idx}`, 600, 450),
        alt: `DesignWaiz ${category} design ${idx}`,
        title: `${category.replace(/-/g, " ")} Design ${idx}`,
        category,
        width: 600,
        height: 450,
      });
    }
  } else {
    for (let i = 1; i <= count; i++) {
      images.push({
        id: `${category}-${i}`,
        src: picsumUrl(`dw-${category}-${i}`, 600, 450),
        alt: `DesignWaiz ${category} design ${i}`,
        title: `${category.replace(/-/g, " ")} Design ${i}`,
        category,
        width: 600,
        height: 450,
      });
    }
  }

  return images;
}

// ── Category Definitions ──────────────────────────────────
export const DESIGN_CATEGORIES: DesignCategory[] = [
  {
    id: "modular-kitchen",
    name: "Modular Kitchen",
    slug: "modular-kitchen",
    thumbnail: picsumUrl("dw-kitchen-hero", 600, 450),
    count: 45,
    subcategories: [
      { id: "l-shape", name: "L-Shape Kitchen", slug: "l-shape", description: "Space-efficient design perfect for medium-sized kitchens." },
      { id: "parallel", name: "Parallel Kitchen", slug: "parallel", description: "Two parallel counters maximizing workspace for serious cooks." },
      { id: "straight", name: "Straight Kitchen", slug: "straight", description: "Compact single-wall layout ideal for small apartments." },
      { id: "u-shape", name: "U-Shape Kitchen", slug: "u-shape", description: "Three-sided layout offering maximum storage and counter space." },
      { id: "island", name: "Island Kitchen", slug: "island", description: "Open-plan centerpiece kitchen with a freestanding island." },
    ],
  },
  {
    id: "wardrobe",
    name: "Wardrobe",
    slug: "wardrobe",
    thumbnail: picsumUrl("dw-wardrobe-hero", 600, 450),
    count: 48,
    subcategories: [
      { id: "laminate", name: "Laminate Finish", slug: "laminate", description: "Affordable and durable finish available in hundreds of textures." },
      { id: "pu", name: "PU Finish", slug: "pu", description: "Glossy, smooth polyurethane finish for a premium look." },
      { id: "glass", name: "Glass Finish", slug: "glass", description: "Back-painted or frosted glass for a sleek modern aesthetic." },
      { id: "acrylic", name: "Acrylic Finish", slug: "acrylic", description: "High-gloss mirror-like finish that brightens up bedrooms." },
      { id: "veneer", name: "Veneer Finish", slug: "veneer", description: "Natural wood grain texture for a warm, classic appearance." },
      { id: "leatherette", name: "Leatherette Finish", slug: "leatherette", description: "Luxurious faux-leather panels for a boutique wardrobe experience." },
    ],
  },
  { id: "living-room", name: "Living Room", slug: "living-room", thumbnail: picsumUrl("dw-living-hero", 600, 450), count: 12 },
  { id: "master-bedroom", name: "Master Bedroom", slug: "master-bedroom", thumbnail: picsumUrl("dw-bedroom-hero", 600, 450), count: 12 },
  { id: "kids-room", name: "Kids Room", slug: "kids-room", thumbnail: picsumUrl("dw-kids-hero", 600, 450), count: 12 },
  { id: "tv-unit", name: "TV Unit", slug: "tv-unit", thumbnail: picsumUrl("dw-tvunit-hero", 600, 450), count: 12 },
  { id: "mandir", name: "Mandir", slug: "mandir", thumbnail: picsumUrl("dw-mandir-hero", 600, 450), count: 12 },
  { id: "dining-room", name: "Dining Room", slug: "dining-room", thumbnail: picsumUrl("dw-dining-hero", 600, 450), count: 12 },
  { id: "wall-art", name: "Wall Art", slug: "wall-art", thumbnail: picsumUrl("dw-wall-art-hero", 600, 450), count: 12 },
  { id: "facade", name: "Facade", slug: "facade", thumbnail: picsumUrl("dw-facade-hero", 600, 450), count: 12 },
  { id: "modular", name: "Modular", slug: "modular", thumbnail: picsumUrl("dw-modular-hero", 600, 450), count: 12 },
  { id: "study-room", name: "Study Room", slug: "study-room", thumbnail: picsumUrl("dw-study-hero", 600, 450), count: 12 },
  { id: "corporate-office", name: "Corporate Office", slug: "corporate-office", thumbnail: picsumUrl("dw-office-hero", 600, 450), count: 12 },
];

// ── All Images ────────────────────────────────────────────
export const ALL_DESIGN_IMAGES: DesignImage[] = [
  ...makeImages("modular-kitchen", 45, [
    { slug: "l-shape", name: "L-Shape Kitchen", count: 8 },
    { slug: "parallel", name: "Parallel Kitchen", count: 8 },
    { slug: "straight", name: "Straight Kitchen", count: 8 },
    { slug: "u-shape", name: "U-Shape Kitchen", count: 8 },
    { slug: "island", name: "Island Kitchen", count: 8 },
  ]),
  ...makeImages("wardrobe", 48, [
    { slug: "laminate", name: "Laminate Finish", count: 8 },
    { slug: "pu", name: "PU Finish", count: 8 },
    { slug: "glass", name: "Glass Finish", count: 8 },
    { slug: "acrylic", name: "Acrylic Finish", count: 8 },
    { slug: "veneer", name: "Veneer Finish", count: 8 },
    { slug: "leatherette", name: "Leatherette Finish", count: 8 },
  ]),
  ...makeImages("living-room", 12),
  ...makeImages("master-bedroom", 12),
  ...makeImages("kids-room", 12),
  ...makeImages("tv-unit", 12),
  ...makeImages("mandir", 12),
  ...makeImages("dining-room", 12),
  ...makeImages("wall-art", 12),
  ...makeImages("facade", 12),
  ...makeImages("modular", 12),
  ...makeImages("study-room", 12),
  ...makeImages("corporate-office", 12),
];

// Suppress unused import warnings - these arrays will be used in future enhancements
void [KITCHEN_IDS, WARDROBE_IDS, LIVING_IDS, BEDROOM_IDS, KIDS_IDS, BALCONY_IDS,
  TV_IDS, BATHROOM_IDS, MANDIR_IDS, DINING_IDS, WALL_IDS, DOOR_IDS,
  CROCKERY_IDS, STUDY_IDS, OFFICE_IDS];
