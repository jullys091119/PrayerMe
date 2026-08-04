import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useContext, useState } from "react";

import AppProvider, { AppContext } from "./context/contex";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AvatarUser from "./components/AvatarUser";
import GridContent from "./components/GridContent";

import Prayers from "./components/Prayers";
import ModalPrayer from "./components/ModalPrayer";
import ModalVerse from "./components/ModalVerse";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

import { VStack } from "./components/ui/vstack";
import { HStack } from "./components/ui/hstack";

import MenuOptions from "./components/Menu";

const RenderModal = () => {
  const { portal, verse } = useContext(AppContext);
  return (portal && <ModalPrayer />) || (verse && <ModalVerse />);
};

const ShowRenderVerse = () => {
  const { verseData } = useContext(AppContext);
  return (
    verseData.length > 0 &&
    verseData.map((verse, index) => (
      <VStack key={verse.id}>
        <Text className="max-w-90 font-bold italic">{verse.text}</Text>
        <Text className="max-w-90 font-bold">({verse.reference})</Text>
      </VStack>
    ))
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
              <Text className="font-bold text-xl max-w-40 my-10 mx-5">Bienvenido Julián Ontiveros</Text>
            </HStack>
            <HStack className="px-5">
              <ShowRenderVerse />
            </HStack>
            <Prayers />
            <StatusBar style="auto" />
          </View>
          <RenderModal />
        </GluestackUIProvider>
      </AppProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
