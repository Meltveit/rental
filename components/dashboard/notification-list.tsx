"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bell, CheckCheck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: "info" | "warning" | "success" | "error";
}

interface NotificationListProps {
  notifications: Notification[];
}

export function NotificationList({ notifications }: NotificationListProps) {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Notifications</CardTitle>
            {unread > 0 && (
              <Badge variant="secondary" className="rounded-full px-2 py-0 text-xs font-semibold">
                {unread}
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" className="h-8 text-xs">
            <CheckCheck className="mr-2 h-3.5 w-3.5" />
            Mark all read
          </Button>
        </div>
        <CardDescription>Stay updated with system notifications</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        <ScrollArea className="h-[280px]">
          <div className="space-y-0.5">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "flex items-start space-x-4 p-4 transition-colors hover:bg-muted",
                  !notification.read && "bg-muted/50"
                )}
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className={cn(
                      "text-sm font-medium",
                      !notification.read && "font-semibold"
                    )}>
                      {notification.title}
                    </p>
                    <div className="flex items-center">
                      <Badge
                        variant="outline"
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-medium",
                          notification.type === "info" && "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400",
                          notification.type === "warning" && "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-400",
                          notification.type === "success" && "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-400",
                          notification.type === "error" && "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400"
                        )}
                      >
                        {notification.type}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {notification.description}
                  </p>
                  <div className="flex items-center pt-1.5 text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {notification.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <Separator />
      <CardFooter>
        <Button variant="ghost" className="h-8 w-full text-xs" size="sm">
          View all notifications
        </Button>
      </CardFooter>
    </Card>
  );
}