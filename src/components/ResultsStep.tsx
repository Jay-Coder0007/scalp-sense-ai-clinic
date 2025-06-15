
import React from "react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RefreshCcw } from "lucide-react";

interface ResultsStepProps {
  onReset: () => void;
}

// Placeholder data - this would come from the Gemini API
const mockResults = {
  summary: "Our analysis suggests your scalp is experiencing dryness and inflammation, likely contributing to hair fall. This can be exacerbated by stress and diet.",
  allopathy: "We recommend a medicated shampoo containing Ketoconazole 2% twice a week. Consider consulting a dermatologist for Minoxidil 5% topical solution if hair fall is significant.",
  homeopathy: "Consider trying Thuja Occidentalis 200C and Wiesbaden 200C. These may help in reducing hair fall and improving scalp health. Consult a qualified homeopath for dosage.",
  ayurveda: "A weekly hair mask with Amla, Brahmi, and Bhringraj powder can nourish the scalp. Regular head massage with warm coconut oil can improve blood circulation. Focus on a Pitta-pacifying diet.",
  lifestyle: "Incorporate stress-reduction techniques like meditation. Ensure a protein-rich diet with leafy greens. Avoid harsh chemical treatments and protect your hair from sun exposure."
};

const ResultsStep: React.FC<ResultsStepProps> = ({ onReset }) => {
  return (
    <GlassCard className="p-8 md:p-10 w-full max-w-3xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Your Personalized Analysis</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">{mockResults.summary}</p>
      </div>

      <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold">Allopathic Recommendations</AccordionTrigger>
          <AccordionContent className="text-base text-gray-600 leading-relaxed">
            {mockResults.allopathy}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-semibold">Homeopathic Suggestions</AccordionTrigger>
          <AccordionContent className="text-base text-gray-600 leading-relaxed">
            {mockResults.homeopathy}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-semibold">Ayurvedic Remedies</AccordionTrigger>
          <AccordionContent className="text-base text-gray-600 leading-relaxed">
            {mockResults.ayurveda}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold">Lifestyle & Diet Tips</AccordionTrigger>
          <AccordionContent className="text-base text-gray-600 leading-relaxed">
            {mockResults.lifestyle}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-10 text-center">
        <Button onClick={onReset} variant="outline" size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <RefreshCcw className="mr-2 h-4 w-4" /> Start New Scan
        </Button>
      </div>
       <p className="text-xs text-gray-500 text-center mt-6">Disclaimer: The information provided is for educational purposes only and is not a substitute for professional medical advice. Always consult with a qualified healthcare provider.</p>
    </GlassCard>
  );
};

export default ResultsStep;
