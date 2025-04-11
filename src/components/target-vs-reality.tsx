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

export default function TargetVsReality() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
    { name: "Jan", target: 4000, reality: 3000 },
    { name: "Feb", target: 3000, reality: 3500 },
    { name: "Mar", target: 2000, reality: 3000 },
    { name: "Apr", target: 2780, reality: 3500 },
    { name: "May", target: 4000, reality: 3000 },
    { name: "Jun", target: 3000, reality: 4000 },
    { name: "Jul", target: 3500, reality: 4500 },
    { name: "Aug", target: 4000, reality: 5000 },
    { name: "Sep", target: 3000, reality: 4000 },
    { name: "Oct", target: 4000, reality: 5000 },
    { name: "Nov", target: 5000, reality: 4500 },
    { name: "Dec", target: 4500, reality: 5500 },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Target vs Reality</CardTitle>
      </CardHeader>
      <CardContent>
        {mounted && (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="target" fill="#faad14" name="Target" barSize={10} />
              <Bar
                dataKey="reality"
                fill="#52c41a"
                name="Reality"
                barSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
        <div className="flex justify-between mt-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs">Reality Sales</span>
            </div>
            <p className="text-lg font-bold">8,823</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-xs">Target Sales</span>
            </div>
            <p className="text-lg font-bold">12,122</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
