import { motion } from "motion/react";
import { ChevronLeft, Phone, MapPin, Navigation } from "lucide-react";
import { ScreenLayout } from "../components/ScreenLayout";
import { ServiceCard } from "../components/ServiceCard";
import { EmergencyButton } from "../components/EmergencyButton";
import { useNavigate } from "react-router";

export default function EmergencyCall() {
  const navigate = useNavigate();

  const emergencyServices = [
    {
      name: "Govt Hospital - Emergency Ward",
      distance: "2.3 km",
      type: "hospital" as const,
      phoneNumber: "108",
      estimatedTime: "8 min",
    },
    {
      name: "Private Clinic - Dr. Kumar",
      distance: "3.1 km",
      type: "clinic" as const,
      phoneNumber: "+91-9876543210",
      estimatedTime: "12 min",
    },
    {
      name: "Ambulance Service - 108",
      distance: "1.8 km",
      type: "ambulance" as const,
      phoneNumber: "108",
      estimatedTime: "6 min",
    },
  ];

  return (
    <ScreenLayout>
      <div className="flex flex-col min-h-[calc(100vh-120px)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <h1 className="text-white text-2xl font-bold">EMERGENCY CALL</h1>
          <div className="w-8" />
        </div>

        {/* Location info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-600/20 border border-blue-500/50 rounded-xl p-4 mb-6"
        >
          <div className="flex items-center gap-2 text-white mb-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="font-semibold">Current Location</span>
          </div>
          <p className="text-gray-300 text-sm">
            Rajiv Gandhi Nagar, Sector 12, Hyderabad
          </p>
          <button className="text-blue-400 text-sm mt-2 flex items-center gap-1 hover:text-blue-300 transition-colors">
            <Navigation className="w-4 h-4" />
            Share location with responders
          </button>
        </motion.div>

        {/* Nearest Help Section */}
        <div className="mb-6">
          <h2 className="text-white text-xl font-semibold mb-4">
            Nearest Help:
          </h2>
          <div className="space-y-3">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emergency Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 mb-6"
        >
          <h3 className="text-white font-semibold mb-3">Quick Dial</h3>
          <div className="grid grid-cols-3 gap-3">
            <a
              href="tel:108"
              className="bg-red-600 hover:bg-red-700 text-white rounded-lg py-3 text-center transition-colors"
            >
              <div className="text-lg font-bold">108</div>
              <div className="text-xs">Ambulance</div>
            </a>
            <a
              href="tel:102"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-center transition-colors"
            >
              <div className="text-lg font-bold">102</div>
              <div className="text-xs">Hospital</div>
            </a>
            <a
              href="tel:100"
              className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg py-3 text-center transition-colors"
            >
              <div className="text-lg font-bold">100</div>
              <div className="text-xs">Police</div>
            </a>
          </div>
        </motion.div>

        {/* Main Call Button */}
        <div className="mt-auto pb-8 space-y-4">
          <EmergencyButton
            variant="primary"
            size="large"
            onClick={() => (window.location.href = "tel:108")}
            icon={<Phone className="w-7 h-7" />}
            className="w-full"
          >
            [ CALL NOW ]
          </EmergencyButton>

          <EmergencyButton
            variant="secondary"
            size="medium"
            onClick={() => navigate("/responder-info")}
            className="w-full"
          >
            View Info Card for Responder
          </EmergencyButton>
        </div>
      </div>
    </ScreenLayout>
  );
}
