import { motion } from "motion/react";
import { Mic, Globe } from "lucide-react";
import { EmergencyButton } from "../components/EmergencyButton";
import { ScreenLayout } from "../components/ScreenLayout";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");

  const handleHelpNow = () => {
    navigate("/detection");
  };

  return (
    <ScreenLayout>
      <div className="flex flex-col items-center justify-between min-h-[calc(100vh-120px)]">
        {/* Header */}
        <div className="text-center pt-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white text-3xl font-bold mb-2">
              AI Emergency Help
            </h1>
            <h2 className="text-white text-2xl font-bold">Assistant</h2>
            <p className="text-gray-400 mt-4 text-lg">
              Your life-saving guide in the first 5 minutes
            </p>
          </motion.div>
        </div>

        {/* Main Emergency Button */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative"
          >
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 bg-red-600 rounded-full blur-3xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <button
              onClick={handleHelpNow}
              className="relative w-64 h-64 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white flex flex-col items-center justify-center shadow-2xl shadow-red-900/50 border-4 border-red-400 active:scale-95 transition-transform"
            >
              <span className="text-5xl font-bold">HELP</span>
              <span className="text-5xl font-bold">NOW</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Actions */}
        <div className="w-full space-y-4 pb-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => navigate("/detection")}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl py-5 px-6 flex items-center justify-center gap-3 text-white text-lg hover:bg-gray-700 transition-colors"
            >
              <Mic className="w-7 h-7 text-red-500" />
              <span>Speak your emergency</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-3"
          >
            <button className="flex-1 bg-gray-800 border border-gray-700 rounded-xl py-4 px-4 flex items-center justify-center gap-2 text-white hover:bg-gray-700 transition-colors">
              <Globe className="w-5 h-5" />
              <span>{language}</span>
            </button>
            <button
              onClick={() =>
                setLanguage(
                  language === "English"
                    ? "हिंदी"
                    : language === "हिंदी"
                    ? "తెలుగు"
                    : "English"
                )
              }
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl py-4 px-4 text-white hover:bg-gray-700 transition-colors"
            >
              Switch Language
            </button>
          </motion.div>

          <div className="text-center text-gray-500 text-sm mt-6">
            <p>Tap HELP NOW or speak to start</p>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
}
