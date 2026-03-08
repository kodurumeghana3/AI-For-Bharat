import { Volume2 } from "lucide-react";
import { EmergencyButton } from "./EmergencyButton";
import { motion } from "motion/react";

interface StepCardProps {
  stepNumber: number;
  instruction: string;
  onYes?: () => void;
  onNo?: () => void;
  showVoiceButton?: boolean;
}

export function StepCard({
  stepNumber,
  instruction,
  onYes,
  onNo,
  showVoiceButton = true,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
    >
      <div className="text-center mb-8">
        <p className="text-white text-2xl mb-4">
          Step {stepNumber}: {instruction}
        </p>
      </div>

      {(onYes || onNo) && (
        <div className="flex gap-4 justify-center mb-6">
          {onYes && (
            <EmergencyButton
              variant="secondary"
              size="large"
              onClick={onYes}
              className="flex-1 max-w-[160px]"
            >
              [ YES ]
            </EmergencyButton>
          )}
          {onNo && (
            <EmergencyButton
              variant="warning"
              size="large"
              onClick={onNo}
              className="flex-1 max-w-[160px]"
            >
              [ NO ]
            </EmergencyButton>
          )}
        </div>
      )}

      {showVoiceButton && (
        <div className="text-center">
          <button className="text-gray-400 text-sm flex items-center gap-2 mx-auto hover:text-white transition-colors">
            <Volume2 className="w-5 h-5" />
            Play voice instruction
          </button>
        </div>
      )}
    </motion.div>
  );
}
