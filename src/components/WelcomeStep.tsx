
import React from "react";
import { Button } from "@/components/ui/button";
import { ScanLine } from "lucide-react";
import GlassCard from "./GlassCard";

interface WelcomeStepProps {
  onStart: () => void;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ onStart }) => {
  return (
    <GlassCard className="p-8 md:p-12 text-center flex flex-col items-center">
      <div className="mb-6 bg-primary/10 p-4 rounded-full">
        <ScanLine className="w-10 h-10 text-primary" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        AI Scalp Analysis
      </h1>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        Get a personalized analysis of your scalp health and discover solutions from Ayurveda, Allopathy, and Homeopathy.
      </p>
      <Button onClick={onStart} size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        Start Scan
      </Button>
    </GlassCard>
  );
};

export default WelcomeStep;
