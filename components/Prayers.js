import React, { useContext } from "react";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { AppContext } from "@/context/contex";
import { VirtualizedList, Text, Alert } from "react-native";
import FilterMenu from "./FilterMenu";

import { VStack } from "./ui/vstack";
import { HStack } from "./ui/hstack";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { Icon } from "./ui/icon";

function Prayers() {
  const {
    setAnsweredSql,
    data,
    icons,
    getDataSql,
    setData,
    deletePrayerSql,
    getDataFilteredSql,
  } = useContext(AppContext);

  const loadData = async (filter?: any) => {
    const newData = await getDataSql();
    filter ? setData(filter) : setData(newData);
  };

  const handleSetAnswered = async (answered: number, id: number) => {
    await setAnsweredSql(id, answered);
    await loadData();
  };

  const handleDeletePrayer = (id: number) => {
    Alert.alert(
      "Eliminar oración",
      "¿Estás seguro de que deseas eliminar esta oración?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            await deletePrayerSql(id);
            await loadData();
          },
        },
      ]
    );
  };

  const handleFilterAllAnswered = async () => {
    await loadData();
  };

  const handleFilterPerAnswered = async () => {
    const data = await getDataFilteredSql(true);
    setData(data);
  };

  const handleFilterNoAnswered = async () => {
    const data = await getDataFilteredSql(false);
    setData(data);
  };

  return (
    <VStack className="px-5 flex-1 py-5 my-10">
      <HStack className="justify-end p-3">
        <FilterMenu
          handleFilterPerAnswered={handleFilterPerAnswered}
          handleFilterAllAnswered={handleFilterAllAnswered}
          handleFilterNoAnswered={handleFilterNoAnswered}
        />
      </HStack>

      <VirtualizedList
        data={data}
        initialNumToRender={4}
        keyExtractor={(item) => item.id.toString()}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data?.length ?? 0}
        ListEmptyComponent={() => (
          <VStack className="mt-50 flex flex-col justify-center items-center">
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Escribe tu oración 🙏
            </Text>

          </VStack>
        )}
        renderItem={({ item }) => {
          const IconComponent = icons[item.iconName];

          const renderRightActions = () => (
            <Card
              className="bg-red-600 justify-center items-center"
              style={{
                width: 100,
                marginVertical: 8,
              }}
              onTouchEnd={() => handleDeletePrayer(item.id)}
            >
              <Text className="text-white font-bold">
               Eliminar
              </Text>
            </Card>
          );

          return (
            <Swipeable
              renderRightActions={renderRightActions}
              rightThreshold={60}
              overshootRight={false}
            >
              <Card className="w-full h-auto my-2">
                <HStack className="gap-2 flex items-center">
                  <Text className="text-white">
                    Me siento: {item.feeling}
                  </Text>

                  <Icon
                    as={IconComponent}
                    size={20}
                    color={item.color}
                    className="mt-2"
                  />
                </HStack>

                <HStack>
                  <Text style={{ color: item.color }}>
                    {item.date}
                  </Text>
                </HStack>

                <HStack className="justify-between items-center">
                  <Text className="text-white flex-1 mr-3">
                    {item.prayer}
                  </Text>

                  <Switch
                    size="md"
                    trackColor={{
                      false: "#d4d4d4",
                      true: item.color,
                    }}
                    thumbColor="#fafafa"
                    activeThumbColor="#fafafa"
                    ios_backgroundColor="#d4d4d4"
                    value={item.answered === 1}
                    onToggle={() =>
                      handleSetAnswered(
                        item.answered === 1 ? 0 : 1,
                        item.id
                      )
                    }
                  />
                </HStack>
              </Card>
            </Swipeable>
          );
        }}
      />
    </VStack>
  );
}

export default Prayers;