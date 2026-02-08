export const fetchDashboardData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    kpis: [
      {
        id: 1,
        label: "Total Revenue",
        value: "$54,230",
        change: 12.5,
        isPositive: true,
      },
      {
        id: 2,
        label: "Total Users",
        value: "1,245",
        change: -2.1,
        isPositive: false,
      },
      { id: 3, label: "Orders", value: "342", change: 5.4, isPositive: true },
      {
        id: 4,
        label: "Conv. Rate",
        value: "4.3%",
        change: 0.8,
        isPositive: true,
      },
    ],
    userDistribution: [
      { name: "Premium", value: 65, color: "#6366f1" },
      { name: "Free", value: 25, color: "#22d3ee" },
      { name: "Enterprise", value: 10, color: "#a855f7" },
    ],
  };
};
