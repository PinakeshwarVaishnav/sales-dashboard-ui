import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DabangPro() {
  return (
    <Card className="bg-indigo-600 text-white overflow-hidden">
      <CardContent className="p-3">
        <div className="flex flex-col items-center text-center">
          <Sparkles className="h-6 w-6 mb-2" />
          <h3 className="text-xl font-bold mb-1">Dabang Pro</h3>
          <p className="text-sm text-indigo-200 mb-4">
            Get access to all features and unlimited
          </p>
          <Button
            variant="secondary"
            className="bg-white text-indigo-600 hover:bg-indigo-100"
          >
            Get Pro
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
