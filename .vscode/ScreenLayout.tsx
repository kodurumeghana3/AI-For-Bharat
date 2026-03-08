import { ReactNode } from "react";

interface ScreenLayoutProps {
  children: ReactNode;
  showStatusBar?: boolean;
}

export function ScreenLayout({
  children,
  showStatusBar = true,
}: ScreenLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] min-h-screen bg-gray-950 relative overflow-hidden shadow-2xl">
        {showStatusBar && (
          <div className="bg-gray-950 px-6 py-3 flex justify-between items-center text-white text-xs border-b border-gray-800">
            <div>
              <div>Saturday, January 24, 2026</div>
              <div className="text-gray-400">10:06 PM IST</div>
            </div>
            <div className="flex gap-2 items-center">
              <span>4G</span>
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
