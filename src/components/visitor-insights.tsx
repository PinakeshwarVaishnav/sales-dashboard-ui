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

export default function VisitorInsights() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
    { name: "Jan", loyal: 400, new: 240, unique: 320 },
    { name: "Feb", loyal: 300, new: 280, unique: 290 },
    { name: "Mar", loyal: 350, new: 390, unique: 310 },
    { name: "Apr", loyal: 280, new: 390, unique: 270 },
    { name: "May", loyal: 320, new: 350, unique: 290 },
    { name: "Jun", loyal: 390, new: 320, unique: 340 },
    { name: "Jul", loyal: 420, new: 290, unique: 380 },
    { name: "Aug", loyal: 380, new: 340, unique: 350 },
    { name: "Sep", loyal: 410, new: 370, unique: 320 },
    { name: "Oct", loyal: 370, new: 390, unique: 290 },
    { name: "Nov", loyal: 350, new: 420, unique: 270 },
    { name: "Dec", loyal: 320, new: 380, unique: 310 },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Visitor Insights</CardTitle>
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
                dataKey="loyal"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="new"
                stroke="#ff4d4f"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="unique"
                stroke="#52c41a"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
        <div className="flex justify-center mt-4 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-xs">Loyal Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-xs">New Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs">Unique Customers</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
