"use client";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export default function Tabs({ tabs, activeTab, onTabChange, className = "" }: TabsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={activeTab === tab}
          onClick={() => onTabChange(tab)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 active:opacity-80 ${
            activeTab === tab
              ? "bg-forest text-cream shadow-sm"
              : "bg-stone-dark text-earth hover:bg-stone-darker hover:text-foreground"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
