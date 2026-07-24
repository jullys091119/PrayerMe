import React, { useContext } from "react";
import { AppContext } from "@/context/contex";
import { VirtualizedList, Text } from "react-native";
import FilterMenu from "./FilterMenu";

import { VStack } from "./ui/vstack";
import { HStack } from "./ui/hstack";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { Icon } from "./ui/icon";

import { Filter, ListFilter } from "lucide-react-native";

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

  const loadData = async (filter) => {
    const newData = await getDataSql();
    filter ? setData(filter) : setData(newData)
    
  };

  const handleSetAnswered = async (answered, id) => {
    await setAnsweredSql(id, answered);
    await loadData();
  };

  const handleDeletePrayer = async (id) => {
    await deletePrayerSql(id);
    await loadData();
  };

  const handleFilterAllAnswered  =  async () => {
    await loadData()
  };
  
  const handleFilterPerAnswered = async () => {
    const data  =  await  getDataFilteredSql(true)
     setData(data)
     await loadData(data)
  }

  const handleFilterNoAnswered = async () => {
    const data  =  await  getDataFilteredSql(false)
     setData(data)
     await loadData(data)
  }

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
          <Text
            style={{
              color: "black",
              textAlign: "center",
              marginTop: 300,
              fontSize: 18,
              flex: 1,
            }}
          >
            Escribe tu oración 🙏
          </Text>
        )}
        renderItem={({ item }) => {

          const IconComponent = icons[item.iconName];

          return (
            <Card
              className="w-full h-auto my-2"
              onPress={() => handleDeletePrayer(item.id)}
              key={item.id}
            >
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
          );
        }}
      />
    </VStack>
  );
}

export default Prayers;