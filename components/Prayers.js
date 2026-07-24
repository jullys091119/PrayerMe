import React, { useContext } from "react";
import { AppContext } from "@/context/contex";
import { VirtualizedList, Text } from "react-native";

import { VStack } from "./ui/vstack";
import { HStack } from "./ui/hstack";
import { Card } from "./ui/card";

import { Switch } from "./ui/switch";
import { Icon } from "./ui/icon";

function Prayers() {
  const { setAnsweredSql, data, icons, getDataSql, setData } =
    useContext(AppContext);
  const handleSetAnswered = async (answered, id) => {
    await setAnsweredSql(id, answered);
    await loadData();
  };

  const loadData = async () => {
    const newData = await getDataSql();
    setData(newData);
  };

  return (
    <VStack className="px-5 flex-1 flex py-5 my-10">
      <VirtualizedList
        data={data}
        initialNumToRender={4}
        keyExtractor={(item) => item.id.toString()}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data?.length}
        renderItem={({ item }) => {
          console.log(item, "item");
          const IconComponent = icons[item.iconName];

          return (
            <Card className="w-full text-white h-auto my-2">
              <HStack className="gap-2 flex items-center">
                <Text className="text-white flex items-center">
                  Me siento: {item.feeling}
                </Text>

                <Icon
                  as={IconComponent}
                  size={20}
                  color={item.color}
                  className="mt-2"
                />
              </HStack>
              <HStack className="flex-col">
                <Text style={{ color: item.color }}>{item.date}</Text>
              </HStack>

              <HStack className="">
                <Text className="text-white max-w-[300]">{item.prayer}</Text>
                <Switch
                  size="md"
                  isDisabled={false}
                  trackColor={{
                    false: "#d4d4d4",
                    true: `${item.color}`,
                  }}
                  thumbColor="#fafafa"
                  activeThumbColor="#fafafa"
                  ios_backgroundColor="#d4d4d4"
                  value={item.answered === 1}
                  onToggle={() => {
                    handleSetAnswered(item.answered === 1 ? 0 : 1, item.id);
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
