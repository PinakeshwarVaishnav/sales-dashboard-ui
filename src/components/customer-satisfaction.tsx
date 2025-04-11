"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CustomerSatisfaction() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
    { name: "Jan", lastMonth: 65, thisMonth: 78 },
    { name: "Feb", lastMonth: 59, thisMonth: 87 },
    { name: "Mar", lastMonth: 80, thisMonth: 70 },
    { name: "Apr", lastMonth: 81, thisMonth: 90 },
    { name: "May", lastMonth: 56, thisMonth: 75 },
    { name: "Jun", lastMonth: 55, thisMonth: 60 },
    { name: "Jul", lastMonth: 40, thisMonth: 80 },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Customer Satisfaction
        </CardTitle>
      </CardHeader>
      <CardContent>
        {mounted && (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="lastMonth"
                stroke="#1890ff"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="thisMonth"
                stroke="#52c41a"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
        <div className="flex justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs">Last Month</span>
            </div>
            <p className="text-lg font-bold mt-1">$3,004</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs">This Month</span>
            </div>
            <p className="text-lg font-bold mt-1">$4,504</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
