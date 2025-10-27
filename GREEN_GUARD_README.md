# GreenGuard AI Assistant 🤖🌱

GreenGuard is the intelligent AI environmental assistant for GreenPledge, your carbon offset and reforestation platform. GreenGuard is designed to help users understand and engage with all aspects of the platform.

## 🌟 Identity & Personality

**Name:** GreenGuard  
**Role:** AI Environmental Assistant  
**Mission:** To help businesses and individuals understand and engage with carbon offset programs, reforestation initiatives, and sustainability tracking through the GreenPledge platform.  

**Personality:** Enthusiastic about environmental conservation, knowledgeable about carbon credits and reforestation, supportive and helpful in guiding users through the platform.

## 📚 Knowledge Base

GreenGuard has complete knowledge about your GreenPledge project, including:

### 1. **Dashboard Data**
- Current company status (GreenCorp Ltd.)
- Trees planted: 2,450
- CO₂ offset: 35.2 tons
- Hectares restored: 12
- ESG goals completion: 72%
- Total invested: ₹8,50,000
- Community impact: 28 jobs supported
- Recent activities and milestones
- Charts and analytics data

### 2. **Carbon Credit Packages**
Six available packages:
- **Neem Tree Package** (₹25,000): 100 trees, 25 tons CO₂ - Bundelkhand, Uttar Pradesh
- **Sal Tree Package** (₹50,000): 250 trees, 62.5 tons CO₂ - Chotanagpur, Jharkhand
- **Teak Tree Package** (₹1,00,000): 500 trees, 125 tons CO₂ - Wayanad, Kerala
- **Babul Tree Package** (₹25,000): 100 trees, 25 tons CO₂ - Aravalli Hills, Rajasthan
- **Hollong Tree Package** (₹50,000): 250 trees, 62.5 tons CO₂ - Kaziranga, Assam
- **Mangrove Tree Package** (₹1,00,000): 500 trees, 125 tons CO₂ - Sundarbans, West Bengal

### 3. **Pricing Tiers**
- **Basic** (₹25,000): Best for small businesses and individuals
- **Standard** (₹50,000): Ideal for medium-sized companies
- **Premium** (₹1,00,000): For large corporations and enterprises

### 4. **Locations**
Six project locations across India with details about each region's ecosystem and challenges.

### 5. **Tree Species**
Information about Neem, Sal, Teak, Babul, Hollong, and Mangrove trees, including their native regions and environmental benefits.

### 6. **Project Features & Benefits**
- Environmental benefits (carbon sequestration, biodiversity, etc.)
- Social impact (job creation, community engagement)
- Business advantages (ESG goals, certifications, reputation)

## 🎯 What GreenGuard Can Do

GreenGuard can help users with:

✅ Explaining carbon credits and offset programs  
✅ Describing available packages and pricing  
✅ Sharing dashboard metrics and statistics  
✅ Recommending packages based on needs  
✅ Explaining ESG goals and sustainability tracking  
✅ Providing information about reforestation locations  
✅ Discussing tree species and their benefits  
✅ Answering questions about the platform  

## 💬 How GreenGuard Welcomes Users

When users first interact with GreenGuard, the assistant will:
1. Identify itself as GreenGuard
2. Welcome users warmly
3. Explain its role as an environmental assistant
4. Offer to help with questions about the platform

Example welcome message:  
> "Hello! I'm GreenGuard, your AI environmental assistant for GreenPledge. I'm here to help you understand our carbon offset programs, explore reforestation options, and track your sustainability impact. What would you like to know today?"

## 📁 File Structure

```
src/
├── lib/
│   ├── greenGuardKnowledge.js    # Complete knowledge base
│   └── projectData.js            # Original project data (legacy)
├── components/
│   └── AIAssistant.tsx           # Chat interface component
└── app/
    └── api/
        └── chat/
            └── route.ts          # API route with system prompt
```

## 🔧 Technical Implementation

The knowledge base is stored in `src/lib/greenGuardKnowledge.js` and includes:
- `greenGuardIdentity` - Identity and personality
- `projectSummary` - Project overview and achievements
- `dashboardData` - Current metrics and statistics
- `packages` - Available carbon credit packages
- `pricingTiers` - Pricing information
- `locations` - Project locations
- `treeSpecies` - Species information
- `benefits` - Environmental, social, and business benefits
- `getGreenGuardSystemPrompt()` - Function that generates the system prompt for the AI

The system prompt is injected into the API route at `src/app/api/chat/route.ts` using the `getGreenGuardSystemPrompt()` function.

## 🚀 Usage

GreenGuard is automatically available when users interact with the AI Assistant chat interface. No additional setup required!

## 📝 Example Queries

Users can ask GreenGuard questions like:
- "What packages do you have available?"
- "How many trees have been planted?"
- "What's our current CO₂ offset?"
- "Tell me about the Teak Tree Package"
- "What are the benefits of the Neem trees?"
- "Which package is best for a small business?"

GreenGuard will provide detailed, contextual answers based on the complete knowledge base.

## 🎨 UI Integration

The AI Assistant interface (in `AIAssistant.tsx`) has been updated to reflect the GreenGuard branding:
- Header displays "GreenGuard" instead of "AI Assistant"
- Welcome message emphasizes GreenGuard's role
- Placeholder text guides users on what they can ask

---

**Ready to help users make a positive environmental impact!** 🌍💚
