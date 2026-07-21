import { useContext, useState } from "react";

import AppProvider, { AppContext } from "./context/contex";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AvatarUser from "./components/AvatarUser";
import GridContent from "./components/GridContent";

import Prayers from "./components/Prayers";
import ModalPrayer from "./components/ModalPrayer";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

import { HStack } from "./components/ui/hstack";


import MenuOptions from "./components/Menu";


const RenderModal = () => {
  const {portal} = useContext(AppContext)
  return (
    portal && <ModalPrayer/>
    )

}

export default function App() {
  return (
    <AppProvider>
      <GluestackUIProvider mode="dark">
        <View style={styles.container}>
          <HStack
            className="
            h-30 
            flex  
            direction-row  
            items-center 
            justify-between
            px-5
            "
          >
            <AvatarUser />
            <MenuOptions />
          </HStack>
          <HStack>
            <GridContent />
          </HStack>
            <Prayers />
          <StatusBar style="auto" />
        </View>
        <RenderModal/>
      </GluestackUIProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
