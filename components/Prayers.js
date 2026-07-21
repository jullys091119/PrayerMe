import React, { useContext } from "react";
import { AppContext } from "@/context/contex";
import { VirtualizedList, Text } from "react-native";

import { VStack } from "./ui/vstack";

function Prayers() {
  const {prayer } = useContext(AppContext);
  return (
    <VStack className="px-5 flex-1 py-5 border-1 my-10">
      <VirtualizedList
          data={prayer}
          initialNumToRender={4}
          keyExtractor={(item) => item.id.toString()}
          getItem={(data, index) => data[index]}
          getItemCount={(data) => data?.length}
          renderItem={({ item }) => {
            console.log(item)
            return (
              <>
              <Text>{item.prayer}</Text>
              <Text>{item.feeling}</Text>
              </>
            )
          }}
        />
    </VStack>
  );
}

export default Prayers;
