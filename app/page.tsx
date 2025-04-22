"use client";

import DashboardLayout from "@/app/dashboard-layout";
import { MetricCard } from "@/components/dashboard/metric-card";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { ActivityList } from "@/components/dashboard/activity-list";
import { ConversionChart } from "@/components/dashboard/conversion-chart";
import { NotificationList } from "@/components/dashboard/notification-list";
import { Users, CreditCard, DollarSign, ArrowUpRight } from "lucide-react";

// Sample data for charts
const analyticsData = [
  { name: "Jan", visits: 4000 },
  { name: "Feb", visits: 3000 },
  { name: "Mar", visits: 5000 },
  { name: "Apr", visits: 4500 },
  { name: "May", visits: 6000 },
  { name: "Jun", visits: 5500 },
  { name: "Jul", visits: 7000 },
  { name: "Aug", visits: 8000 },
  { name: "Sep", visits: 7500 },
  { name: "Oct", visits: 9000 },
  { name: "Nov", visits: 10000 },
  { name: "Dec", visits: 11000 },
];

const conversionData = [
  { name: "Direct", value: 400 },
  { name: "Social", value: 300 },
  { name: "Email", value: 300 },
  { name: "Organic", value: 200 },
  { name: "Referral", value: 100 },
];

const activityData = [
  {
    id: "1",
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://github.com/shadcn.png",
    },
    action: "created a new project",
    target: "Analytics Dashboard",
    date: "Today",
    time: "2:30 PM",
  },
  {
    id: "2",
    user: {
      name: "Sarah Smith",
      email: "sarah@example.com",
      avatar: "https://ui.shadcn.com/avatars/02.png",
    },
    action: "updated a document",
    target: "Q2 Report",
    date: "Today",
    time: "11:45 AM",
  },
  {
    id: "3",
    user: {
      name: "David Wilson",
      email: "david@example.com",
    },
    action: "invited you to",
    target: "Project Collaboration",
    date: "Today",
    time: "9:20 AM",
  },
  {
    id: "4",
    user: {
      name: "Emily Johnson",
      email: "emily@example.com",
      avatar: "https://ui.shadcn.com/avatars/03.png",
    },
    action: "commented on",
    target: "Design Mockups",
    date: "Yesterday",
    time: "4:45 PM",
  },
  {
    id: "5",
    user: {
      name: "Michael Brown",
      email: "michael@example.com",
    },
    action: "completed a task",
    target: "Website Redesign",
    date: "Yesterday",
    time: "2:15 PM",
  },
  {
    id: "6",
    user: {
      name: "Lisa Taylor",
      email: "lisa@example.com",
      avatar: "https://ui.shadcn.com/avatars/04.png",
    },
    action: "updated the status of",
    target: "User Testing",
    date: "Yesterday",
    time: "10:30 AM",
  },
];

const notificationData = [
  {
    id: "1",
    title: "New User Registration",
    description: "A new user registered on your platform.",
    time: "Just now",
    read: false,
    type: "info",
  },
  {
    id: "2",
    title: "Payment Successful",
    description: "Your subscription has been renewed successfully.",
    time: "2 hours ago",
    read: false,
    type: "success",
  },
  {
    id: "3",
    title: "Storage Warning",
    description: "You're using 80% of your storage limit.",
    time: "5 hours ago",
    read: false,
    type: "warning",
  },
  {
    id: "4",
    title: "Failed Login Attempt",
    description: "There was a failed login attempt from a new device.",
    time: "Yesterday",
    read: true,
    type: "error",
  },
  {
    id: "5",
    title: "System Update",
    description: "System update will be performed on June 15th at 3:00 AM.",
    time: "2 days ago",
    read: true,
    type: "info",
  },
];

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Last updated: Today at 10:30 AM</span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Customers"
          value="10,482"
          description="from last month"
          icon={Users}
          trend={12}
        />
        <MetricCard
          title="Active Subscribers"
          value="2,845"
          description="from last month"
          icon={Users}
          trend={8}
        />
        <MetricCard
          title="Monthly Revenue"
          value="$32,580"
          description="from last month"
          icon={DollarSign}
          trend={-3}
        />
        <MetricCard
          title="Average Purchase"
          value="$58.39"
          description="per customer"
          icon={CreditCard}
          trend={5}
        />
      </div>
      
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <AnalyticsChart
          data={analyticsData}
          title="Website Traffic"
          description="Daily unique visitors"
          className="md:col-span-2 lg:col-span-4"
        />
        <ActivityList
          activities={activityData}
          className="md:col-span-2 lg:col-span-3"
        />
      </div>
      
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <ConversionChart
          data={conversionData}
          title="Traffic Sources"
          description="Visitor acquisition channels"
          className="md:col-span-2 lg:col-span-3"
        />
        <NotificationList
          notifications={notificationData}
          className="md:col-span-2 lg:col-span-4"
        />
      </div>
    </DashboardLayout>
  );
}