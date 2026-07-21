import react,{createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext =  createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  const setPrayer = async () => {
    try {
      AsyncStorage.setItem("prayer",
         JSON.stringify(
            {
             id: 1, 
             prayer: "Jehová ayúdame a tener más autodominio la próxima vez que venga la tentación",
             answered: false
             }));
    } catch (e) {
      console.log(e, "error setting prayer")
    }
  }

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;