import { motion } from "motion/react";
import { ReactNode } from "react";

interface EmergencyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "success" | "warning";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  className?: string;
}

export function EmergencyButton({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  icon,
  className = "",
}: EmergencyButtonProps) {
  const baseClasses =
    "rounded-lg font-bold flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-900/50",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-orange-600 text-white hover:bg-orange-700",
  };

  const sizeClasses = {
    small: "px-6 py-3 text-base min-h-[48px]",
    medium: "px-8 py-4 text-lg min-h-[56px]",
    large: "px-10 py-6 text-xl min-h-[64px]",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      {children}
    </motion.button>
  );
}
