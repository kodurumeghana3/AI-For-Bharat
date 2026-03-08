import { motion } from "motion/react";

interface VoiceIndicatorProps {
  isListening?: boolean;
}

export function VoiceIndicator({ isListening = true }: VoiceIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className="w-2 bg-white rounded-full"
          animate={
            isListening
              ? {
                  height: [20, 40, 20],
                }
              : { height: 20 }
          }
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
}
