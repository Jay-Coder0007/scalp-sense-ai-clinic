
import React, { useEffect } from "react";
import GlassCard from "./GlassCard";

interface ScanningStepProps {
  onScanComplete: () => void;
}

const ScanningStep: React.FC<ScanningStepProps> = ({ onScanComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onScanComplete();
    }, 4000); // Simulate 4s scan
    return () => clearTimeout(timer);
  }, [onScanComplete]);

  return (
    <GlassCard className="p-8 md:p-12 text-center flex flex-col items-center justify-center">
      <div className="relative w-40 h-40 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping"></div>
        <div className="absolute inset-2 bg-blue-200 rounded-full animate-ping delay-200"></div>
        <div className="relative w-32 h-32 bg-white rounded-full shadow-inner flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scan-face text-primary"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s-1 2-3 2-3-2-3-2"/><path d="M9 12c0-1.5 1-3 3-3s3 1.5 3 3"/><path d="M14 14s1 2 3 2 3-2 3-2"/></svg>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Analyzing Scalp...</h2>
      <p className="text-gray-600 mt-2">Please wait while our AI performs a detailed analysis.</p>
    </GlassCard>
  );
};

export default ScanningStep;
