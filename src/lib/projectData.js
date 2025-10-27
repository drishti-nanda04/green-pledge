// Actual project data extracted from the codebase

export const packages = [
  {
    id: 1,
    title: "Neem Tree Package",
    description: "Plant Neem trees in Bundelkhand to restore degraded drylands and improve local ecosystems.",
    trees: 100,
    co2: 25,
    location: "Bundelkhand, Uttar Pradesh",
    price: "₹25,000",
    priceValue: 25000,
    image: "/images/neem.jpg",
    treeType: "Neem",
  },
  {
    id: 2,
    title: "Sal Tree Package",
    description: "Reforest native Sal trees in Chotanagpur, Jharkhand — ideal for restoring biodiversity in mined landscapes.",
    trees: 250,
    co2: 62.5,
    location: "Chotanagpur, Jharkhand",
    price: "₹50,000",
    priceValue: 50000,
    image: "/images/sal.jpg",
    treeType: "Sal",
  },
  {
    id: 3,
    title: "Teak Tree Package",
    description: "Support Teak replantation in Wayanad, Kerala — strengthening the Western Ghats' rainforest belt.",
    trees: 500,
    co2: 125,
    location: "Wayanad, Kerala",
    price: "₹1,00,000",
    priceValue: 100000,
    image: "/images/teak.jpg",
    treeType: "Teak",
  },
  {
    id: 4,
    title: "Babul Tree Package",
    description: "Help revive the Aravalli hills with Babul trees — native to Rajasthan's dry forest ecosystem.",
    trees: 100,
    co2: 25,
    location: "Aravalli Hills, Rajasthan",
    price: "₹25,000",
    priceValue: 25000,
    image: "/images/babul.jpg",
    treeType: "Babul",
  },
  {
    id: 5,
    title: "Hollong Tree Package",
    description: "Plant endangered Hollong trees in Assam — strengthening forests near Kaziranga National Park.",
    trees: 250,
    co2: 62.5,
    location: "Kaziranga, Assam",
    price: "₹50,000",
    priceValue: 50000,
    image: "/images/hollong.jpg",
    treeType: "Hollong",
  },
  {
    id: 6,
    title: "Mangrove Tree Package",
    description: "Restore Sundarbans' coastline with Mangrove trees — protecting biodiversity and preventing erosion.",
    trees: 500,
    co2: 125,
    location: "Sundarbans, West Bengal",
    price: "₹1,00,000",
    priceValue: 100000,
    image: "/images/mangrove.jpg",
    treeType: "Mangrove",
  },
];

export const dashboardData = {
  companyName: "GreenCorp Ltd.",
  planType: "Pro Plan",
  planDescription: "Advanced Sustainability Plan",
  treesPlanted: 2450,
  co2Offset: 35.2,
  hectaresRestored: 12,
  esgGoalsCompletion: 72,
  costPerTonCO2: 41216,
  communityImpact: 28,
  totalInvested: 850000,
  lastUpdated: "Today, 2:30 PM",
  status: "Active",
};

export const availableLocations = [
  "Bundelkhand, Uttar Pradesh",
  "Chotanagpur, Jharkhand",
  "Wayanad, Kerala",
  "Aravalli Hills, Rajasthan",
  "Kaziranga, Assam",
  "Sundarbans, West Bengal",
];

export const treeSpecies = [
  { name: "Neem", count: "varied", native: "Indian subcontinent" },
  { name: "Sal", count: "varied", native: "Central and Eastern India" },
  { name: "Teak", count: "varied", native: "Southern India, Western Ghats" },
  { name: "Babul", count: "varied", native: "Rajasthan, Dry regions" },
  { name: "Hollong", count: "varied", native: "Assam, Northeast India" },
  { name: "Mangrove", count: "varied", native: "Coastal West Bengal" },
];

export const pricingTiers = {
  basic: {
    price: "₹25,000",
    priceValue: 25000,
    trees: 100,
    co2: 25,
    description: "Best for small businesses and individuals",
  },
  standard: {
    price: "₹50,000",
    priceValue: 50000,
    trees: 250,
    co2: 62.5,
    description: "Ideal for medium-sized companies",
  },
  premium: {
    price: "₹1,00,000",
    priceValue: 100000,
    trees: 500,
    co2: 125,
    description: "For large corporations and enterprises",
  },
};

export const projectFeatures = [
  "Real-time dashboard tracking",
  "Interactive map for selecting reforestation areas",
  "Detailed analytics and reporting",
  "Multiple tree species options",
  "Various location choices across India",
  "Carbon credit certification",
  "Community impact tracking",
];

export function getAllProjectData() {
  return {
    packages,
    dashboardData,
    availableLocations,
    treeSpecies,
    pricingTiers,
    projectFeatures,
  };
}







