"use client";

import {
  ArrowUp,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TodaySales() {
  const salesData = [
    {
      title: "Total Sales",
      value: "$1k",
      change: "+8% from yesterday",
      icon: DollarSign,
      color: "bg-red-100 text-red-500",
    },
    {
      title: "Total Order",
      value: "300",
      change: "+5% from yesterday",
      icon: ShoppingCart,
      color: "bg-yellow-100 text-yellow-500",
    },
    {
      title: "Product Sold",
      value: "5",
      change: "+12% from yesterday",
      icon: Package,
      color: "bg-green-100 text-green-500",
    },
    {
      title: "New Customers",
      value: "8",
      change: "+5.1% from yesterday",
      icon: Users,
      color: "bg-purple-100 text-purple-500",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-bold">Today&apos;s Sales</CardTitle>
          <p className="text-sm text-gray-500">Sales Summary</p>
        </div>
        <Button variant="outline" size="sm">
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {salesData.map((item, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div
                  className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center mb-4`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold">{item.value}</h3>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-xs flex items-center mt-2 text-green-500">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  {item.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
