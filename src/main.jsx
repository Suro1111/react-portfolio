import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { createContext } from "react";
import {
  awards,
  education,
  skillsData,
  experience,
  serviceData,
  portfolioData,
  clientData,
  footerData,
} from "./data/data.js";

export const myContect = createContext();

createRoot(document.getElementById("root")).render(
  <myContect.Provider
    value={{
      education,
      skillsData,
      awards,
      experience,
      serviceData,
      portfolioData,
      clientData,
      footerData,
    }}
  >
    <App />
  </myContect.Provider>
);
