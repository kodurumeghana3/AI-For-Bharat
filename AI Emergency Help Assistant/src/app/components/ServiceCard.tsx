import { Phone, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

interface ServiceCardProps {
  name: string;
  distance: string;
  type: "hospital" | "ambulance" | "clinic";
  phoneNumber?: string;
  estimatedTime?: string;
}

export function ServiceCard({
  name,
  distance,
  type,
  phoneNumber,
  estimatedTime,
}: ServiceCardProps) {
  const typeColors = {
    hospital: "bg-blue-600/20 border-blue-500/50",
    ambulance: "bg-red-600/20 border-red-500/50",
    clinic: "bg-green-600/20 border-green-500/50",
  };

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className={`rounded-xl p-5 border ${typeColors[type]} backdrop-blur-sm`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{distance}</span>
          </div>
        </div>
        {phoneNumber && (
          <a
            href={`tel:${phoneNumber}`}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
        )}
      </div>
      {estimatedTime && (
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Clock className="w-4 h-4" />
          <span>~{estimatedTime} arrival</span>
        </div>
      )}
    </motion.div>
  );
}
