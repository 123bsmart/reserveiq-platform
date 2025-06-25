# ReserveIQ - AI-Powered Condo Intelligence Platform

## Phase 1: Foundation & Crisis Prevention - Frontend Complete ✅

ReserveIQ transforms complex condo financial data into clear, actionable insights while automating compliance requirements. Prevent reserve fund crises instead of reacting to them.

### 🏗️ Features Implemented:

- **Building Dashboard** - Reserve health scoring, key metrics, alerts
- **Document Analysis** - AI extraction from reserve studies & financial reports
- **Financial Dashboard** - Budget variance tracking, cash flow monitoring
- **Assessment Calculator** - Multiple funding scenario comparisons
- **Compliance Tracker** - Multi-jurisdiction regulatory monitoring
- **Board Presentation Generator** - AI-powered crisis communication slides

### 🛠️ Tech Stack:

- React 18+ with modern hooks
- Tailwind CSS for styling
- Lucide React for icons
- Next.js 14 for server-side rendering
- TypeScript for type safety
- Prettier for code formatting
- ESLint for code quality
- Recharts for data visualization

### 📊 Demo Data:

All components use consistent demo data from **Maple Heights Condominiums** showing a realistic reserve fund crisis scenario.

### 📋 For Developers:

This is the complete frontend for ReserveIQ Phase 1. Backend development needed to connect these components to real data.

**Contact:** For questions about implementation details.

## Project Structure

The project follows a feature-based architecture with shared code organized in dedicated directories:

```
src/
├── app/         # App Router components and routes
├── features/    # Feature-specific modules
├── legacy/      # Original HTML/CSS/JS files (pre-migration)
└── shared/      # Shared code across features
    ├── ui/          # Reusable UI components
    ├── config/      # Application configuration
    ├── hooks/       # Custom React hooks
    ├── lib/         # Utility libraries
    ├── services/    # API services
    ├── styles/      # Global styles
    ├── types/       # TypeScript type definitions
    └── utils/       # Utility functions
```

## Legacy Frontend

### Overview

The `legacy` directory contains the original HTML, CSS, and JavaScript files that were part of the initial implementation before the migration to Next.js. These files are preserved for reference and to ensure backward compatibility during the migration process.

### Migration Status

We are progressively migrating the legacy frontend to the modern Next.js architecture. The following components have been migrated:

- ✅ Home page (Landing page)
- ✅ Dashboard preview

Components pending migration:

- ⏳ Demo page
- ⏳ Demo request form
- ⏳ Full dashboard

### Working with Legacy Code

If you need to make changes to features that haven't been migrated yet:

1. Locate the relevant files in the `legacy` directory
2. Make your changes in the legacy files
3. Test thoroughly to ensure compatibility
4. Document your changes in the migration plan

**Note:** Avoid adding new features to the legacy codebase. Instead, prioritize migrating that section to the new architecture first.

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
