import React, { useContext } from "react";
import { AppContext } from "@/context/contex";
import { VirtualizedList, Text } from "react-native";

import { VStack } from "./ui/vstack";
import { HStack } from "./ui/hstack";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";

function Prayers() {
  const { prayer } = useContext(AppContext);
  return (
    <VStack className="px-5 flex-1 flex py-5 my-10">
      <VirtualizedList
        data={prayer}
        initialNumToRender={4}
        keyExtractor={(item) => item.id.toString()}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data?.length}
        renderItem={({ item, i }) => {
          const Icon = item.icon;
          return (
            <Card className="w-full text-white h-auto my-2">
              <HStack className="gap-2">
                <Text className="text-white flex items-center">
                  Me siento: {item.feeling}{" "}
                </Text>
                <Icon size={20} color={item.color} className="mt-2" />
              </HStack>
              <Text className="text-white">{item.prayer}</Text>
            </Card>
          );
        }}
      />
    </VStack>
  );
}

export default Prayers;
