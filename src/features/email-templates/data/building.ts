
// MAPLE HEIGHTS CONDOMINIUMS - COMPLETE DEMO DATASET
// For ReserveIQ Assessment Calculator Integration
// Use this data to populate realistic Toronto condo scenarios

export const buildingData = {
  // ===== BUILDING PROFILE =====
  building: {
    name: "Maple Heights Condominiums",
    address: "1247 Maple Avenue, Toronto, ON M4K 1M7",
    units: 156,
    floors: 12,
    yearBuilt: 1998,
    corporationNumber: "TSCC 2156",
    propertyManager: "Sarah Chen",
    managementCompany: "Toronto Property Solutions",
    neighborhood: "Leslieville",
    buildingType: "High-rise Condominium"
  },

  // ===== CURRENT FINANCIAL SITUATION =====
  currentFinances: {
    reserveFund: 125000,
    targetReserve: 170000,
    shortfall: 45000,
    monthlyFeePerUnit: 425,
    totalMonthlyIncome: 66300, // 156 units × $425
    monthlyExpenses: 52800,
    netCashFlow: 13500,
    yearToDateIncome: 795600,
    yearToDateExpenses: 633600,
    budgetVariance: -12500, // Over budget
    lastReserveStudy: "2022-03-15",
    nextReserveStudy: "2025-03-15"
  },

  // ===== MAJOR UPCOMING EXPENSES (Crisis Scenarios) =====
  upcomingExpenses: [
    {
      item: "Roof Replacement",
      cost: 85000,
      timelineMonths: 18,
      priority: "Critical",
      condition: "Poor - Multiple leaks reported",
      lastInspection: "2024-09-15",
      engineerNote: "Immediate replacement required due to deteriorating membrane and structural concerns",
      consequenceOfDelay: "Water damage, mold, unit flooding - potential $200K+ in damages"
    },
    {
      item: "HVAC System Upgrades", 
      cost: 42000,
      timelineMonths: 24,
      priority: "High",
      condition: "Fair - Units 8-12 failing",
      lastInspection: "2024-08-20",
      engineerNote: "4 units require immediate replacement, others serviceable for 2-3 years",
      consequenceOfDelay: "Unit heating failures, resident complaints, emergency repairs"
    },
    {
      item: "Parking Garage Waterproofing",
      cost: 28000,
      timelineMonths: 12,
      priority: "Medium",
      condition: "Fair - Minor seepage",
      lastInspection: "2024-10-05", 
      engineerNote: "Preventive maintenance recommended before winter freeze-thaw cycles",
      consequenceOfDelay: "Concrete spalling, structural damage, vehicle damage claims"
    },
    {
      item: "Elevator Modernization",
      cost: 35000,
      timelineMonths: 60,
      priority: "Low",
      condition: "Good - Functional but dated",
      lastInspection: "2024-11-01",
      engineerNote: "Current system functional, modernization for efficiency and compliance",
      consequenceOfDelay: "Higher maintenance costs, potential code violations"
    }
  ],

  // ===== ASSESSMENT CALCULATOR SCENARIOS =====
  fundingScenarios: {
    // SCENARIO 1: Crisis Mode (Current Path)
    crisis: {
      name: "Current Path (Crisis Mode)",
      description: "Continue current fees, handle emergencies as they arise",
      monthlyFeeChange: 0,
      specialAssessment: 6000, // $85K roof ÷ 156 units = ~$545 + other emergencies
      timeToFirstCrisis: 18,
      totalCostPerUnit: 6000,
      riskLevel: "HIGH",
      consequences: [
        "Roof emergency in 18 months = $6,000 special assessment",
        "HVAC failures = Additional $2,000 per unit", 
        "Water damage claims = Legal liability",
        "Property values decline due to poor maintenance"
      ]
    },

    // SCENARIO 2: Gradual Increase
    gradual: {
      name: "Gradual Fee Increase",
      description: "Increase monthly fees to build adequate reserves",
      monthlyFeeChange: 50, // $425 → $475
      specialAssessment: 0,
      timeToFullyFunded: 36,
      totalCostPerUnit: 1800, // $50 × 36 months
      riskLevel: "MEDIUM",
      consequences: [
        "Avoid emergency assessments",
        "Planned maintenance prevents crises",
        "Property values maintained",
        "Gradual, predictable cost increases"
      ]
    },

    // SCENARIO 3: ReserveIQ Recommended (Optimized)
    recommended: {
      name: "ReserveIQ Optimized Plan",
      description: "Smart funding strategy with crisis prevention",
      monthlyFeeChange: 35, // $425 → $460
      specialAssessment: 0,
      timeToFullyFunded: 42,
      totalCostPerUnit: 1470, // $35 × 42 months
      riskLevel: "LOW",
      consequences: [
        "Prevent all emergency assessments",
        "Optimal cash flow management", 
        "Early warning system prevents surprises",
        "Lowest total cost to owners",
        "Professional property management image"
      ]
    },

    // SCENARIO 4: Aggressive Funding
    aggressive: {
      name: "Aggressive Reserve Building",
      description: "Rapid reserve accumulation for maximum security",
      monthlyFeeChange: 75, // $425 → $500
      specialAssessment: 0,
      timeToFullyFunded: 24,
      totalCostPerUnit: 1800, // $75 × 24 months
      riskLevel: "VERY LOW",
      consequences: [
        "Maximum financial security",
        "Handle any emergency without assessments",
        "Highest monthly fees but shortest duration",
        "Premium property management approach"
      ]
    }
  },

  // ===== ONTARIO COMPLIANCE REQUIREMENTS =====
  complianceRequirements: {
    reserveStudy: {
      required: true,
      frequency: "Every 3 years",
      lastCompleted: "2022-03-15",
      nextDue: "2025-03-15",
      daysUntilDue: 265,
      status: "Compliant",
      cost: 8500
    },
    reserveFundMinimum: {
      required: true,
      minimumPercentage: 10,
      currentPercentage: 8.2,
      status: "Below Minimum",
      shortfall: 28000
    },
    auditRequirement: {
      required: true,
      frequency: "Annual",
      lastCompleted: "2024-08-30",
      nextDue: "2025-08-30",
      status: "Compliant"
    }
  },

  // ===== MONTHLY BUDGET BREAKDOWN =====
  monthlyBudget: [
    { category: 'Utilities', budgeted: 12000, actual: 14160, variance: 2160, status: 'over' },
    { category: 'Maintenance', budgeted: 8500, actual: 9520, variance: 1020, status: 'over' },
    { category: 'Insurance', budgeted: 6800, actual: 6650, variance: -150, status: 'under' },
    { category: 'Management Fees', budgeted: 4200, actual: 4200, variance: 0, status: 'on-track' },
    { category: 'Cleaning', budgeted: 3200, actual: 3180, variance: -20, status: 'on-track' },
    { category: 'Security', budgeted: 2800, actual: 2950, variance: 150, status: 'over' },
    { category: 'Landscaping', budgeted: 1800, actual: 1650, variance: -150, status: 'under' },
    { category: 'Professional Services', budgeted: 1200, actual: 1480, variance: 280, status: 'over' },
    { category: 'Reserve Contribution', budgeted: 12500, actual: 10000, variance: -2500, status: 'under' }
  ],

  // ===== DEMO TALKING POINTS =====
  demoNarrative: {
    openingHook: "Let me show you a real Toronto condo that's heading for a $6,000 emergency assessment - and how we prevent it.",
    
    crisisScenario: "Maple Heights has 156 units in Leslieville. Their roof is failing and needs $85,000 in repairs within 18 months. With only $125,000 in reserves, they're facing a devastating special assessment.",
    
    calculatorDemo: "Watch what happens when we run their numbers through our assessment calculator...",
    
    resultComparison: "Crisis mode means a $6,000 shock to every owner. Our optimized plan? Just $35 extra per month prevents the entire crisis.",
    
    closingValue: "This is exactly the kind of scenario we help property managers prevent every day. Instead of crisis calls, you get early warnings and professional solutions."
  }
};

// ===== ASSESSMENT CALCULATOR INPUT FORMAT =====
export const CALCULATOR_INPUTS = {
  buildingName: "Maple Heights Condominiums",
  totalUnits: 156,
  currentReserve: 125000,
  currentMonthlyFee: 425,
  majorUpcomingExpense: {
    item: "Roof Replacement", 
    cost: 85000,
    timelineMonths: 18
  },
  targetReserveLevel: 170000
};

// ===== EXPECTED CALCULATOR OUTPUTS =====
export const EXPECTED_RESULTS = {
  crisisMode: {
    specialAssessment: 6000,
    totalCostToOwner: 6000,
    timeline: "18 months to crisis",
    riskLevel: "HIGH"
  },
  recommendedPlan: {
    monthlyIncrease: 35,
    specialAssessment: 0, 
    totalCostToOwner: 1470,
    timeline: "Crisis prevented",
    riskLevel: "LOW"
  },
  savings: {
    perUnit: 4530, // $6000 - $1470
    totalBuilding: 706680, // $4530 × 156 units
    percentageSavings: 75.5
  }
};