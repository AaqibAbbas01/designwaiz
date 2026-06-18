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

// ── Helper to build DesignImage array from local paths ──
function localImages(category: string, paths: string[]): DesignImage[] {
  return paths.map((src, i) => ({
    id: `${category}-${i + 1}`,
    src,
    alt: `DesignWaiz ${category.replace(/-/g, " ")} design ${i + 1}`,
    title: `${category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} Design ${i + 1}`,
    category,
    width: 600,
    height: 450,
  }));
}

// ── Raw local image paths per category (JPG/JPEG/PNG only) ──

const KITCHEN_IMAGES = [
  "/images/MODULAR KITCHEN/25662bdf-ac56-4e1c-986e-9237f5d24576.JPG",
  "/images/MODULAR KITCHEN/32dba686-7b98-410b-82c4-705c146dcdf5 2.JPG",
  "/images/MODULAR KITCHEN/49257b80-8853-4ad4-afa0-ebb577295fbc 2.JPG",
  "/images/MODULAR KITCHEN/583ab330-69fe-49a2-a6a8-39b63d5dd885 2.JPG",
  "/images/MODULAR KITCHEN/7a3476d4-5b01-40ed-b7fc-3addca5ee259 2.JPG",
  "/images/MODULAR KITCHEN/IMG_1118.JPG",
  "/images/MODULAR KITCHEN/IMG_1121.JPG",
  "/images/MODULAR KITCHEN/IMG_4342.JPG",
  "/images/MODULAR KITCHEN/IMG_4344.JPG",
  "/images/MODULAR KITCHEN/IMG_4348.JPG",
  "/images/MODULAR KITCHEN/IMG_4349.JPG",
  "/images/MODULAR KITCHEN/IMG_4354.JPG",
  "/images/MODULAR KITCHEN/IMG_4527.JPG",
  "/images/MODULAR KITCHEN/PHOTO-2023-06-28-12-01-19.jpg",
  "/images/MODULAR KITCHEN/PHOTO-2024-03-25-12-42-52 2.jpg",
  "/images/MODULAR KITCHEN/PHOTO-2024-03-25-12-42-52.jpg",
  "/images/MODULAR KITCHEN/PHOTO-2024-03-25-12-42-53 2.jpg",
  "/images/MODULAR KITCHEN/PHOTO-2024-03-25-12-42-53 3.jpg",
  "/images/MODULAR KITCHEN/PHOTO-2024-03-25-12-42-53.jpg",
  "/images/MODULAR KITCHEN/f155dc0c-a4f1-4116-99ac-280e6b30a570 2.JPG",
  "/images/MODULAR KITCHEN/fe5dfb61-d0e2-41fd-a796-b0655a3f7ee8.JPG",
];

const WARDROBE_IMAGES = [
  "/images/WARDROBE/2002b946-a2ca-48af-8366-891f33a13a4f 2.JPG",
  "/images/WARDROBE/7c0ca1cf-01d5-4b38-bcd9-c27f839f395c 2.JPG",
  "/images/WARDROBE/IMG_4191.JPG",
  "/images/WARDROBE/IMG_4200.JPG",
  "/images/WARDROBE/PHOTO-2025-08-21-21-50-20.jpg",
  "/images/WARDROBE/c46f3fa0-29b1-410b-a8f3-b9c22dd8aedd 2.JPG",
  "/images/WARDROBE/d4270f4b-4254-4f05-a543-00da1a1008ee 2.JPG",
  "/images/WARDROBE/f2d046b8-8b1b-48e5-9fee-403364cf1c18 2.JPG",
  "/images/WARDROBE/f3ef33b7-b296-4d7f-bea1-a1e2bf645c46 2.JPG",
  "/images/WARDROBE/fb5b9852-f012-4d3d-ab81-48dd8dbbf611 2.JPG",
];

const LIVING_IMAGES = [
  "/images/LIVING ROOM/25c79aad-b665-4ea3-a417-1ad70299a26a.JPG",
  "/images/LIVING ROOM/2c520ee2-1975-4eda-9f73-5a5ea6f994e9.JPG",
  "/images/LIVING ROOM/73ea888d-9472-4ed6-b98b-6c85586f7521 2.JPG",
  "/images/LIVING ROOM/8e521f96-0828-4204-9c1e-16d72fd854e6.JPG",
  "/images/LIVING ROOM/9675429d-595b-482e-b0d4-63e12f8efea5.JPG",
  "/images/LIVING ROOM/IMG_4258.JPG",
  "/images/LIVING ROOM/IMG_4262.JPG",
  "/images/LIVING ROOM/IMG_4270.JPG",
  "/images/LIVING ROOM/IMG_4365.JPG",
  "/images/LIVING ROOM/IMG_4378.JPG",
  "/images/LIVING ROOM/ef822e06-1c87-4101-9b07-f0cbcb197269 2.JPG",
  "/images/LIVING ROOM/f2b303b8-a1bf-4bde-a842-81eaf8b009b4 2.JPG",
  "/images/LIVING ROOM/f62f4e86-5f74-428b-b8fe-fc229134ce6b 2.JPG",
  "/images/LIVING ROOM/fd28fa85-d5d0-46fa-88f2-c93c43e9bbd9 2.JPG",
];

const BEDROOM_IMAGES = [
  "/images/MASTER BEDROOM/178c0992-8038-4c50-9ec5-adb3c6a7233b.JPG",
  "/images/MASTER BEDROOM/1b38a3c8-9efa-4337-8294-e45db27a26ca 2.JPG",
  "/images/MASTER BEDROOM/8822ad8f-ec13-4ec7-af9d-b72c596449f4.JPG",
  "/images/MASTER BEDROOM/IMG_1151.JPG",
  "/images/MASTER BEDROOM/IMG_1152.JPG",
  "/images/MASTER BEDROOM/IMG_1156.JPG",
  "/images/MASTER BEDROOM/IMG_1157.JPG",
  "/images/MASTER BEDROOM/IMG_1158.JPG",
  "/images/MASTER BEDROOM/IMG_1171.JPG",
  "/images/MASTER BEDROOM/IMG_1172.JPG",
  "/images/MASTER BEDROOM/IMG_1174.JPG",
  "/images/MASTER BEDROOM/IMG_4111.JPG",
  "/images/MASTER BEDROOM/IMG_4112.JPG",
  "/images/MASTER BEDROOM/IMG_4113.JPG",
  "/images/MASTER BEDROOM/IMG_4114.JPG",
  "/images/MASTER BEDROOM/IMG_4166.JPG",
  "/images/MASTER BEDROOM/IMG_4168.JPG",
  "/images/MASTER BEDROOM/IMG_4202.JPG",
  "/images/MASTER BEDROOM/IMG_4207.JPG",
  "/images/MASTER BEDROOM/IMG_4219.JPG",
  "/images/MASTER BEDROOM/IMG_4248.JPG",
  "/images/MASTER BEDROOM/IMG_4276.JPG",
  "/images/MASTER BEDROOM/IMG_4280.JPG",
  "/images/MASTER BEDROOM/IMG_4282.JPG",
  "/images/MASTER BEDROOM/IMG_4410.JPG",
  "/images/MASTER BEDROOM/IMG_4418.JPG",
  "/images/MASTER BEDROOM/IMG_4422.JPG",
  "/images/MASTER BEDROOM/IMG_4427.JPG",
  "/images/MASTER BEDROOM/IMG_4433.JPG",
  "/images/MASTER BEDROOM/IMG_4436.JPG",
  "/images/MASTER BEDROOM/IMG_4439.JPG",
  "/images/MASTER BEDROOM/IMG_4456.JPG",
  "/images/MASTER BEDROOM/IMG_4457.JPG",
  "/images/MASTER BEDROOM/IMG_4458.JPG",
  "/images/MASTER BEDROOM/IMG_4460.JPG",
  "/images/MASTER BEDROOM/IMG_4464.JPG",
  "/images/MASTER BEDROOM/IMG_4469.JPG",
  "/images/MASTER BEDROOM/IMG_6339.JPG",
  "/images/MASTER BEDROOM/KLOF0572.JPG",
  "/images/MASTER BEDROOM/WRSU7616.JPG",
  "/images/MASTER BEDROOM/a1c2c0ce-76f7-4e00-b1a1-ff9699b52d61.JPG",
];

const TV_IMAGES = [
  "/images/TV UNIT/6180ff6f-d28a-4a84-b688-7b11813b8ac4.JPG",
  "/images/TV UNIT/IMG_3196.JPG",
  "/images/TV UNIT/IMG_3310.JPG",
  "/images/TV UNIT/IMG_4118.JPG",
  "/images/TV UNIT/IMG_4123.JPG",
  "/images/TV UNIT/IMG_4183.JPG",
  "/images/TV UNIT/IMG_4187.JPG",
  "/images/TV UNIT/IMG_4190.JPG",
  "/images/TV UNIT/IMG_4361.JPG",
  "/images/TV UNIT/IMG_4363.JPG",
  "/images/TV UNIT/IMG_4399.JPG",
  "/images/TV UNIT/IMG_4402.JPG",
];

const MANDIR_IMAGES = [
  "/images/MANDIR/3b37b3db-3b14-46da-a860-4276dfae1cf7 2.JPG",
  "/images/MANDIR/6cda4272-52c2-457f-8bc6-33f4219d787b.JPG",
  "/images/MANDIR/9ed605bd-ef23-4405-8b84-c3df57158716 2.JPG",
  "/images/MANDIR/IMG_4302.JPG",
  "/images/MANDIR/IMG_4326.JPG",
  "/images/MANDIR/IMG_4474.JPG",
  "/images/MANDIR/IMG_4477.JPG",
  "/images/MANDIR/IMG_4714.PNG",
  "/images/MANDIR/c9b2a716-092a-404e-a097-18e53f106366 2.JPG",
  "/images/MANDIR/ccdaff2f-2b1c-48e5-b83e-bfb25ee91178 2.JPG",
  "/images/MANDIR/cdf617dd-c5cc-4fbe-a6ad-32bc56fd2fbf.JPG",
  "/images/MANDIR/d329dbe0-58f8-4ca6-8e06-e00b56ab7373 2.JPG",
];

const DINING_IMAGES = [
  "/images/DINING TABLE/Fire Place.jpeg",
  "/images/DINING TABLE/IMG_4242.JPG",
  "/images/DINING TABLE/IMG_4243.JPG",
  "/images/DINING TABLE/PHOTO-2024-04-20-15-09-35 3.jpg",
  "/images/DINING TABLE/PHOTO-2024-04-20-15-09-35 4.jpg",
  "/images/DINING TABLE/PHOTO-2024-04-20-15-09-35.jpg",
  "/images/DINING TABLE/PHOTO-2026-03-07-18-52-49 2.jpg",
  "/images/DINING TABLE/PHOTO-2026-03-07-18-52-49 3.jpg",
  "/images/DINING TABLE/PHOTO-2026-03-07-18-52-49.jpg",
  "/images/DINING TABLE/PHOTO-2026-03-07-18-52-50.jpg",
];

const WALL_IMAGES = [
  "/images/WALL DESIGN/22e27202-1dd2-44f8-b063-82ece808733a 2.JPG",
  "/images/WALL DESIGN/79dccc79-487c-43fc-bb8a-91e7eff2b25f.JPG",
  "/images/WALL DESIGN/IMG_1136.JPG",
  "/images/WALL DESIGN/IMG_1137.JPG",
  "/images/WALL DESIGN/IMG_1153.JPG",
  "/images/WALL DESIGN/IMG_1154.JPG",
  "/images/WALL DESIGN/IMG_1178.JPG",
  "/images/WALL DESIGN/IMG_1179.JPG",
  "/images/WALL DESIGN/IMG_1180.JPG",
  "/images/WALL DESIGN/IMG_2752.JPG",
  "/images/WALL DESIGN/IMG_2787.JPG",
  "/images/WALL DESIGN/IMG_3319.JPG",
  "/images/WALL DESIGN/IMG_4168.JPG",
  "/images/WALL DESIGN/IMG_6891.jpg",
  "/images/WALL DESIGN/IMG_9315.PNG",
  "/images/WALL DESIGN/PHOTO-2023-04-05-19-40-09.jpg",
  "/images/WALL DESIGN/PHOTO-2023-04-05-19-40-10.jpg",
  "/images/WALL DESIGN/PHOTO-2023-06-23-18-50-28.jpg",
  "/images/WALL DESIGN/PHOTO-2024-03-25-11-28-23 6.jpg",
  "/images/WALL DESIGN/PHOTO-2024-03-25-11-28-23.jpg",
  "/images/WALL DESIGN/PHOTO-2025-06-06-14-34-25.jpg",
  "/images/WALL DESIGN/PHOTO-2025-06-06-14-40-48.jpg",
  "/images/WALL DESIGN/PHOTO-2025-10-10-23-47-40.jpg",
  "/images/WALL DESIGN/PHOTO-2025-10-10-23-47-41 2.jpg",
  "/images/WALL DESIGN/PHOTO-2025-10-10-23-47-41.jpg",
  "/images/WALL DESIGN/PHOTO-2025-10-10-23-47-42 2.jpg",
  "/images/WALL DESIGN/PHOTO-2025-10-10-23-47-42.jpg",
  "/images/WALL DESIGN/a4e758af-9f2a-4b24-a4d9-83d68b9443ef 2.JPG",
  "/images/WALL DESIGN/eaf7dffb-1808-4209-8a3b-d7780d8072be.JPG",
];

const FACADE_IMAGES = [
  "/images/Facade & Others/1.South-Facade-1-1.jpg",
  "/images/Facade & Others/1008-1000-1052311-5a5849493452366375434a33443562496771344136513d3d.jpg",
  "/images/Facade & Others/19125508_1769272016420419_1031485804_o.jpg",
  "/images/Facade & Others/20160528_163508.jpg",
  "/images/Facade & Others/20160528_163527.jpg",
  "/images/Facade & Others/20190107_103830.jpg",
  "/images/Facade & Others/20190107_103849.jpg",
  "/images/Facade & Others/20190107_103856.jpg",
  "/images/Facade & Others/20190107_104231.jpg",
  "/images/Facade & Others/239783342baf7bb06437d42f2e342b24.jpg",
  "/images/Facade & Others/A 2.JPG",
  "/images/Facade & Others/A-6, Landcraft.jpeg",
  "/images/Facade & Others/DSC00064.JPG",
  "/images/Facade & Others/ICE Home Night.jpg",
  "/images/Facade & Others/IMG-0205.JPG",
  "/images/Facade & Others/IMG-0263.JPG",
  "/images/Facade & Others/IMG-0269.JPG",
  "/images/Facade & Others/IMG-0317.JPG",
  "/images/Facade & Others/IMG-1241.JPG",
  "/images/Facade & Others/IMG_0770.jpg",
  "/images/Facade & Others/IMG_1182.JPG",
  "/images/Facade & Others/IMG_1277.JPG",
  "/images/Facade & Others/IMG_1582.JPG",
  "/images/Facade & Others/IMG_1588 5.06.25 PM.JPG",
  "/images/Facade & Others/IMG_1720.JPG",
  "/images/Facade & Others/IMG_1893.JPG",
  "/images/Facade & Others/IMG_2256.JPG",
  "/images/Facade & Others/IMG_2268.JPG",
  "/images/Facade & Others/IMG_3762.JPG",
  "/images/Facade & Others/IMG_4235.JPG",
  "/images/Facade & Others/IMG_4236.JPG",
  "/images/Facade & Others/Sec.50 Noida SBF 10 mm.JPG",
  "/images/Facade & Others/Sector-26, Noida.jpg",
  "/images/Facade & Others/Shera Plank AFB Farm House TGS.jpeg",
  "/images/Facade & Others/Shera Plank Facade Walnut.JPG",
  "/images/Facade & Others/Shera Plank Walnut Lehra.JPG",
  "/images/Facade & Others/Shera Plank-6.jpeg",
  "/images/Facade & Others/Shera TGS KR.JPG",
  "/images/Facade & Others/Shera TGS KR_1.JPG",
  "/images/Facade & Others/Shera TGS KR_3.JPG",
  "/images/Facade & Others/Shera TGS KR_4.jpeg",
  "/images/Facade & Others/abcd.JPG",
  "/images/Facade & Others/b28.jpg",
  "/images/Facade & Others/j3.jpg",
  "/images/Facade & Others/nd5.JPG",
  "/images/Facade & Others/photo 1.JPG",
  "/images/Facade & Others/photo 4.JPG",
  "/images/Facade & Others/unnamed 5.06.25 PM.jpg",
  "/images/Facade & Others/unnamed-10.jpg",
  "/images/Facade & Others/unnamed-12.jpg",
  "/images/Facade & Others/unnamed-4 5.06.25 PM.jpg",
  "/images/Facade & Others/wooden-designer-main-gate-500x500.jpg",
];

const STUDY_IMAGES = [
  "/images/STUDY ROOM/IMG_4125.JPG",
  "/images/STUDY ROOM/IMG_4126.JPG",
  "/images/STUDY ROOM/IMG_4140.JPG",
  "/images/STUDY ROOM/IMG_4250.JPG",
  "/images/STUDY ROOM/IMG_4266.JPG",
  "/images/STUDY ROOM/IMG_4290.JPG",
  "/images/STUDY ROOM/ffcf64c7-3108-447f-8ed4-0354dccae893 2.JPG",
];

const OFFICE_IMAGES = [
  "/images/CORPORATE OFFICE/3e7f34ec-d07e-4266-bc3a-179f74effb74.JPG",
  "/images/CORPORATE OFFICE/7c673a45-ec8c-4be1-8d11-e6dec5f85c22.JPG",
  "/images/CORPORATE OFFICE/PHOTO-2026-01-11-15-51-44 2.jpg",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.01.23 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.01.43 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.02.02 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.02.34 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.02.57 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.03.10 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.03.23 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.03.39 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.03.49 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.04.07 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.04.27 PM.png",
  "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.04.53 PM.png",
];

const BATHROOM_IMAGES = [
  "/images/BATHROOM/IMG_1098.JPG",
  "/images/BATHROOM/IMG_1099.JPG",
  "/images/BATHROOM/IMG_1103.JPG",
  "/images/BATHROOM/IMG_1104.JPG",
  "/images/BATHROOM/IMG_1113.JPG",
  "/images/BATHROOM/IMG_1114.JPG",
  "/images/BATHROOM/IMG_1134.JPG",
  "/images/BATHROOM/IMG_1135.JPG",
  "/images/BATHROOM/IMG_1140.JPG",
  "/images/BATHROOM/IMG_1141.JPG",
  "/images/BATHROOM/IMG_1142.JPG",
  "/images/BATHROOM/IMG_1143.JPG",
  "/images/BATHROOM/IMG_1177.JPG",
  "/images/BATHROOM/IMG_4153.JPG",
  "/images/BATHROOM/IMG_4154.JPG",
  "/images/BATHROOM/IMG_4155.JPG",
  "/images/BATHROOM/IMG_4211.JPG",
  "/images/BATHROOM/IMG_4212.JPG",
  "/images/BATHROOM/IMG_4213.JPG",
  "/images/BATHROOM/IMG_4214.JPG",
  "/images/BATHROOM/IMG_E4213.JPG",
  "/images/BATHROOM/IMG_E4214.JPG",
];

const DOOR_IMAGES = [
  "/images/DOOR DESIGN/66a1f8b6-0126-4463-a1de-3cccf990b56c.JPG",
  "/images/DOOR DESIGN/IMG_1110.JPG",
  "/images/DOOR DESIGN/IMG_1111.JPG",
  "/images/DOOR DESIGN/IMG_1112.JPG",
  "/images/DOOR DESIGN/IMG_E4544.JPG",
  "/images/DOOR DESIGN/PHOTO-2024-03-25-11-28-23 3.jpg",
  "/images/DOOR DESIGN/PHOTO-2024-03-25-11-28-23 4.jpg",
  "/images/DOOR DESIGN/PHOTO-2024-03-25-11-28-23 5.jpg",
  "/images/DOOR DESIGN/WhatsApp Im 2019-12-30 at 15.21.59.jpeg",
  "/images/DOOR DESIGN/WhatsApp Image 2019-12-30 at 15.21.55.jpeg",
  "/images/DOOR DESIGN/WhatsApp Image 2019-12-30 at 15.21.56.jpeg",
  "/images/DOOR DESIGN/WhatsApp Image 2019-30 at 15.22.00.jpeg",
  "/images/DOOR DESIGN/WhatsApp Image019-12-30 at 15.22.00.jpeg",
  "/images/DOOR DESIGN/ojj.jpeg",
  "/images/DOOR DESIGN/okokoko.jpeg",
];

const CROCKERY_IMAGES = [
  "/images/CROCKERY UNIT/IMG_4498.JPG",
  "/images/CROCKERY UNIT/IMG_4508.JPG",
  "/images/CROCKERY UNIT/PHOTO-2024-03-25-11-50-02.jpg",
];

// ── Category Definitions ──────────────────────────────────
export const DESIGN_CATEGORIES: DesignCategory[] = [
  {
    id: "modular-kitchen",
    name: "Modular Kitchen",
    slug: "modular-kitchen",
    thumbnail: "/images/MODULAR KITCHEN/IMG_1118.JPG",
    count: KITCHEN_IMAGES.length,
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
    thumbnail: "/images/WARDROBE/IMG_4191.JPG",
    count: WARDROBE_IMAGES.length,
    subcategories: [
      { id: "laminate", name: "Laminate Finish", slug: "laminate", description: "Affordable and durable finish available in hundreds of textures." },
      { id: "pu", name: "PU Finish", slug: "pu", description: "Glossy, smooth polyurethane finish for a premium look." },
      { id: "glass", name: "Glass Finish", slug: "glass", description: "Back-painted or frosted glass for a sleek modern aesthetic." },
      { id: "acrylic", name: "Acrylic Finish", slug: "acrylic", description: "High-gloss mirror-like finish that brightens up bedrooms." },
      { id: "veneer", name: "Veneer Finish", slug: "veneer", description: "Natural wood grain texture for a warm, classic appearance." },
      { id: "leatherette", name: "Leatherette Finish", slug: "leatherette", description: "Luxurious faux-leather panels for a boutique wardrobe experience." },
    ],
  },
  { id: "living-room", name: "Living Room", slug: "living-room", thumbnail: "/images/LIVING ROOM/IMG_4258.JPG", count: LIVING_IMAGES.length },
  { id: "master-bedroom", name: "Master Bedroom", slug: "master-bedroom", thumbnail: "/images/MASTER BEDROOM/IMG_4111.JPG", count: BEDROOM_IMAGES.length },
  { id: "bathroom", name: "Bathroom", slug: "bathroom", thumbnail: "/images/BATHROOM/IMG_1098.JPG", count: BATHROOM_IMAGES.length },
  { id: "tv-unit", name: "TV Unit", slug: "tv-unit", thumbnail: "/images/TV UNIT/IMG_4118.JPG", count: TV_IMAGES.length },
  { id: "mandir", name: "Mandir", slug: "mandir", thumbnail: "/images/MANDIR/IMG_4302.JPG", count: MANDIR_IMAGES.length },
  { id: "dining-room", name: "Dining Room", slug: "dining-room", thumbnail: "/images/DINING TABLE/IMG_4242.JPG", count: DINING_IMAGES.length },
  { id: "wall-art", name: "Wall Art", slug: "wall-art", thumbnail: "/images/WALL DESIGN/IMG_1136.JPG", count: WALL_IMAGES.length },
  { id: "facade", name: "Facade", slug: "facade", thumbnail: "/images/Facade & Others/1.South-Facade-1-1.jpg", count: FACADE_IMAGES.length },
  { id: "door-design", name: "Door Design", slug: "door-design", thumbnail: "/images/DOOR DESIGN/IMG_1110.JPG", count: DOOR_IMAGES.length },
  { id: "crockery-unit", name: "Crockery Unit", slug: "crockery-unit", thumbnail: "/images/CROCKERY UNIT/IMG_4498.JPG", count: CROCKERY_IMAGES.length },
  { id: "study-room", name: "Study Room", slug: "study-room", thumbnail: "/images/STUDY ROOM/IMG_4125.JPG", count: STUDY_IMAGES.length },
  { id: "corporate-office", name: "Corporate Office", slug: "corporate-office", thumbnail: "/images/CORPORATE OFFICE/3e7f34ec-d07e-4266-bc3a-179f74effb74.JPG", count: OFFICE_IMAGES.length },
];

// ── All Images ────────────────────────────────────────────
export const ALL_DESIGN_IMAGES: DesignImage[] = [
  ...localImages("modular-kitchen", KITCHEN_IMAGES),
  ...localImages("wardrobe", WARDROBE_IMAGES),
  ...localImages("living-room", LIVING_IMAGES),
  ...localImages("master-bedroom", BEDROOM_IMAGES),
  ...localImages("bathroom", BATHROOM_IMAGES),
  ...localImages("tv-unit", TV_IMAGES),
  ...localImages("mandir", MANDIR_IMAGES),
  ...localImages("dining-room", DINING_IMAGES),
  ...localImages("wall-art", WALL_IMAGES),
  ...localImages("facade", FACADE_IMAGES),
  ...localImages("door-design", DOOR_IMAGES),
  ...localImages("crockery-unit", CROCKERY_IMAGES),
  ...localImages("study-room", STUDY_IMAGES),
  ...localImages("corporate-office", OFFICE_IMAGES),
];
