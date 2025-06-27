import { Form } from '@/shared/ui';
import { CalculatorFormSection as Section } from './CalculatorFormSection';

export const CurrentSituationSection: React.FC = () => {
  return (
    <Section title="⚠️ Current Situation">
      <Form.Field
        name="majorExpenses"
        label="Known Upcoming Major Expenses"
        text="List any major repairs or replacements you're planning"
        render={({ field }) => (
          <Form.Textarea
            {...field}
            placeholder="e.g., Roof replacement needed in 2026 ($85,000), HVAC system aging..."
          />
        )}
      />

      <Form.Field
        name="concerns"
        label="Current Reserve Fund Concerns"
        text="What keeps you up at night about your reserve fund?"
        render={({ field }) => (
          <Form.Textarea
            {...field}
            placeholder="e.g., Worried about insufficient funds, recent special assessment, board disagreements about funding..."
          />
        )}
      />
    </Section>
  );
};
