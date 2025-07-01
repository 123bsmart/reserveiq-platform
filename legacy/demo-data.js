// Master Demo Dataset for Maple Heights Condominiums
// This data flows consistently across ALL ReserveIQ components

export const DEMO_BUILDING_DATA = {
  // Building Profile
  building: {
    name: "Maple Heights Condominiums",
    address: "1247 Maple Avenue, Toronto, ON M4K 1M7",
    units: 156,
    floors: 12,
    yearBuilt: 1998,
    corporationNumber: "TSCC 2156",
    propertyManager: "Sarah Chen",
    managementCompany: "Toronto Property Solutions"
  },

  // Financial Data
  finances: {
    currentReserve: 125000,
    targetReserve: 170000,
    shortfall: 45000,
    monthlyFeePerUnit: 425,
    totalMonthlyIncome: 66300,
    monthlyExpenses: 52800,
    cashFlow: 13500,
    yearToDateIncome: 795600,
    yearToDateExpenses: 633600,
    budgetVariance: -12500
  },

  // Major Upcoming Expenses
  upcomingExpenses: [
    {
      item: "Roof Replacement",
      cost: 85000,
      timeline: "18 months",
      priority: "Critical",
      condition: "Poor",
      engineerRecommendation: "Immediate replacement required due to multiple leaks"
    },
    {
      item: "HVAC System Upgrades",
      cost: 42000,
      timeline: "24 months", 
      priority: "High",
      condition: "Fair",
      engineerRecommendation: "Units 8-12 require replacement within 2 years"
    },
    {
      item: "Parking Garage Waterproofing",
      cost: 28000,
      timeline: "12 months",
      priority: "Medium",
      condition: "Fair",
      engineerRecommendation: "Preventive maintenance before winter"
    }
  ],

  // Budget Categories
  budgetCategories: [
    { category: 'Utilities', budgeted: 12000, actual: 14160, variance: 2160, status: 'over' },
    { category: 'Maintenance', budgeted: 8500, actual: 9520, variance: 1020, status: 'over' },
    { category: 'Insurance', budgeted: 6800, actual: 6650, variance: -150, status: 'under' },
    { category: 'Management Fees', budgeted: 4200, actual: 4200, variance: 0, status: 'on-track' },
    { category: 'Reserve Contribution', budgeted: 13900, actual: 13900, variance: 0, status: 'on-track' }
  ]
};

// Helper functions for components
export const getDemoData = () => DEMO_BUILDING_DATA;
export const getFinancialSummary = () => DEMO_BUILDING_DATA.finances;
export const getUpcomingExpenses = () => DEMO_BUILDING_DATA.upcomingExpenses;
