import { getFallbackImage } from '../utils/imageFallback';

export const products = [
  {
    id: 'rosemary-biotin-scalp-elixir',
    name: 'Rosemary & Biotin Scalp Elixir',
    category: 'Hair Oil',
    categoryKey: 'hair-oil',
    price: 48.00,
    originalPrice: 58.00,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Bestseller',
    shortDescription: 'Potent hair growth infusion enriched with organic rosemary, biotin, and amla extractions.',
    description: 'Our signature Rosemary & Biotin Scalp Elixir is an ultra-concentrated botanical oil formulated to stimulate dormant follicles, boost circulation, and foster thick, resilient hair growth.',
    images: [
      '/images/rosemary-biotin-scalp-elixir.jpg',
      '/images/product-1-b.jpg'
    ],
    benefits: [
      'Stimulates micro-circulation at scalp level for faster, thicker growth',
      'Strengthens hair roots with plant-derived Biotin & Amla polyphenols',
      'Soothes scalp irritation, itching, and dry flakes without greasy buildup'
    ],
    ingredientsList: 'Organic Rosmarinus Officinalis (Rosemary) Leaf Oil, Biotin, Emblica Officinalis (Amla) Extract, Argania Spinosa (Argan) Kernel Oil.',
    howToUse: 'Apply 4–6 drops directly onto the scalp section by section. Massage for 3–5 minutes. Leave on for 1 hour before washing.',
    faqs: [
      { q: 'Is this suitable for color-treated hair?', a: 'Yes! Our formula is 100% color-safe and free from sulfates and parabens.' }
    ],
    collection: 'Hair Growth'
  },
  {
    id: 'hydra-nourish-botanical-shampoo',
    name: 'Hydra-Nourish Botanical Shampoo',
    category: 'Shampoo',
    categoryKey: 'shampoo',
    price: 36.00,
    originalPrice: 42.00,
    rating: 4.8,
    reviewsCount: 98,
    badge: 'Popular',
    shortDescription: 'Gentle sulfate-free cleanser infused with aloe vera gel, green tea, and coconut nectar.',
    description: 'Transform your cleansing routine into a restorative botanical spa ritual. Hydra-Nourish Shampoo lifts impurites and excess sebum without stripping scalp moisture.',
    images: [
      '/images/product-2-a.jpg',
      '/images/product-2-b.jpg'
    ],
    benefits: [
      'Gentle coconut-derived foam cleanses without stripping scalp oils',
      'Organic Aloe Vera hydrates dry cuticles for effortless softness',
      'Infused with antioxidant-rich green tea to restore natural luster'
    ],
    ingredientsList: 'Aloe Barbadensis Leaf Juice, Aqua, Sodium Cocoyl Isethionate, Camellia Sinensis (Green Tea) Leaf Extract, Cocos Nucifera Water.',
    howToUse: 'Lather a nickel-sized amount onto wet hands, massage gently into scalp, and rinse with lukewarm water.',
    faqs: [],
    collection: 'Daily Care'
  },
  {
    id: 'velvet-silk-intensive-hair-mask',
    name: 'Velvet Silk Intensive Hair Mask',
    category: 'Hair Mask',
    categoryKey: 'hair-mask',
    price: 52.00,
    originalPrice: 62.00,
    rating: 5.0,
    reviewsCount: 210,
    badge: 'Award Winner',
    shortDescription: 'Deep repair butter mask with cold-pressed shea, avocado oil, and botanical keratin.',
    description: 'An indulgent, velvety deep-conditioning treatment engineered to repair damaged, over-processed, or heat-styled hair.',
    images: [
      '/images/product-3-a.jpg',
      '/images/product-3-b.jpg'
    ],
    benefits: [
      'Deeply repairs split ends and reduces breakage by up to 92%',
      'Plant keratin fills porous cuticles for liquid glass sheen',
      'Shea & Avocado lipids coat fibers against heat damage'
    ],
    ingredientsList: 'Organic Butyrospermum Parkii (Shea Butter), Persea Gratissima (Avocado) Oil, Hydrolyzed Soy Protein, Argania Spinosa Oil.',
    howToUse: 'After shampooing, scoop a generous amount and work through damp hair from mid-lengths to ends. Leave on for 10-15 minutes.',
    faqs: [],
    collection: 'Hair Repair'
  },
  {
    id: 'ceramide-argan-restorative-conditioner',
    name: 'Ceramide & Argan Restorative Conditioner',
    category: 'Conditioner',
    categoryKey: 'conditioner',
    price: 38.00,
    originalPrice: 44.00,
    rating: 4.7,
    reviewsCount: 76,
    badge: 'New',
    shortDescription: 'Lipid-replenishing conditioner with Moroccan argan oil and bio-ceramides.',
    description: 'Seal moisture and smooth friction with our lipid-replenishing conditioner. Moroccan argan oil rich in Vitamin E fuses with natural plant ceramides.',
    images: [
      '/images/product-4-a.jpg',
      '/images/product-4-b.jpg'
    ],
    benefits: [
      'Plant ceramides seal hair cuticle layers to eliminate humidity frizz',
      'Pure Moroccan Argan Oil adds weightless shine and silkiness'
    ],
    ingredientsList: 'Aqua, Moroccan Argania Spinosa Kernel Oil, Ceramide NP, Cetearyl Alcohol, Glycerin.',
    howToUse: 'After washing, distribute evenly through damp mid-lengths and ends. Allow 2 minutes, then rinse.',
    faqs: [],
    collection: 'Daily Care'
  },
  {
    id: 'gloss-repair-hair-serum',
    name: 'Gloss & Repair Hair Serum',
    category: 'Serum',
    categoryKey: 'serum',
    price: 44.00,
    originalPrice: 50.00,
    rating: 4.9,
    reviewsCount: 118,
    badge: 'High Gloss',
    shortDescription: 'Weightless light-reflective serum with marula oil and fermented camellia.',
    description: 'An ultra-light, non-greasy finishing elixir designed to tame flyaways, impart mirror-like gloss, and shield hair.',
    images: [
      '/images/product-5-a.jpg',
      '/images/product-1-b.jpg'
    ],
    benefits: [
      'Imparts high-shine reflective radiance without greasy residue',
      'Tames persistent flyaways and baby hairs instantly'
    ],
    ingredientsList: 'Sclerocarya Birrea (Marula) Seed Oil, Camellia Japonica Seed Ferment, Squalane.',
    howToUse: 'Dispense 1–2 pumps onto palms, rub hands together, and smooth lightly through dry or damp hair.',
    faqs: [],
    collection: 'Hair Repair'
  },
  {
    id: 'amla-peppermint-scalp-scrub',
    name: 'Amla & Peppermint Detox Scalp Scrub',
    category: 'Scalp Care',
    categoryKey: 'scalp-care',
    price: 42.00,
    originalPrice: 48.00,
    rating: 4.8,
    reviewsCount: 89,
    badge: 'Detox Formula',
    shortDescription: 'Exfoliating scalp therapy with Himalayan micro-salts, peppermint, and amla berries.',
    description: 'Purify your scalp environment with our refreshing detox scrub. Natural fine sea salts clear product buildup while peppermint stimulates circulation.',
    images: [
      '/images/product-6-a.jpg',
      '/images/product-6-b.jpg'
    ],
    benefits: [
      'Dissolves dry shampoo buildup and hard water mineral deposits',
      'Peppermint cooling action awakens tired follicles'
    ],
    ingredientsList: 'Maris Sal (Himalayan Pink Salt), Aqua, Mentha Piperita (Peppermint) Leaf Oil, Emblica Officinalis Extract.',
    howToUse: 'Once per week, scoop a small amount onto damp scalp. Gently scrub in circular motions for 2 minutes and rinse.',
    faqs: [],
    collection: 'Scalp Care'
  },
  {
    id: 'complete-botanical-renewal-ritual-kit',
    name: 'Complete Botanical Renewal Ritual Kit',
    category: 'Hair Kits',
    categoryKey: 'hair-kits',
    price: 128.00,
    originalPrice: 164.00,
    rating: 5.0,
    reviewsCount: 312,
    badge: 'Luxury Bundle',
    shortDescription: 'Curated 4-piece full-size regimen for complete scalp rejuvenation and silk hair transformation.',
    description: 'The ultimate luxury home ritual. Includes our Rosemary Scalp Elixir, Hydra-Nourish Shampoo, Velvet Silk Mask, and Gloss Serum.',
    images: [
      '/images/product-7-a.jpg',
      '/images/product-7-b.jpg'
    ],
    benefits: [
      'Includes 4 full-sized bestselling botanical treatments',
      'Covers complete 4-step system in keepsake pouch'
    ],
    ingredientsList: 'See individual product listings for complete ingredient profiles.',
    howToUse: 'Use sequentially: Scalp Oil -> Shampoo -> Repair Mask -> Gloss Serum.',
    faqs: [],
    collection: 'Hair Growth'
  },
  {
    id: 'aloe-green-tea-leave-in-conditioner',
    name: 'Aloe & Green Tea Leave-In Moisture Milk',
    category: 'Conditioner',
    categoryKey: 'conditioner',
    price: 34.00,
    originalPrice: 38.00,
    rating: 4.6,
    reviewsCount: 64,
    badge: 'Hydrating',
    shortDescription: 'Weightless daily detangling milk with aloe juice and antioxidant green tea.',
    description: 'A light sprayable moisture milk that quenches thirsty hair fibers and eliminates morning tangles.',
    images: [
      '/images/product-8-a.jpg',
      '/images/product-8-b.jpg'
    ],
    benefits: [
      'Instant detangling power reduces wet combing breakage',
      'Aloe Vera juice delivers deep moisture'
    ],
    ingredientsList: 'Aloe Barbadensis Leaf Juice, Aqua, Camellia Sinensis Water, Hydrolyzed Rice Protein.',
    howToUse: 'Mist liberally onto clean damp hair from roots to tips. Comb through to distribute evenly.',
    faqs: [],
    collection: 'Daily Care'
  },
  {
    id: 'organic-cold-pressed-coconut-hair-oil',
    name: 'Organic Virgin Coconut Hair Oil',
    category: 'Hair Oil',
    categoryKey: 'hair-oil',
    price: 32.00,
    originalPrice: 36.00,
    rating: 4.7,
    reviewsCount: 53,
    badge: 'Pure Organic',
    shortDescription: 'Raw unrefined cold-pressed coconut oil rich in lauric acid to nourish scalp & strands.',
    description: 'Harvested from certified organic coconuts, our unrefined virgin coconut oil retains maximum natural vitamin E.',
    images: [
      '/images/product-9-a.jpg',
      '/images/product-9-b.jpg'
    ],
    benefits: [
      '100% pure raw unrefined cold-pressed virgin coconut oil',
      'Protects hair protein structure during wet washing'
    ],
    ingredientsList: '100% Organic Cold-Pressed Cocos Nucifera (Coconut) Oil.',
    howToUse: 'Warm a tablespoon in hands until liquefied. Smooth into hair from scalp to tips.',
    faqs: [],
    collection: 'Hair Repair'
  },
  {
    id: 'fortifying-hair-growth-concentrate',
    name: 'Fortifying Root Growth Concentrate',
    category: 'Serum',
    categoryKey: 'serum',
    price: 64.00,
    originalPrice: 75.00,
    rating: 4.9,
    reviewsCount: 185,
    badge: 'Clinical Grade',
    shortDescription: 'Bioactive peptide and red clover extract serum engineered to combat thinning hair.',
    description: 'A clinical-strength botanical concentrate formulated with red clover flower extract, copper tripeptides, and caffeine.',
    images: [
      '/images/product-10-a.jpg',
      '/images/product-10-b.jpg'
    ],
    benefits: [
      'Peptide & Red Clover complex visibly thickens sparse areas',
      'Caffeine awakens hair follicles and prolongs growth phase'
    ],
    ingredientsList: 'Aqua, Trifolium Pratense Extract, Acetyl Tetrapeptide-3, Caffeine.',
    howToUse: 'Apply one full dropper daily directly to dry or towel-dried scalp along parting lines.',
    faqs: [],
    collection: 'Hair Growth'
  },
  {
    id: 'bio-active-peptide-density-serum',
    name: 'Bio-Active Peptide Scalp Density Serum',
    category: 'Serum',
    categoryKey: 'serum',
    price: 58.00,
    originalPrice: 68.00,
    rating: 4.9,
    reviewsCount: 164,
    badge: 'High Density',
    shortDescription: 'Triple copper-tripeptide & biotin complex engineered to stimulate dormant scalp follicles.',
    description: 'Our Bio-Active Peptide Scalp Density Serum penetrates root sheaths with bio-identical amino acids and biotin extractions to restore thick, buoyant strand volume.',
    images: [
      '/images/product-11-a.jpg',
      '/images/product-11-b.jpg'
    ],
    benefits: [
      'Increases visible hair strand density by up to 34% in 12 weeks',
      'Bio-identical amino acids nourish follicular roots',
      'Non-sticky, fast-absorbing water-elixir texture'
    ],
    ingredientsList: 'Copper Tripeptide-1, Biotin, Niacinamide, Saw Palmetto Extract, Hydrolyzed Rice Protein, Rosewater.',
    howToUse: 'Fill dropper and apply 5-8 drops directly onto clean scalp once daily at bedtime. Massage gently.',
    faqs: [
      { q: 'Can I leave this on overnight?', a: 'Yes, this formula is weightless and leave-in; no washing required.' }
    ],
    collection: 'Hair Growth'
  },
  {
    id: 'hydra-silk-thermal-protectant-serum',
    name: 'Hydra-Silk Thermal Heat Protectant Serum',
    category: 'Serum',
    categoryKey: 'serum',
    price: 46.00,
    originalPrice: 54.00,
    rating: 4.8,
    reviewsCount: 92,
    badge: 'Heat Shield',
    shortDescription: 'Weightless thermal barrier serum with fermented marula oil and hyaluronic acid.',
    description: 'Shield strands from heat up to 450°F while locking in intense moisture. Hydra-Silk Thermal Serum coats cuticle layers in a light-reflective silk veil.',
    images: [
      '/images/product-12-a.jpg',
      '/images/product-12-b.jpg'
    ],
    benefits: [
      'Shields against thermal styling damage up to 450°F (230°C)',
      'Hyaluronic acid quenches dry, fragile cuticles',
      'Eliminates static and humidity frizz instantly'
    ],
    ingredientsList: 'Fermented Sclerocarya Birrea (Marula) Oil, Sodium Hyaluronate, Silk Amino Acids, Jojoba Esters.',
    howToUse: 'Pump 1-2 drops into palms, smooth evenly through towel-dried hair before blow-drying or heat styling.',
    faqs: [],
    collection: 'Hair Repair'
  }
];

export const categories = [
  { name: 'All Products', key: 'all' },
  { name: 'Shampoo', key: 'shampoo' },
  { name: 'Conditioner', key: 'conditioner' },
  { name: 'Hair Oil', key: 'hair-oil' },
  { name: 'Hair Mask', key: 'hair-mask' },
  { name: 'Serum', key: 'serum' },
  { name: 'Scalp Care', key: 'scalp-care' },
  { name: 'Hair Kits', key: 'hair-kits' }
];

export const collections = [
  {
    id: 'hair-growth',
    title: 'Hair Growth & Density',
    subtitle: 'Follicle awakening & root fortifying formulas',
    image: '/images/rosemary-biotin-scalp-elixir.jpg',
    desc: 'Targeted botanical tinctures rich in Rosemary, Biotin, and Peptides to stimulate density and prevent shedding.'
  },
  {
    id: 'hair-repair',
    title: 'Intensive Hair Repair',
    subtitle: 'Deep lipid & protein cuticle reconstruction',
    image: '/images/product-3-a.jpg',
    desc: 'Restorative shea, avocado, and plant keratin masques that mend broken bonds and restore glass shine.'
  },
  {
    id: 'scalp-care',
    title: 'Scalp Detox & Balance',
    subtitle: 'Purifying scrubs & micro-circulation tonics',
    image: '/images/product-6-a.jpg',
    desc: 'Exfoliating pink salt & peppermint treatments designed to restore optimal scalp biome and moisture equilibrium.'
  },
  {
    id: 'daily-care',
    title: 'Daily Botanical Hydration',
    subtitle: 'Gentle clean cleansers & moisture milks',
    image: '/images/product-2-a.jpg',
    desc: 'Pure organic aloe vera and coconut water formulas crafted for daily softness, bounce, and effortless detangling.'
  }
];
