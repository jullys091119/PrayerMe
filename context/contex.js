import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const currentPrayer = [
    {
      id: 1,
      prayer:
        "Jehová ayúdame a tener más autodominio la próxima vez que venga la tentación",
      answered: false,
      feeling: null
    },
  ];

  const feelings = [
    {
      id: 1,
      name: "Feliz",
      icon: "Smile",
      color: "#FACC15", // amarillo
    },
    {
      id: 2,
      name: "Triste",
      icon: "Frown",
      color: "#3B82F6", // azul
    },
    {
      id: 3,
      name: "Enojado",
      icon: "Angry",
      color: "#EF4444", // rojo
    },
    {
      id: 4,
      name: "Ansioso",
      icon: "CloudLightning",
      color: "#8B5CF6", // morado
    },
    {
      id: 5,
      name: "Agradecido",
      icon: "Heart",
      color: "#EC4899", // rosa
    },
    {
      id: 6,
      name: "En paz",
      icon: "Sparkles",
      color: "#14B8A6", // turquesa
    },
    {
      id: 7,
      name: "Confundido",
      icon: "HelpCircle",
      color: "#F97316", // naranja
    },
    {
      id: 8,
      name: "Cansado",
      icon: "BatteryLow",
      color: "#64748B", // gris azulado
    },
    {
      id: 9,
      name: "Esperanzado",
      icon: "Sun",
      color: "#EAB308", // dorado
    },
    {
      id: 10,
      name: "Preocupado",
      icon: "TriangleAlert",
      color: "#DC2626", // rojo oscuro
    },
  ];

  const [portal, setPortal] = useState(false);
  const [prayer, setPrayer] = useState(currentPrayer);

  return (
    <AppContext.Provider
      value={{ setPrayer, setPortal, portal, prayer, setPrayer, feelings }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
