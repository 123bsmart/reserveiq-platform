import { buildingData, emailContent } from '@/features/email-templates/data';

export function generateTemplateContent(selected: string) {
  const firstExpense = buildingData.upcomingExpenses?.[0];

  const replacements: Record<string, string> = {
    BUILDING_NAME: buildingData.building.name,
    CURRENT_RESERVE: buildingData.currentFinances.reserveFund.toLocaleString(),
    TARGET_RESERVE: buildingData.currentFinances.targetReserve.toLocaleString(),
    RESERVE_HEALTH: (
      (buildingData.currentFinances.reserveFund / buildingData.currentFinances.targetReserve) *
      100
    ).toFixed(1),

    MONTHLY_VARIANCE_AMOUNT: Math.abs(buildingData.currentFinances.budgetVariance).toLocaleString(),
    VARIANCE_DIRECTION: buildingData.currentFinances.budgetVariance < 0 ? 'over' : 'under',

    UPCOMING_EXPENSE_ITEM: firstExpense?.item ?? 'upcoming project',
    UPCOMING_EXPENSE_TIMELINE: `${firstExpense?.timelineMonths ?? 'TBD'} months`,
    UPCOMING_EXPENSE_COST: firstExpense?.cost?.toLocaleString() ?? '0',

    RISK_LEVEL: buildingData.fundingScenarios?.recommended?.riskLevel ?? 'Unknown',
    SPECIAL_ASSESSMENT_PER_UNIT: Math.round(firstExpense?.cost / buildingData.building.units).toLocaleString(),

    PROPERTY_MANAGER_NAME: buildingData.building.propertyManager ?? 'Property Manager',

    EMERGENCY_PHONE_1: '[XXX-XXX-XXXX]',
    EMERGENCY_PHONE_2: '[XXX-XXX-XXXX]',
    EMERGENCY_PHONE_3: '[XXX-XXX-XXXX]',

    WEBSITE_URL: '[website]',
  };

  const pattern = new RegExp(Object.keys(replacements).join('|'), 'g');

  const replacePlaceholders = (text: string) => text.replace(pattern, (match) => replacements[match] || match);

  const result: Record<string, string> = {};
  for (const key in emailContent) {
    const contentKey = key as keyof typeof emailContent;
    result[contentKey] = replacePlaceholders(emailContent[contentKey]);
  }

  return result[selected];
}
