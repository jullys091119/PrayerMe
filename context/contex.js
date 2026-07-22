import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable } from "react-native";
import {
  Smile,
  Frown,
  Angry,
  CloudLightning,
  Heart,
  Sparkles,
  HelpCircle,
  BatteryLow,
  Sun,
  TriangleAlert,
  CircleHelp
} from "lucide-react-native";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const currentPrayer = [
    {
      id: 1,
      prayer:
        "Jehová ayúdame a tener más autodominio la próxima vez que venga la tentación",
      answered: false,
      feeling: "Feliz",
      name: "Feliz",
      icon: Smile
    },
  ];

  const icons = {
    Smile,
    Frown,
    Angry,
    CloudLightning,
    Heart,
    Sparkles,
    HelpCircle,
    BatteryLow,
    Sun,
    TriangleAlert,
  };

  const feelings = [
    {
      id: 1,
      name: "Feliz",
      icon: Smile,
      color: "#FACC15",
    },
    {
      id: 2,
      name: "Triste",
      icon: Frown,
      color: "#3B82F6",
    },
    {
      id: 3,
      name: "Enojado",
      icon: Angry,
      color: "#EF4444",
    },
    {
      id: 4,
      name: "Ansioso",
      icon: CloudLightning,
      color: "#8B5CF6",
    },
    {
      id: 5,
      name: "Agradecido",
      icon: Heart,
      color: "#EC4899",
    },
    {
      id: 6,
      name: "En paz",
      icon: Sparkles,
      color: "#14B8A6",
    },
    {
      id: 7,
      name: "Confundido",
      icon: CircleHelp,
      color: "#F97316",
    },
    {
      id: 8,
      name: "Cansado",
      icon: BatteryLow,
      color: "#64748B",
    },
    {
      id: 9,
      name: "Esperanzado",
      icon: Sun,
      color: "#EAB308",
    },
    {
      id: 10,
      name: "Preocupado",
      icon: TriangleAlert,
      color: "#DC2626",
    },
  ];

  const [portal, setPortal] = useState(false);
  const [prayer, setPrayer] = useState(currentPrayer);

  return (
    <AppContext.Provider
      value={{ setPrayer, setPortal, portal, prayer, setPrayer, feelings,icons }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
