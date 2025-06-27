import { cn } from "@/shared/utils";

type CalculatorFormSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const CalculatorFormSection: React.FC<CalculatorFormSectionProps> = ({ title, children, className }) => {
  return (
    <section className={cn('mb-[30px]',className)}>
      <h3 className="text-base sm:text-lg font-semibold text-gray-text border-b border-gray-border-light pb-2 mb-6">
        {title}
      </h3>
      <div className="space-y-6">{children}</div>
    </section>
  );
}
