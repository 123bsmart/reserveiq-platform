import { Form } from '@/shared/ui';
import { CalculatorFormSection as Section } from './CalculatorFormSection';

export const ReserveStudyUploadSection: React.FC = () => {
  return (
    <Section title="📄 Reserve Study Upload">
      <Form.Field
        name="reserveStudy"
        label="Upload Your Reserve Study"
        text="Optional: Upload your latest reserve study for detailed AI analysis"
        render={({ field }) => <Form.UploadInput {...field} optional />}
      />
    </Section>
  );
}
