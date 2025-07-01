import { Form } from "@/shared/ui";
import { CalculatorFormSection as Section } from "./CalculatorFormSection";


export const ContactInformationSection: React.FC = () => {
  return (
    <Section title="📞 Contact Information">
      <Form.Row>
        <Form.Field
          name="firstName"
          label="First Name"
          render={({ field }) => <Form.Input {...field} />}
          required
        />
        <Form.Field
          name="lastName"
          label="Last Name"
          render={({ field }) => <Form.Input {...field} />}
          required
        />
      </Form.Row>

      <Form.Row>
        <Form.Field
          name="email"
          label="Email Address"
          render={({ field }) => <Form.Input type="email" {...field} />}
          required
        />
        <Form.Field
          name="phoneNumber"
          label="Phone Number"
          render={({ field }) => <Form.Input type="tel" {...field} />}
        />
      </Form.Row>

      <Form.Field
        name="role"
        label="Your Role"
        required
        render={({ field }) => (
          <Form.Select {...field}>
            <option value="">Select your role</option>
            <option value="board-president">Board President</option>
            <option value="board-member">Board Member</option>
            <option value="property-manager">Property Manager</option>
            <option value="owner">Unit Owner</option>
            <option value="treasurer">Treasurer</option>
            <option value="other">Other</option>
          </Form.Select>
        )}
      />
    </Section>
  );
}
