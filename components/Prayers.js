import { VirtualizedList, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Prayers() {
  const currenntPrayer = [
    {
      id: 1,
      prayer: "Jehová ayúdame a tener más autodominio la próxima vez que venga la tentación",
      answered: false,
    },
  ];

  return (
    <SafeAreaProvider>
      <VirtualizedList
        data={currenntPrayer}
        initialNumToRender={4}
        keyExtractor={(item) => item.id.toString()}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data.length}
        renderItem={({ item }) => (
          <Text>{item.prayer}</Text>
        )}
      />
    </SafeAreaProvider>
  );
}

export default Prayers;
