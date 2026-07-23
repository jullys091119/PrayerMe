import React, { useContext, useState } from "react";
import { AppContext } from "@/context/contex";
import { VirtualizedList, Text } from "react-native";

import { VStack } from "./ui/vstack";
import { HStack } from "./ui/hstack";
import { Card } from "./ui/card";

import { Switch } from "./ui/switch";

function Prayers() {
  const { prayer, setPrayer } = useContext(AppContext);
  const [answered, setAnswered] = useState(false);

  const handleSetAnswered = (answered, id) => {
    console.log(prayer,">>")
    setAnswered(answered);
    setPrayer((prev) =>
      prev.map((r) => (r.id === id ? { ...r, answered } : r)),
    );

  };

  return (
    <VStack className="px-5 flex-1 flex py-5 my-10">
      <VirtualizedList
        data={prayer}
        initialNumToRender={4}
        keyExtractor={(item) => item.id.toString()}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data?.length}
        renderItem={({ item, i }) => {
          console.log(item, "item")
          const Icon = item.icon;
          return (
            <Card className="w-full text-white h-auto my-2">
              <HStack className="gap-2">
                <Text className="text-white flex items-center">
                  Me siento: {item.feeling}{" "}
                </Text>
                <Icon size={20} color={item.color} className="mt-2" />
              </HStack>
              <HStack className="border-1">
                <Text className="text-white  max-w-[300]">{item.prayer}</Text>
                <Switch
                  size="md"
                  isDisabled={false}
                  trackColor={{ false: "#d4d4d4", true: `${item.color}` }}
                  thumbColor="#fafafa"
                  activeThumbColor="#fafafa"
                  ios_backgroundColor="#d4d4d4"
                  value={answered}
                  onToggle={() => {
                    handleSetAnswered(!item.answered, item.id);
                  }}
                />
              </HStack>
            </Card>
          );
        }}
      />
    </VStack>
  );
}

export default Prayers;
