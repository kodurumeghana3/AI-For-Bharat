import { motion } from "motion/react";
import {
  ChevronLeft,
  User,
  Calendar,
  Clock,
  MapPin,
  Heart,
  Phone,
  Volume2,
  Share2,
} from "lucide-react";
import { ScreenLayout } from "../components/ScreenLayout";
import { EmergencyButton } from "../components/EmergencyButton";
import { useNavigate } from "react-router";

export default function ResponderInfo() {
  const navigate = useNavigate();

  const patientInfo = {
    age: "45 years",
    gender: "Male",
    symptoms: "Chest pain, difficulty breathing, sweating",
    timeOfIncident: "10:06 PM IST",
    location: "Rajiv Gandhi Nagar, Sector 12, Hyderabad",
    knownConditions: "Diabetes, High BP",
    emergencyContact: "+91-9876543210 (Spouse)",
  };

  const handleReadAloud = () => {
    // In a real app, this would use text-to-speech
    alert("Reading info card aloud...");
  };

  const handleShare = () => {
    // In a real app, this would share via SMS/WhatsApp
    alert("Sharing info card with emergency services...");
  };

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
          <h1 className="text-white text-xl font-bold">RESPONDER INFO</h1>
          <button
            onClick={handleShare}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        {/* Info Card Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-t-2xl p-6 -mx-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold">Emergency Case</h2>
              <p className="text-red-100 text-sm">Auto-generated summary</p>
            </div>
          </div>
        </motion.div>

        {/* Info Card Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800/50 border-x border-b border-gray-700 rounded-b-2xl p-6 -mx-6 mb-6"
        >
          <div className="space-y-4">
            <InfoRow
              icon={<User className="w-5 h-5" />}
              label="Patient Details"
              value={`${patientInfo.age} • ${patientInfo.gender}`}
            />

            <InfoRow
              icon={<Heart className="w-5 h-5" />}
              label="Symptoms"
              value={patientInfo.symptoms}
            />

            <InfoRow
              icon={<Clock className="w-5 h-5" />}
              label="Time of Incident"
              value={patientInfo.timeOfIncident}
            />

            <InfoRow
              icon={<MapPin className="w-5 h-5" />}
              label="Location"
              value={patientInfo.location}
            />

            <InfoRow
              icon={<Calendar className="w-5 h-5" />}
              label="Known Conditions"
              value={patientInfo.knownConditions}
            />

            <InfoRow
              icon={<Phone className="w-5 h-5" />}
              label="Emergency Contact"
              value={patientInfo.emergencyContact}
            />
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-600/20 border border-blue-500/50 rounded-xl p-4 mb-6"
        >
          <p className="text-white font-semibold mb-2">
            📋 For Medical Responders:
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Show or read this card to ambulance staff, doctors, or emergency
            responders. It contains all critical information they need to help.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-auto pb-8 space-y-3">
          <EmergencyButton
            variant="success"
            size="large"
            onClick={handleReadAloud}
            icon={<Volume2 className="w-6 h-6" />}
            className="w-full"
          >
            Read This to Responder
          </EmergencyButton>

          <div className="flex gap-3">
            <EmergencyButton
              variant="secondary"
              size="medium"
              onClick={handleShare}
              className="flex-1"
            >
              Share via SMS
            </EmergencyButton>
            <EmergencyButton
              variant="primary"
              size="medium"
              onClick={() => navigate("/emergency-call")}
              icon={<Phone className="w-5 h-5" />}
              className="flex-1"
            >
              Call Help
            </EmergencyButton>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="text-red-400 mt-1">{icon}</div>
      <div className="flex-1">
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <p className="text-white text-base">{value}</p>
      </div>
    </div>
  );
}
