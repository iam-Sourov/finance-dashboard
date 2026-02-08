import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface KPICardProps {
  label: string;
  value: string;
  change: number;
  isPositive: boolean;
  isLoading?: boolean;
}

export const KPICard = ({
  label,
  value,
  change,
  isPositive,
  isLoading,
}: KPICardProps) => {
  if (isLoading) {
    return (
      <div className="h-32 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" />
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 transition-hover hover:shadow-md">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <div className="mt-2 flex items-baseline justify-between">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </h3>
        <span
          className={cn(
            "flex items-center text-sm font-medium",
            isPositive ? "text-green-600" : "text-red-600",
          )}
        >
          {isPositive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}
          {Math.abs(change)}%
        </span>
      </div>
    </div>
  );
};
