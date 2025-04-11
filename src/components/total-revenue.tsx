"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TotalRevenue() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
    { name: "Monday", online: 12, offline: 10 },
    { name: "Tuesday", online: 15, offline: 12 },
    { name: "Wednesday", online: 5, offline: 25 },
    { name: "Thursday", online: 10, offline: 8 },
    { name: "Friday", online: 12, offline: 10 },
    { name: "Saturday", online: 15, offline: 12 },
    { name: "Sunday", online: 8, offline: 10 },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        {mounted && (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar
                dataKey="online"
                fill="#1890ff"
                name="Online Sales"
                barSize={20}
              />
              <Bar
                dataKey="offline"
                fill="#52c41a"
                name="Offline Sales"
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
        <div className="flex justify-center mt-4 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs">Online Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs">Offline Sales</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
