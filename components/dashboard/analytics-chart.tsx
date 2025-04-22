"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface AnalyticsChartProps {
  data: any[];
  title: string;
  description?: string;
}

export function AnalyticsChart({ data, title, description }: AnalyticsChartProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [period, setPeriod] = useState("week");
  const [chartData, setChartData] = useState(data);
  
  // Define colors based on theme
  const [colors, setColors] = useState({
    stroke: "#3B82F6",
    fill: "rgba(59, 130, 246, 0.2)",
    grid: "#E5E7EB",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (theme === "dark") {
        setColors({
          stroke: "hsl(var(--chart-1))",
          fill: "hsla(var(--chart-1), 0.2)",
          grid: "hsl(var(--border))",
        });
      } else {
        setColors({
          stroke: "hsl(var(--chart-1))",
          fill: "hsla(var(--chart-1), 0.2)",
          grid: "hsl(var(--border))",
        });
      }
    }
  }, [theme, mounted]);

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border rounded-md shadow-sm">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm text-primary font-medium">
            {payload[0].value} visits
          </p>
        </div>
      );
    }
    return null;
  };

  // Period data filtering
  useEffect(() => {
    if (period === "week") {
      setChartData(data.slice(-7));
    } else if (period === "month") {
      setChartData(data.slice(-30));
    } else {
      setChartData(data);
    }
  }, [period, data]);

  if (!mounted) return null;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          <Tabs defaultValue="week" onValueChange={setPeriod} className="w-[240px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.stroke} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={colors.stroke} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}`} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="visits"
                stroke={colors.stroke}
                fillOpacity={1}
                fill="url(#colorVisits)"
                strokeWidth={2}
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}