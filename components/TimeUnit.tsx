import { cn } from "@/utils/tailwind-utils";
import { NumberRotation } from "./NumberRotation";

export const TimeUnit = ({
  label,
  value,
  currentFramework,
}: {
  label: string;
  value: number;
  currentFramework: string;
}) => (

  <div className={cn("flex flex-col border-2 max-md:border-0 max-md:p-2 p-4",{
    "border-purple-300": currentFramework === "qwik",
    "border-sky-300": currentFramework === "safari",
    "border-yellow-300": currentFramework === "chrome",
    "border-teal-300": currentFramework === "tailwind",
    "border-blue-300": currentFramework === "react",
    "border-green-300": currentFramework === "vue",
    "border-orange-400": currentFramework === "svelte",
    "border-red-300": currentFramework === "mobile",
    "border-neutral-300": currentFramework === "desktop",
  })}>

<div className="text-white text-5xl font-semibold">
  {typeof value === 'number' ? value : ''}
</div>

    
    <div
      className={cn("text-[8px] font-medium", {
        "text-purple-300": currentFramework === "qwik",
        "text-sky-300": currentFramework === "safari",
        "text-yellow-300": currentFramework === "chrome",
        "text-teal-300": currentFramework === "tailwind",
        "text-blue-300": currentFramework === "react",
        "text-green-300": currentFramework === "vue",
        "text-orange-400": currentFramework === "svelte",
        "text-red-300": currentFramework === "mobile",
        "text-neutral-300": currentFramework === "desktop",
      })}
    >
      <div className="text-[9px]">{label}</div>
    </div>
  </div>
);