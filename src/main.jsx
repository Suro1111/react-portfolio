import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { createContext } from "react";
import {
  awards,
  education,
  skillsData,
  experience,
  serviceData,
} from "./data/data.js";

export const myContect = createContext();

createRoot(document.getElementById("root")).render(
  <myContect.Provider
    value={{ education, skillsData, awards, experience, serviceData }}
  >
    <App />
  </myContect.Provider>
);
