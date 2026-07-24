import React, { useContext } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { AppContext } from "@/context/contex";
import { Heading } from "../components/ui/heading";
import { Text } from "../components/ui/text";
import { HStack } from "./ui/hstack";
import { Icon, CloseIcon, ChevronDownIcon } from "../components/ui/icon";
import FormPrayer from "./FormPrayer";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
} from "../components/ui/actionsheet";
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "./ui/modal";

function ModalPrayer() {
  
  const [feeling, setFeeling] = React.useState("");
  const [icon, setIcon] = React.useState(null);
  const [color, setColor] = React.useState(null);
  const [iconName, setIconName] = React.useState("")
  const [showSelector, setShowSelector] = React.useState(false);

  const { portal, setPortal, feelings} = useContext(AppContext);

  const handleFeeling = (name, icon, color, iconName) => {
    setIconName(iconName)
    setFeeling(name);
    setIcon(icon);
    setColor(color);
    setShowSelector(false);
  };

  return (
    <>
      <Modal 
        isOpen={portal} 
        onClose={() => setPortal(false)} 
        size="lg"
        avoidKeyboard={true} 
      >
        <ModalBackdrop />
        <ModalContent className="max-h-[100%]">
          <ModalHeader>
            <Heading size="lg">Nueva Oración</Heading>
            <ModalCloseButton><Icon as={CloseIcon} /></ModalCloseButton>
          </ModalHeader>

          <ModalBody>
            <ScrollView keyboardShouldPersistTaps="handled">
              <Text className="mb-4">Me siento: {feeling || "Selecciona uno"}</Text>
              
              <TouchableOpacity
                onPress={() => setShowSelector(true)}
                className="flex-row items-center justify-between border border-background-300 rounded-lg p-3 mb-6 bg-background-50"
              >
                <Text className={feeling ? "text-typography-900" : "text-typography-400"}>
                  {feeling || "Agregar Sentimiento"}
                </Text>
                <Icon as={ChevronDownIcon} />
              </TouchableOpacity>

              <FormPrayer feeling={feeling} icon={icon} color={color} iconName={iconName} />
            </ScrollView>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Actionsheet isOpen={showSelector} onClose={() => setShowSelector(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper><ActionsheetDragIndicator /></ActionsheetDragIndicatorWrapper>
          <Text className="my-4 font-semibold text-lg">Selecciona un sentimiento</Text>
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ 
              flexDirection: 'row', 
              gap: 10, 
              paddingHorizontal: 16,
              paddingBottom: 20,
            }}
          >
            {feelings.map((item) => (
              <HStack key={item.id} className="wrapperIcon">
                <TouchableOpacity
                  className="flex-row items-center gap-2 bg-muted p-4 rounded-md h-14"
                  onPress={() => handleFeeling(item.name, item.icon, item.color, item.iconName)}
                >
                  <Icon as={item.icon} color={item.color} size={20} />
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              </HStack>
            ))}
          </ScrollView>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

export default ModalPrayer;
