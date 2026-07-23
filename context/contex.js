import React, { createContext, useEffect, useState } from "react";
import { setPrayerSql, insertDataSql, getDataSql } from "@/sql";

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
  CircleHelp,
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
      icon: Smile,
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
      iconName: "Smile",
      icon: Smile,
      color: "#FACC15",
    },
    {
      id: 2,
      name: "Triste",
      iconName: "Frown",
      icon: Frown,
      color: "#3B82F6",
    },
    {
      id: 3,
      name: "Enojado",
      iconName: "Angry",
      icon: Angry,
      color: "#EF4444",
    },
    {
      id: 4,
      name: "Ansioso",
      iconName: "CloudLightning",
      icon: CloudLightning,
      color: "#8B5CF6",
    },
    {
      id: 5,
      name: "Agradecido",
      iconName: "Heart",
      icon: Heart,
      color: "#EC4899",
    },
    {
      id: 6,
      name: "En paz",
      iconName: "Sparkles",
      icon: Sparkles,
      color: "#14B8A6",
    },
    {
      id: 7,
      name: "Confundido",
      iconName: "CircleHelp",
      icon: CircleHelp,
      color: "#F97316",
    },
    {
      id: 8,
      name: "Cansado",
      iconName: "BatteryLow",
      icon: BatteryLow,
      color: "#64748B",
    },
    {
      id: 9,
      name: "Esperanzado",
      iconName: "Sun",
      icon: Sun,
      color: "#EAB308",
    },
    {
      id: 10,
      name: "Preocupado",
      iconName: "TriangleAlert",
      icon: TriangleAlert,
      color: "#DC2626",
    },
  ];

  const [portal, setPortal] = useState(false);
  const [prayer, setPrayer] = useState(currentPrayer);
  const [data, setData] = useState([])
  
async function getDataAsyncSql() {
  await setPrayerSql();

  const data = await getDataSql();
  setData(data)
}

useEffect(() => {
  getDataAsyncSql();
}, []);

  return (
    <AppContext.Provider
      value={{
        setPrayer,
        setPortal,
        portal,
        prayer,
        setPrayer,
        feelings,
        icons,
        setPrayerSql,
        insertDataSql,
        data
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
