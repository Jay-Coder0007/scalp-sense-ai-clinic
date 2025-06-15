
import { useState } from "react";
import WelcomeStep from "@/components/WelcomeStep";
import ScanningStep from "@/components/ScanningStep";
import QuestionnaireStep from "@/components/QuestionnaireStep";
import ResultsStep from "@/components/ResultsStep";

type Step = "welcome" | "scanning" | "questionnaire" | "results";

const Index = () => {
  const [step, setStep] = useState<Step>("welcome");
  // This state would eventually hold data from the form and API
  const [analysisData, setAnalysisData] = useState<any>(null);

  const handleStart = () => setStep("scanning");
  const handleScanComplete = () => setStep("questionnaire");
  const handleSubmitQuestionnaire = (data: any) => {
    setAnalysisData(data); // Save user input
    setStep("results");
  };
  const handleReset = () => {
    setAnalysisData(null);
    setStep("welcome");
  };

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return <WelcomeStep onStart={handleStart} />;
      case "scanning":
        return <ScanningStep onScanComplete={handleScanComplete} />;
      case "questionnaire":
        return <QuestionnaireStep onSubmit={handleSubmitQuestionnaire} />;
      case "results":
        return <ResultsStep onReset={handleReset} />;
      default:
        return <WelcomeStep onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      {renderStep()}
    </div>
  );
};

export default Index;
