import { motion } from "motion/react";
import { ChevronLeft, Phone } from "lucide-react";
import { ScreenLayout } from "../components/ScreenLayout";
import { StepCard } from "../components/StepCard";
import { EmergencyButton } from "../components/EmergencyButton";
import { useNavigate } from "react-router";
import { useState } from "react";

const firstAidSteps = [
  {
    id: 1,
    instruction: "Check if the person is conscious",
    hasYesNo: true,
  },
  {
    id: 2,
    instruction: "Check breathing - Look, Listen, Feel",
    hasYesNo: true,
  },
  {
    id: 3,
    instruction: "Place them in recovery position on their side",
    hasYesNo: false,
  },
  {
    id: 4,
    instruction: "Keep airway clear - tilt head back gently",
    hasYesNo: false,
  },
];

export default function FirstAid() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < firstAidSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/emergency-call");
    }
  };

  const handleYes = () => {
    handleNext();
  };

  const handleNo = () => {
    // In a real app, this would branch to different instructions
    handleNext();
  };

  const step = firstAidSteps[currentStep];

  return (
    <ScreenLayout>
      <div className="flex flex-col min-h-[calc(100vh-120px)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <h1 className="text-white text-3xl font-bold">FIRST AID</h1>
          <div className="w-8" />
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex gap-2 mb-2">
            {firstAidSteps.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-2 rounded-full ${
                  index <= currentStep ? "bg-green-500" : "bg-gray-700"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center">
            Step {currentStep + 1} of {firstAidSteps.length}
          </p>
        </div>

        {/* Current Step */}
        <div className="flex-1 flex flex-col justify-center">
          <StepCard
            stepNumber={currentStep + 1}
            instruction={step.instruction}
            onYes={step.hasYesNo ? handleYes : undefined}
            onNo={step.hasYesNo ? handleNo : undefined}
            showVoiceButton={true}
          />

          {!step.hasYesNo && (
            <div className="mt-6 text-center">
              <EmergencyButton
                variant="success"
                size="large"
                onClick={handleNext}
                className="w-full"
              >
                {currentStep === firstAidSteps.length - 1
                  ? "Complete & Call Help"
                  : "Next Step"}
              </EmergencyButton>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="space-y-4 pb-8 mt-8">
          <p className="text-center text-gray-400 text-sm mb-4">
            (Voice continues automatically)
          </p>

          <div className="flex gap-3">
            <EmergencyButton
              variant="primary"
              size="medium"
              onClick={() => navigate("/emergency-call")}
              icon={<Phone className="w-5 h-5" />}
              className="flex-1"
            >
              Call Now
            </EmergencyButton>
            <EmergencyButton
              variant="secondary"
              size="medium"
              onClick={() => navigate("/responder-info")}
              className="flex-1"
            >
              Info Card
            </EmergencyButton>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
}
