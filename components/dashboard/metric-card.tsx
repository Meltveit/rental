"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DivideIcon as LucideIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  trend?: number;
  className?: string;
  loading?: boolean;
}

export function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
  loading = false,
}: MetricCardProps) {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-7 w-[100px]" />
        ) : (
          <div className="text-2xl font-bold">
            <span className={cn("transition-all", {
              "animate-pulse": animate
            })}>
              {value}
            </span>
          </div>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-1 flex items-center">
            {trend !== undefined && (
              <span
                className={cn(
                  "mr-1 text-xs font-medium",
                  trend > 0
                    ? "text-emerald-500"
                    : trend < 0
                    ? "text-rose-500"
                    : "text-muted-foreground"
                )}
              >
                {trend > 0 ? "↑" : trend < 0 ? "↓" : "→"}
                {Math.abs(trend)}%
              </span>
            )}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}