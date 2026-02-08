"use client";
import React, { useState } from 'react';
import { Menu, Bell, LayoutDashboard, BarChart3, Users} from 'lucide-react';
import { clsx } from 'clsx';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <aside className={clsx(
        "hidden md:flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300",
        isSidebarOpen ? "w-64" : "w-20"
      )}>
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && <span className="text-xl font-bold">Analytics.</span>}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
            <Menu size={20} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active collapsed={!isSidebarOpen} />
          <NavItem icon={<BarChart3 size={20} />} label="Analytics" collapsed={!isSidebarOpen} />
          <NavItem icon={<Users size={20} />} label="Customers" collapsed={!isSidebarOpen} />
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-4 md:px-8">
          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2">
            <Menu size={24} />
          </button>
          
          <div className="flex items-center ml-auto space-x-4">
            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900"></span>
            </button>
            <div className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">JD</div>
              <span className="hidden sm:inline text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false, collapsed = false }: { icon: any, label: string, active?: boolean, collapsed?: boolean }) {
  return (
    <div className={clsx(
      "flex items-center p-3 rounded-lg cursor-pointer transition-colors",
      active ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20" : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500",
      collapsed && "justify-center"
    )}>
      {icon}
      {!collapsed && <span className="ml-3 font-medium">{label}</span>}
    </div>
  );
}