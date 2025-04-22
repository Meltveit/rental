"use client";

import DashboardLayout from "@/app/dashboard-layout";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Sample data for charts
const pageViewsData = [
  { name: "Jan", views: 4000, users: 2400 },
  { name: "Feb", views: 3000, users: 1398 },
  { name: "Mar", views: 5000, users: 3000 },
  { name: "Apr", views: 4500, users: 2780 },
  { name: "May", views: 6000, users: 3908 },
  { name: "Jun", views: 5500, users: 3800 },
  { name: "Jul", views: 7000, users: 4300 },
  { name: "Aug", views: 8000, users: 4900 },
  { name: "Sep", views: 7500, users: 4600 },
  { name: "Oct", views: 9000, users: 5400 },
  { name: "Nov", views: 10000, users: 6300 },
  { name: "Dec", views: 11000, users: 7100 },
];

const deviceData = [
  { name: "Desktop", value: 58 },
  { name: "Mobile", value: 34 },
  { name: "Tablet", value: 8 },
];

const topPages = [
  { page: "/", views: 12453, change: "+12%" },
  { page: "/products", views: 8732, change: "+8%" },
  { page: "/blog", views: 6423, change: "+5%" },
  { page: "/contact", views: 4738, change: "-2%" },
  { page: "/about", views: 3842, change: "+15%" },
];

const bounceRatesData = [
  { name: "Home", rate: 32 },
  { name: "Products", rate: 45 },
  { name: "Blog", rate: 28 },
  { name: "Contact", rate: 52 },
  { name: "About", rate: 38 },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <Badge variant="outline" className="text-xs font-normal">
          Real-time
        </Badge>
      </div>
      
      <Tabs defaultValue="overview" className="mb-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Page Views
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4M</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-emerald-500 font-medium">↑ 12%</span> from last month
                </p>
                <div className="h-[80px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pageViewsData.slice(-6)} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Bar dataKey="views" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Unique Visitors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2M</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-emerald-500 font-medium">↑ 8%</span> from last month
                </p>
                <div className="h-[80px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pageViewsData.slice(-6)} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Bar dataKey="users" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Session Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4m 12s</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-rose-500 font-medium">↓ 3%</span> from last month
                </p>
                <div className="h-[80px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bounceRatesData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Bar dataKey="rate" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Page Views & Unique Visitors</CardTitle>
                <CardDescription>Comparing views vs visitors over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pageViewsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <Legend />
                      <Bar dataKey="views" fill="hsl(var(--chart-1))" name="Page Views" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="users" fill="hsl(var(--chart-2))" name="Unique Visitors" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most viewed pages on your site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPages.map((page, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{page.page}</p>
                        <p className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</p>
                      </div>
                      <Badge variant={page.change.startsWith("+") ? "outline" : "destructive"} className="text-xs">
                        {page.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Bounce Rates</CardTitle>
                <CardDescription>Percentage of visitors who navigate away after viewing only one page</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bounceRatesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.5rem",
                        }}
                        formatter={(value: number) => [`${value}%`, "Bounce Rate"]}
                      />
                      <Bar dataKey="rate" fill="hsl(var(--chart-4))" name="Bounce Rate" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>Visitors by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center h-[300px]">
                  <div className="grid grid-cols-3 gap-8 w-full max-w-xl">
                    {deviceData.map((device, i) => (
                      <div key={i} className="flex flex-col items-center justify-center space-y-2">
                        <div className="relative w-full pt-[100%]">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-24 h-24">
                              <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                  background: `conic-gradient(hsl(var(--chart-${i + 1})) ${device.value}%, transparent 0)`,
                                }}
                              />
                              <div className="absolute inset-[15%] rounded-full bg-background flex items-center justify-center">
                                <span className="text-xl font-semibold">{device.value}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="text-sm font-medium">{device.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}