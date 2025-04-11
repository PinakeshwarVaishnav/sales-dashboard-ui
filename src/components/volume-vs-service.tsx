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

export default function VolumeVsService() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = [
    { name: "Jan", volume: 100, service: 80 },
    { name: "Feb", volume: 120, service: 90 },
    { name: "Mar", volume: 90, service: 70 },
    { name: "Apr", volume: 110, service: 85 },
    { name: "May", volume: 80, service: 65 },
    { name: "Jun", volume: 70, service: 60 },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Volume vs Service Level
        </CardTitle>
      </CardHeader>
      <CardContent>
        {mounted && (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="volume" fill="#1890ff" name="Volume" barSize={20} />
              <Bar
                dataKey="service"
                fill="#52c41a"
                name="Service"
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
        <div className="flex justify-between mt-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs">Volume</span>
            </div>
            <p className="text-lg font-bold">1,135</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs">Services</span>
            </div>
            <p className="text-lg font-bold">635</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
