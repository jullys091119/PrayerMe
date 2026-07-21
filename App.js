import React, { useState, useContext } from "react";
import { AppContext } from "./context/contex";
import AppProvider from "./context/contex";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AvatarUser from "./components/AvatarUser";
import GridContent from "./components/GridContent";
import Prayers from "./components/Prayers";
import ActionSheetForm from "./components/ActionSheetForm";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

import { HStack } from "./components/ui/hstack";


import MenuOptions from "./components/Menu";


function RenderPortal () {
  const {portal, setPortal} = useContext(AppContext)
 
  return (
    <ActionSheetForm portal={portal} setPortal={setPortal}/>
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
            <GridContent/>
          </HStack>
          <HStack className="h-30 flex-1 py-2">
            <Prayers/>
          </HStack>
          <StatusBar style="auto" />
        </View>
      <RenderPortal/> 
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
