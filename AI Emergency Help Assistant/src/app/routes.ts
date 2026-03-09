import { createBrowserRouter } from "react-router";
import Home from "./screens/Home";
import EmergencyDetection from "./screens/EmergencyDetection";
import FirstAid from "./screens/FirstAid";
import EmergencyCall from "./screens/EmergencyCall";
import ResponderInfo from "./screens/ResponderInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/detection",
    Component: EmergencyDetection,
  },
  {
    path: "/first-aid",
    Component: FirstAid,
  },
  {
    path: "/emergency-call",
    Component: EmergencyCall,
  },
  {
    path: "/responder-info",
    Component: ResponderInfo,
  },
]);
