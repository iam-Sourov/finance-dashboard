"use client";

import React, { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Download, Filter, MoreHorizontal, AlertCircle } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useDashboardStore } from "@/store/useDashboardStore";
import { KPICard } from "@/components/dashboard/KPICard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { UserDistributionChart } from "@/components/dashboard/UserDistributionChart";
import { fetchDashboardData } from "@/lib/api";


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function DashboardPage() {
  const { dateRange, setDateRange } = useDashboardStore();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchDashboardData();
        setData(res);
      } catch (err) {
        setError("Failed to sync dashboard data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [dateRange]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0B0C10] p-4 md:p-8 space-y-8 text-slate-900 dark:text-slate-100 transition-colors duration-300 ">
      <div className="flex flex-col md:flex-row md:items-right items-center justify-between gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight bg-linear-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Monitoring business performance for the {dateRange} period.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <AnimatedThemeToggler />

          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1C1E26] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold hover:shadow-md transition-all active:scale-95">
            <Download size={18} className="text-indigo-500" />
            Export CSV
          </button>

          <div className="flex items-center bg-white dark:bg-[#1C1E26] p-1 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
            {(["7d", "30d", "12m"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={cn(
                  "px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all",
                  dateRange === range
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                    : "text-slate-500 hover:text-indigo-500",
                )}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Error State */}
      {error && (
        <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-2xl text-red-600 dark:text-red-400">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* 3. KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-32 bg-white dark:bg-[#1C1E26] animate-pulse rounded-2xl border border-slate-100 dark:border-slate-800"
                />
              ))
          : data?.kpis.map((kpi: any) => <KPICard key={kpi.id} {...kpi} />)}
      </div>

      {/* 4. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Revenue Chart */}
        <div className="lg:col-span-8 bg-white dark:bg-[#1C1E26] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold">Revenue Performance</h3>
              <p className="text-sm text-slate-500">Gross revenue over time</p>
            </div>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <MoreHorizontal size={20} className="text-slate-400" />
            </button>
          </div>

          <div className="h-85 w-full">
            {loading ? (
              <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl animate-pulse" />
            ) : (
              <RevenueChart />
            )}
          </div>
        </div>

        {/* Distribution Pie Chart */}
        <div className="lg:col-span-4 bg-white dark:bg-[#1C1E26] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">User Segments</h3>
            <Filter size={18} className="text-slate-400" />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {loading ? (
              <div className="h-64 flex items-center justify-center animate-pulse" />
            ) : (
              <UserDistributionChart data={data?.userDistribution || []} />
            )}

            <div className="mt-8 space-y-4">
              {data?.userDistribution?.map((item: any) => (
                <SegmentItem
                  key={item.name}
                  label={item.name}
                  percentage={item.value}
                  color={item.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentItem({
  label,
  percentage,
  color,
}: {
  label: string;
  percentage: number;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between group cursor-default">
      <div className="flex items-center gap-3">
        <div
          className="w-3 h-3 rounded-full shadow-sm group-hover:scale-125 transition-transform"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          {label}
        </span>
      </div>
      <span className="text-sm font-bold tabular-nums bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
        {percentage}%
      </span>
    </div>
  );
}
