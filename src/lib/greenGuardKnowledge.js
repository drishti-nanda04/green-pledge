// GreenGuard AI Assistant - Project Knowledge Base
// This file contains all information about GreenPledge for the AI assistant

export const greenGuardIdentity = {
  name: "GreenGuard",
  role: "AI Environmental Assistant",
  mission: "To help businesses and individuals understand and engage with carbon offset programs, reforestation initiatives, and sustainability tracking through the GreenPledge platform.",
  personality: "Enthusiastic about environmental conservation, knowledgeable about carbon credits and reforestation, supportive and helpful in guiding users through the platform.",
};

export const projectSummary = {
  name: "GreenPledge",
  tagline: "Carbon offset platform helping companies offset their carbon footprint through tree planting initiatives across India",
  purpose: "GreenPledge is a purpose-driven platform empowering companies to take meaningful environmental action through reforestation. Businesses can explore deforestation-affected zones across India using an interactive map, identify high-priority regions and fund verified tree-planting initiatives — all while working toward sustainability goals and earning environmental credits.",
  vision: "Through strategic partnerships, smart technology and a powerful corporate dashboard, GreenPledge transforms environmental responsibility into measurable, real-world impact — making it easy for businesses to grow their brand by growing the planet.",
  features: [
    "🌳 Interactive deforestation tracking dashboard",
    "📦 Carbon credit packages from various locations",
    "🗺️ Interactive map to select reforestation areas",
    "🤖 AI Assistant (GreenGuard) for navigation and support",
    "📊 Real-time metrics and analytics",
    "🎯 ESG goals tracking and completion",
    "🏆 Sustainability certifications",
  ],
  achievements: {
    treesPlanted: "5M+",
    zones: "50+ Project Zones",
    partners: "200+ Partner Companies",
    regions: "Across India",
  },
};

export const dashboardData = {
  companyName: "GreenCorp Ltd.",
  planType: "Pro Plan",
  planDescription: "Advanced Sustainability Plan",
  currentStatus: {
    treesPlanted: 2450,
    co2Offset: 35.2, // tons
    hectaresRestored: 12,
    esgGoalsCompletion: 72, // percentage
    costPerTonCO2: 41216, // rupees
    communityImpact: 28, // jobs supported
    totalInvested: 850000, // rupees
    lastUpdated: "Today, 2:30 PM",
    status: "Active",
  },
  metrics: {
    primary: [
      { name: "CO₂ Offset", value: 35.2, unit: "tons", trend: "increasing" },
      { name: "Trees Planted", value: 2450, unit: "trees", trend: "increasing" },
      { name: "Hectares Restored", value: 12, unit: "ha", trend: "stable" },
      { name: "ESG Goals Completion", value: 72, unit: "%", trend: "improving" },
    ],
    secondary: [
      { name: "Cost per Ton of CO₂", value: "₹41,216", description: "Average cost to offset one ton of CO₂" },
      { name: "Community Impact", value: "28", unit: "Jobs Supported", description: "Local employment opportunities created" },
      { name: "Total Invested", value: "₹8,50,000", description: "Total investment in reforestation" },
    ],
  },
  charts: {
    co2Offset: {
      type: "Monthly CO₂ Offset vs Target",
      data: [
        { month: 'Jan', target: 3, actual: 1.2 },
        { month: 'Feb', target: 3, actual: 2 },
        { month: 'Mar', target: 3, actual: 3.2 },
        { month: 'Apr', target: 3, actual: 2.7 },
        { month: 'May', target: 3, actual: 3.7 },
        { month: 'Jun', target: 3, actual: 4 },
      ],
    },
    treeSpecies: {
      type: "Tree Species Distribution",
      data: [
        { species: 'Mahogany', planted: 800, avgCO2: 0.08, area: 'Tamil Nadu' },
        { species: 'Banyan', planted: 1100, avgCO2: 0.05, area: 'Haryana' },
        { species: 'Teak', planted: 450, avgCO2: 0.07, area: 'Uttar Pradesh' },
      ],
    },
  },
  recentActivities: [
    { date: "2025-04-01", text: "Reforestation Mission completed in Tamil Nadu (250 trees).", type: "mission" },
    { date: "2025-03-20", text: "Reached milestone: 30 tons of CO₂ offset!", type: "milestone" },
    { date: "2025-02-10", text: "Earned Gold Sustainability Certification.", type: "achievement" },
  ],
};

export const packages = [
  {
    id: 1,
    title: "Neem Tree Package",
    description: "Plant Neem trees in Bundelkhand to restore degraded drylands and improve local ecosystems.",
    trees: 100,
    co2: 25, // tons
    location: "Bundelkhand, Uttar Pradesh",
    price: "₹25,000",
    priceValue: 25000,
    treeType: "Neem",
    native: "Indian subcontinent",
    tier: "basic",
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
    treeType: "Sal",
    native: "Central and Eastern India",
    tier: "standard",
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
    treeType: "Teak",
    native: "Southern India, Western Ghats",
    tier: "premium",
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
    treeType: "Babul",
    native: "Rajasthan, Dry regions",
    tier: "basic",
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
    treeType: "Hollong",
    native: "Assam, Northeast India",
    tier: "standard",
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
    treeType: "Mangrove",
    native: "Coastal West Bengal",
    tier: "premium",
  },
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

export const locations = [
  { name: "Bundelkhand, Uttar Pradesh", region: "Central India", type: "Drylands" },
  { name: "Chotanagpur, Jharkhand", region: "Eastern India", type: "Mining affected" },
  { name: "Wayanad, Kerala", region: "Southern India", type: "Rainforest" },
  { name: "Aravalli Hills, Rajasthan", region: "Western India", type: "Dry forest" },
  { name: "Kaziranga, Assam", region: "Northeast India", type: "Biodiversity hotspot" },
  { name: "Sundarbans, West Bengal", region: "Eastern India", type: "Coastal mangrove" },
];

export const treeSpecies = [
  { name: "Neem", native: "Indian subcontinent", uses: ["Air purification", "Medicinal", "Drought resistant"] },
  { name: "Sal", native: "Central and Eastern India", uses: ["Biodiversity", "Soil restoration", "Native species"] },
  { name: "Teak", native: "Southern India, Western Ghats", uses: ["Rainforest conservation", "Timber", "Biodiversity"] },
  { name: "Babul", native: "Rajasthan, Dry regions", uses: ["Desert reclamation", "Drought resistant", "Soil stabilization"] },
  { name: "Hollong", native: "Assam, Northeast India", uses: ["Endangered conservation", "Wildlife habitat", "Biodiversity"] },
  { name: "Mangrove", native: "Coastal West Bengal", uses: ["Coastal protection", "Erosion prevention", "Marine biodiversity"] },
];

export const benefits = {
  environmental: [
    "Carbon sequestration and CO₂ offset",
    "Biodiversity restoration",
    "Soil erosion prevention",
    "Water cycle regulation",
    "Air quality improvement",
  ],
  social: [
    "Job creation in local communities",
    "Skills development programs",
    "Community engagement and ownership",
    "Sustainable livelihood opportunities",
  ],
  business: [
    "ESG goal achievement",
    "Sustainability certifications",
    "Brand reputation enhancement",
    "Carbon credit certification",
    "Real-time impact tracking",
    "Transparent reporting",
  ],
};

export const whyChooseGreenPledge = {
  features: [
    { 
      title: "🌍 ESG & Sustainability",
      desc: "Easily achieve your ESG and carbon offset goals with clear metrics.",
    },
    {
      title: "📊 Real-Time Metrics",
      desc: "Transparent and measurable impact. See the results of your investments in real time.",
    },
    {
      title: "🤝 Corporate Impact",
      desc: "Strengthen your brand reputation by demonstrating your commitment to the environment.",
    },
    {
      title: "🌱 5M+ Trees Planted",
      desc: "Over 5 million trees planted through verified drone missions.",
    },
    {
      title: "📍 50+ Project Zones",
      desc: "Reforestation projects across 50+ critical regions.",
    },
    {
      title: "🏢 200+ Partner Companies",
      desc: "Trusted by leading organizations committed to sustainability.",
    },
  ],
};

export const testimonials = [
  {
    quote: "Partnering with GreenPledge significantly accelerated our sustainability goals.",
    author: "CEO, GreenCorp Ltd.",
  },
  {
    quote: "Seeing our impact reflected instantly on the dashboard is incredibly motivating.",
    author: "Sustainability Manager, EcoVision Inc.",
  },
];

// Complete knowledge base object
export const greenGuardKnowledge = {
  identity: greenGuardIdentity,
  project: projectSummary,
  dashboard: dashboardData,
  packages: packages,
  pricing: pricingTiers,
  locations: locations,
  species: treeSpecies,
  benefits: benefits,
  features: whyChooseGreenPledge,
  testimonials: testimonials,
};

// Helper function to get formatted system prompt
export function getGreenGuardSystemPrompt() {
  return `You are GreenGuard, the AI Environmental Assistant for GreenPledge, a carbon offset and reforestation platform helping companies offset their carbon footprint through tree planting initiatives across India.

Your identity:
- Name: ${greenGuardIdentity.name}
- Role: ${greenGuardIdentity.role}
- Mission: ${greenGuardIdentity.mission}
- Personality: ${greenGuardIdentity.personality}

Welcome users warmly and identify yourself as GreenGuard when starting conversations.

PROJECT INFORMATION:
${projectSummary.purpose}

FEATURES:
${projectSummary.features.map(f => f).join(', ')}

ACHIEVEMENTS:
- ${projectSummary.achievements.treesPlanted} trees planted
- ${projectSummary.achievements.zones}
- ${projectSummary.achievements.partners}
- Projects across ${projectSummary.achievements.regions}

DASHBOARD DATA:
The current company dashboard shows:
- Trees Planted: ${dashboardData.currentStatus.treesPlanted}
- CO₂ Offset: ${dashboardData.currentStatus.co2Offset} tons
- Hectares Restored: ${dashboardData.currentStatus.hectaresRestored}
- ESG Goals Completion: ${dashboardData.currentStatus.esgGoalsCompletion}%
- Total Invested: ₹${dashboardData.currentStatus.totalInvested.toLocaleString()}
- Community Impact: ${dashboardData.currentStatus.communityImpact} jobs supported
- Current Status: ${dashboardData.currentStatus.status}

AVAILABLE PACKAGES:
${packages.map(pkg => `
${pkg.title}: ${pkg.trees} trees, ${pkg.co2} tons CO₂ offset, ${pkg.price} - ${pkg.description}
Location: ${pkg.location}
`).join('')}

PRICING TIERS:
- Basic (₹25,000): 100 trees, 25 tons CO₂ - Best for small businesses
- Standard (₹50,000): 250 trees, 62.5 tons CO₂ - Ideal for medium companies
- Premium (₹1,00,000): 500 trees, 125 tons CO₂ - For large corporations

BENEFITS:
Environmental: ${benefits.environmental.join(', ')}
Social: ${benefits.social.join(', ')}
Business: ${benefits.business.join(', ')}

Always:
- Be enthusiastic about environmental conservation
- Provide specific information from the knowledge base
- Help users understand carbon credits, reforestation, and sustainability
- Guide users to appropriate packages or dashboard information
- Use friendly, professional language
- When relevant, mention specific trees, locations, or metrics from the data`;
}
