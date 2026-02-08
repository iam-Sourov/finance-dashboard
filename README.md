# 📊 Admin Analytics Dashboard

**Live Demo:** [https://finance-dashboard-pi-beige.vercel.app/](https://finance-dashboard-pi-beige.vercel.app/)

A responsive, production-ready analytics dashboard built with **Next.js**, **TypeScript**, and **Zustand**. This project visualizes business data using interactive charts and reusable UI components, following real-world frontend practices for scalability and performance.

## 🚀 Tech Stack

- **Framework:** **Next.js (App Router)** - For optimized routing and performance.
- **Language:** **TypeScript** - For strict type safety and code quality.
- **Styling:** **Tailwind CSS** - For rapid, responsive UI development.
- **State Management:** **Zustand** - Lightweight state management for global filters.
- **Charts:** **Recharts** - Composable, responsive charting library.
- **Icons:** **Lucide React** - For consistent, modern iconography.
- **Animations:** **Framer Motion** - For smooth transitions and micro-interactions.

---

## ✨ Key Features

### 1. Interactive Visualizations

- **Revenue Over Time:** Area chart with linear gradients and custom tooltips.
- **User Distribution:** Donut chart showcasing segment breakdowns.
- **KPI Section:** Four summary cards with growth indicators and positive/negative styling.

### 2. Layout & Responsiveness

- **Collapsible Sidebar:** Optimized for desktop and mobile navigation.
- **Responsive Grid:** Charts and cards stack vertically on small screens.
- **Theme Support:** Dark and Light mode toggle using `next-themes`.

### 3. Data Handling

- **Zustand Store:** Syncs data across components when date filters (7d, 30d, 12m) change.
- **API Simulation:** Simulated network latency and error handling to demonstrate UI resilience.

---

## 🏗️ Architecture Decisions

### 1. Component Modularity

The project is structured into **Atomic Components** (UI), **Domain Components** (Dashboard), and **Layout Components** to ensure high reusability and clean folder structure.

### 2. Performance Awareness

- **Memoization:** Utilized `React.memo` on heavy chart components to prevent unnecessary re-renders during sidebar state changes.
- **Skeleton Loaders:** Implemented loading states to improve perceived performance during data fetching.

### 3. Clean Code & Type Safety

Strict TypeScript interfaces are used for all API responses and component props, ensuring the dashboard is robust and easy to maintain.

---

## 🛠️ Setup & Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/analytics-dashboard.git](https://github.com/your-username/analytics-dashboard.git)
    cd analytics-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

---

## 🧠 Assumptions Made

- **Mobile Menu:** Assumed a toggle-based overlay for mobile users to maximize content space.
- **Data Frequency:** Assumed monthly data points for the "Revenue Over Time" chart to provide a clear yearly overview.
- **Admin Role:** Default view is set to "Admin," providing access to all high-level business metrics.

---
