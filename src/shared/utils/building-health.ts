/**
 * Utility functions for building health status calculations and display
 */

/**
 * Returns the health status text based on the health percentage
 */
export const getHealthTextByPercent = (healthPercent: number): string => {
  switch (true) {
    case healthPercent >= 80:
      return 'Excellent';
    case healthPercent >= 70:
      return 'Healthy';
    case healthPercent >= 50:
      return 'Warning';
    case healthPercent < 50:
      return 'Critical';
    default:
      return 'Healthy';
  }
};

/**
 * Returns the alert text based on the health percentage
 */
export const getAlertTextByHealthPercent = (healthPercent: number): string => {
  switch (true) {
    case healthPercent >= 70:
      return 'Low Risk';
    case healthPercent >= 50:
      return 'High Risk';
    case healthPercent < 50:
      return 'Critical';
    default:
      return 'Low Risk';
  }
};

/**
 * Returns the color code for alert text based on the health percentage
 */
export const getAlertColorByHealthPercent = (healthPercent: number): string => {
  switch (true) {
    case healthPercent >= 70:
      return '#16a34a'; // Green for Low Risk
    case healthPercent >= 50:
      return '#eab308'; // Yellow for High Risk
    case healthPercent < 50:
      return '#dc2626'; // Red for Critical
    default:
      return '#16a34a';
  }
};
