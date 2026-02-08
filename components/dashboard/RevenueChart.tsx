"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4500 },
  { name: "Feb", revenue: 5200 },
  { name: "Mar", revenue: 4800 },
  { name: "Apr", revenue: 7000 },
  { name: "May", revenue: 6100 },
  { name: "Jun", revenue: 8200 },
  { name: "Jul", revenue: 9500 },
  { name: "Aug", revenue: 8800 },
  { name: "Sep", revenue: 10200 },
  { name: "Oct", revenue: 11500 },
  { name: "Nov", revenue: 13000 },
  { name: "Dec", revenue: 14200 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-[#1C1E26] p-4 border border-slate-200 dark:border-slate-800 shadow-xl rounded-xl">
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export const RevenueChart = React.memo(() => {
  return (
    <div className="w-full h-full min-h-85">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#94a3b8"
            opacity={0.1}
          />

          <XAxis
            dataKey="name"
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            dy={10}
          />

          <YAxis
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#6366f1",
              strokeWidth: 2,
              strokeDasharray: "5 5",
            }}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorRevenue)"
            activeDot={{ r: 6, strokeWidth: 0, fill: "#6366f1" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
});

RevenueChart.displayName = "RevenueChart";
