import { motion } from "motion/react";
import { Mic, Camera, Flame, Phone } from "lucide-react";
import { ScreenLayout } from "../components/ScreenLayout";
import { VoiceIndicator } from "../components/VoiceIndicator";
import { EmergencyButton } from "../components/EmergencyButton";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function EmergencyDetection() {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(true);
  const [detectedType, setDetectedType] = useState<string | null>(null);

  useEffect(() => {
    // Simulate emergency detection after 2 seconds
    const timer = setTimeout(() => {
      setDetectedType("Medical");
      setIsListening(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleEmergencyType = (type: string) => {
    if (type === "Medical") {
      navigate("/first-aid");
    } else if (type === "Call") {
      navigate("/emergency-call");
    }
  };

  return (
    <ScreenLayout>
      <div className="flex flex-col items-center justify-between min-h-[calc(100vh-120px)]">
        {/* Header */}
        <div className="text-center pt-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl font-bold mb-4"
          >
            {detectedType ? "EMERGENCY MODE" : "PANIC MODE"}
          </motion.h1>

          {detectedType && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-600/20 border border-red-500/50 rounded-xl p-4 mb-4"
            >
              <p className="text-white text-lg mb-2">
                Emergency detected: <strong>{detectedType}</strong>
              </p>
              <p className="text-green-400 text-base">
                ✓ Stay calm. I will guide you.
              </p>
            </motion.div>
          )}
        </div>

        {/* Main Microphone Circle */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 bg-red-600 rounded-full blur-3xl"
              animate={{
                scale: isListening ? [1, 1.3, 1] : 1,
                opacity: isListening ? [0.4, 0.6, 0.4] : 0.3,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Main circle */}
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-red-600 to-red-800 border-4 border-red-400 flex flex-col items-center justify-center shadow-2xl">
              <Mic className="w-20 h-20 text-white mb-4" />
              {isListening && (
                <div className="mt-4">
                  <VoiceIndicator isListening={isListening} />
                </div>
              )}
            </div>

            {/* Quick action buttons around the circle */}
            <motion.button
              initial={{ scale: 0, x: -100 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 bg-gray-800 border border-gray-600 rounded-xl p-4 hover:bg-gray-700 transition-colors"
            >
              <Camera className="w-8 h-8 text-white" />
              <p className="text-white text-xs mt-1">Camera Feed</p>
            </motion.button>

            <motion.button
              initial={{ scale: 0, x: 100 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 bg-gray-800 border border-gray-600 rounded-xl p-4 hover:bg-gray-700 transition-colors"
            >
              <Flame className="w-8 h-8 text-orange-500" />
              <p className="text-white text-xs mt-1">Fire Safety</p>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="w-full space-y-4 pb-8">
          {detectedType ? (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-3"
            >
              <EmergencyButton
                variant="secondary"
                size="large"
                onClick={() => handleEmergencyType("Medical")}
                className="w-full"
              >
                Medical Emergency
              </EmergencyButton>
              <EmergencyButton
                variant="warning"
                size="large"
                onClick={() => handleEmergencyType("Accident")}
                className="w-full"
              >
                Accident
              </EmergencyButton>
              <EmergencyButton
                variant="warning"
                size="large"
                onClick={() => handleEmergencyType("Threat")}
                className="w-full bg-yellow-600 hover:bg-yellow-700"
              >
                Danger / Threat
              </EmergencyButton>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <p className="text-white text-xl mb-4">
                <span className="text-red-400 font-bold">SPEAK NOW</span> –<br />
                What happened?
              </p>
              <p className="text-gray-400 text-sm">
                (Voice continues automatically)
              </p>
            </motion.div>
          )}

          <EmergencyButton
            variant="primary"
            size="large"
            onClick={() => navigate("/emergency-call")}
            icon={<Phone className="w-6 h-6" />}
            className="w-full mt-6"
          >
            CALL EMERGENCY
          </EmergencyButton>
        </div>
      </div>
    </ScreenLayout>
  );
}
