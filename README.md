# 📊 Admin Analytics Dashboard

A responsive, production-ready analytics dashboard built with **Next.js**, **TypeScript**, and **Zustand**. This project visualizes business metrics using high-performance charts and follows modern frontend best practices for scalability and performance.

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Charts:** Recharts
- **Icons:** Lucide React
- **Animations:** Framer Motion (via MagicUI components)

## ✨ Features

### 1. Interactive Visualizations

- **Revenue Over Time:** An interactive Area Chart with linear gradients for a premium visual feel.
- **User Distribution:** A Donut Chart showing the breakdown of Free, Premium, and Enterprise users.
- **KPI Cards:** Real-time metrics for Revenue, Users, Orders, and Conversion rates with growth indicators.

### 2. Advanced Filtering

- **Date Range Sync:** Global date range filtering (7d, 30d, 12m) that synchronizes data across all components via Zustand.
- **Mock API:** Simulated API latency and error handling to demonstrate UI resilience.

### 3. Production-Ready UI/UX

- **Responsive Shell:** Collapsible sidebar and mobile-optimized navigation.
- **Dark Mode:** Full support for Light and Dark themes with smooth transitions.
- **Performance:** Memoized chart components to prevent unnecessary re-renders during UI interactions.
