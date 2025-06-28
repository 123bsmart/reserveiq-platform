import { Form } from '@/shared/ui';
import { CalculatorFormSection } from './CalculatorFormSection';

export const BuildingInformationSection: React.FC = () => {
  return (
    <CalculatorFormSection title="🏢 Building Information">
      <Form.Field
        name="buildingName"
        label="Building/Condo Name"
        render={({ field }) => <Form.Input {...field} placeholder="e.g., Maple Heights Condominiums" />}
        required
      />

      <Form.Row>
        <Form.Field
          name="address"
          label="Address"
          render={({ field }) => <Form.Input {...field} placeholder="123 Main Street, City, Province" />}
        />
        <Form.Field
          name="numberOfUnits"
          label="Number of Units"
          render={({ field }) => <Form.Input {...field} type="number" min={1} inputMode="numeric" />}
          required
        />
      </Form.Row>

      <Form.Row>
        <Form.Field
          name="yearBuilt"
          label="Year Built"
          render={({ field }) => (
            <Form.Input {...field} type="number" placeholder="1995" min={1900} max={new Date().getFullYear()} />
          )}
        />
        <Form.Field
          name="currentReserves"
          label="Current Reserve Balance"
          render={({ field }) => <Form.Input {...field} placeholder="$125,000" />}
          text="Approximate amount"
        />
        <Form.Field
          name="monthlyContribution"
          label="Monthly Contribution"
          render={({ field }) => <Form.Input {...field} placeholder="$8,500" />}
          text="Total monthly reserves"
        />
      </Form.Row>
    </CalculatorFormSection>
  );
};
