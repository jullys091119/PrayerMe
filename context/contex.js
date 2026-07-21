import react,{createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext =  createContext();

const AppProvider = ({ children }) => {
 const [portal, setPortal] = useState(false)

  const setPrayer = async () => {
    try {
      AsyncStorage.setItem("prayer",
         JSON.stringify(
            {
             id: 2, 
             prayer: "Jehová  me siento felíz porque me haz presentado esta cancion que me motiva",
             answered: false
             }));
    } catch (e) {
      console.log(e, "error setting prayer")
    }
  }

  return (
    <AppContext.Provider value={{setPrayer, setPortal, portal}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;