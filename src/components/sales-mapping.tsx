import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesMapping() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Sales Mapping by Country
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[200px] w-full">
          {/* World map SVG with colors matching the Figma design */}
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            {/* North America - Orange */}
            <path
              d="M150,120 Q200,80 250,120 Q300,160 280,200 Q260,240 200,220 Q140,200 150,120"
              fill="#f5a623"
              stroke="#e8e8e8"
              strokeWidth="1"
            />

            {/* South America - Red */}
            <path
              d="M220,280 Q260,260 300,280 Q320,340 280,400 Q240,420 200,380 Q180,320 220,280"
              fill="#e74c3c"
              stroke="#e8e8e8"
              strokeWidth="1"
            />

            {/* Europe - Light Gray */}
            <path
              d="M480,120 Q520,100 560,120 Q580,140 560,180 Q520,200 480,180 Q460,150 480,120"
              fill="#d9d9d9"
              stroke="#e8e8e8"
              strokeWidth="1"
            />

            {/* Africa - Light Gray */}
            <path
              d="M480,220 Q520,200 560,220 Q580,280 560,340 Q520,360 480,340 Q460,280 480,220"
              fill="#d9d9d9"
              stroke="#e8e8e8"
              strokeWidth="1"
            />

            {/* Asia - Purple */}
            <path
              d="M600,120 Q680,80 760,120 Q800,180 760,240 Q680,280 600,240 Q560,180 600,120"
              fill="#9b59b6"
              stroke="#e8e8e8"
              strokeWidth="1"
            />

            {/* Australia - Light Gray */}
            <path
              d="M800,300 Q840,280 880,300 Q900,340 880,380 Q840,400 800,380 Q780,340 800,300"
              fill="#d9d9d9"
              stroke="#e8e8e8"
              strokeWidth="1"
            />

            {/* Indonesia - Green */}
            <path
              d="M740,280 Q760,270 780,280 Q790,300 780,320 Q760,330 740,320 Q730,300 740,280"
              fill="#27ae60"
              stroke="#e8e8e8"
              strokeWidth="1"
            />

            {/* Add more detailed country shapes */}
            {/* India */}
            <path
              d="M680,200 Q700,190 720,200 Q730,220 720,240 Q700,250 680,240 Q670,220 680,200"
              fill="#9b59b6"
              stroke="#e8e8e8"
              strokeWidth="1"
            />

            {/* Middle East */}
            <path
              d="M580,180 Q600,170 620,180 Q630,200 620,220 Q600,230 580,220 Q570,200 580,180"
              fill="#d9d9d9"
              stroke="#e8e8e8"
              strokeWidth="1"
            />

            {/* Japan */}
            <path
              d="M800,160 Q810,155 820,160 Q825,170 820,180 Q810,185 800,180 Q795,170 800,160"
              fill="#9b59b6"
              stroke="#e8e8e8"
              strokeWidth="1"
            />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
