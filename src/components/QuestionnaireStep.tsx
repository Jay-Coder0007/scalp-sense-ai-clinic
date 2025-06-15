
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import GlassCard from "./GlassCard";
import { MoveRight } from "lucide-react";

interface QuestionnaireStepProps {
  onSubmit: (data: any) => void;
}

const habits = [
  { id: "stress", label: "High Stress Levels" },
  { id: "diet", label: "Poor Diet / Irregular Meals" },
  { id: "styling", label: "Frequent use of heat styling" },
  { id: "chemical", label: "Use of chemical treatments" },
  { id: "sleep", label: "Lack of adequate sleep" },
];

const QuestionnaireStep: React.FC<QuestionnaireStepProps> = ({ onSubmit }) => {
  const [symptoms, setSymptoms] = useState("");
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);

  const handleHabitChange = (habitId: string) => {
    setSelectedHabits((prev) =>
      prev.includes(habitId)
        ? prev.filter((id) => id !== habitId)
        : [...prev, habitId]
    );
  };

  const handleSubmit = () => {
    // In a real app, you would pass this data to your Gemini API call
    console.log({ symptoms, habits: selectedHabits });
    onSubmit({ symptoms, habits: selectedHabits });
  };

  return (
    <GlassCard className="p-8 md:p-10 w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Initial Analysis Complete
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Help us refine your results. Please provide more details.
      </p>

      <div className="space-y-6">
        <div>
          <Label htmlFor="symptoms" className="text-lg font-semibold text-gray-700">
            Describe your hair & scalp concerns
          </Label>
          <Textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="e.g., 'I have an itchy scalp and notice more hair falling out in the shower...'"
            className="mt-2 min-h-[120px] bg-white/50"
          />
        </div>

        <div>
          <Label className="text-lg font-semibold text-gray-700">
            Select any relevant habits
          </Label>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {habits.map((habit) => (
              <div key={habit.id} className="flex items-center space-x-3 p-3 bg-white/30 rounded-lg">
                <Checkbox
                  id={habit.id}
                  onCheckedChange={() => handleHabitChange(habit.id)}
                />
                <Label htmlFor={habit.id} className="text-sm font-medium text-gray-700 leading-none cursor-pointer">
                  {habit.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button onClick={handleSubmit} size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          Get My Personalized Results <MoveRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </GlassCard>
  );
};

export default QuestionnaireStep;
