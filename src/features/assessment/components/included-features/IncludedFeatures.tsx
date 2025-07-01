import { twMerge } from "tailwind-merge";

type IncludedFeaturesProps = {
    features: Array<string>
    title: string;
    className?: string;
    alignment?: "start" | "center" | "end";
} 


export const IncludedFeatures: React.FC<IncludedFeaturesProps> = ({features, title, className, alignment = 'start'}) => {
  return (
    <div className={twMerge("bg-green-bg border border-green-border rounded-lg p-5 space-y-2 text-sm text-green-text mt-8 mb-5", className, `text-${alignment}`)}>
      <h4 className="font-bold text-green-title text-base mb-2">{title}</h4>
      <ul className={twMerge("list-disc pl-5 flex flex-col gap-y-[5px]", `items-${alignment}`)}>
        {features.map((item) => (
          <li key={item} className="text-base/[1.2] w-fit">{item}</li>
        ))}
      </ul>
    </div>
  );
}
