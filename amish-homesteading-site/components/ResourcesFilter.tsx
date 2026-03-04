"use client";

import { useState } from "react";
import Tabs from "@/components/Tabs";
import { ResourceCard } from "@/components/Card";

type ResourceType = "video" | "article" | "download" | "audio";

interface Resource {
  title: string;
  category: string;
  description: string;
  type: ResourceType;
  tab: string;
}

const resources: Resource[] = [
  {
    title: "Getting Your Soil Ready for Spring Planting",
    category: "Farming",
    description:
      "A step-by-step walkthrough of soil testing, amendment, and bed preparation for a productive growing season.",
    type: "video",
    tab: "Videos",
  },
  {
    title: "The Heritage Harvest Sourdough Guide",
    category: "Homemaking",
    description:
      "Our complete guide to maintaining a sourdough starter, troubleshooting common problems, and baking your best loaf.",
    type: "download",
    tab: "Downloads",
  },
  {
    title: "Why Traditional Skills Still Matter",
    category: "Faith & Life",
    description:
      "A reflection from our founder on the spiritual dimensions of working with your hands and returning to simplicity.",
    type: "article",
    tab: "Articles",
  },
  {
    title: "Hand Tool Sharpening Basics",
    category: "Construction",
    description:
      "Learn to sharpen chisels, plane blades, and hand saws using traditional methods and simple equipment.",
    type: "video",
    tab: "Videos",
  },
  {
    title: "Seasonal Preservation Calendar",
    category: "Food Preservation",
    description:
      "A month-by-month guide to what to preserve, when to preserve it, and which method works best for each crop.",
    type: "download",
    tab: "Downloads",
  },
  {
    title: "Faith on the Farm: A Devotional Series",
    category: "Faith & Life",
    description:
      "Eight short audio devotionals recorded on the homestead, exploring scripture through the lens of agrarian life.",
    type: "audio",
    tab: "Audio",
  },
  {
    title: "From Amish to Adventist: Our Family's Story",
    category: "Our Story",
    description:
      "A long-form article exploring the Miller family's spiritual and practical journey from the Amish church to Adventism.",
    type: "article",
    tab: "Articles",
  },
  {
    title: "Quilting Patterns for Beginners",
    category: "Textile Arts",
    description:
      "Six traditional quilt block patterns with cutting guides and assembly instructions for hand-sewing beginners.",
    type: "download",
    tab: "Downloads",
  },
  {
    title: "Introduction to Lacto-Fermentation",
    category: "Food Preservation",
    description:
      "Everything you need to know to safely ferment vegetables at home, from salt ratios to troubleshooting.",
    type: "video",
    tab: "Videos",
  },
  {
    title: "Sabbath Rest and the Working Homestead",
    category: "Faith & Life",
    description:
      "How our family honors the Sabbath while running a working farm, and why the rest makes the work better.",
    type: "article",
    tab: "Articles",
  },
  {
    title: "Heritage Harvest Podcast – Episode 1",
    category: "Farming",
    description:
      "Our inaugural episode: what brought us to this land, what we hope to build, and why we believe homesteading is a calling.",
    type: "audio",
    tab: "Audio",
  },
  {
    title: "Seed Saving Reference Sheet",
    category: "Farming",
    description:
      "A laminated-ready quick reference for saving seeds from 24 common garden vegetables, with isolation distances.",
    type: "download",
    tab: "Downloads",
  },
];

const tabs = ["All", "Videos", "Articles", "Downloads", "Audio"];

export default function ResourcesFilter() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All" ? resources : resources.filter((r) => r.tab === activeTab);

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} className="mb-8" />
      <div
        key={activeTab}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((resource) => (
          <ResourceCard
            key={resource.title}
            title={resource.title}
            category={resource.category}
            description={resource.description}
            type={resource.type}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-12 text-center text-earth">
          No resources in this category yet. Check back soon.
        </p>
      )}
    </div>
  );
}
