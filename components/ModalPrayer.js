import React, { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import { AppContext } from "@/context/contex";

import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "../components/ui/modal";

import { Heading } from "../components/ui/heading";
import { Text } from "../components/ui/text";
import { Icon, CloseIcon } from "../components/ui/icon";
import { Grid, GridItem } from "./ui/grid";
import FormPrayer from "./FormPrayer";

function ModalPrayer() {
  const [feeling, setFeeling] = React.useState("");
  const [icon, setIcon] = React.useState(null);
  const [color, setColor] = React.useState(null);

  const { portal, setPortal, feelings } = useContext(AppContext);

  const handleFeeling = (name, icon, color) => {
    setFeeling(name);
    setIcon(icon);
    setColor(color);
  };

  return (
    <Modal isOpen={portal} onClose={() => setPortal(false)} size="lg">
      <ModalBackdrop />

      <ModalContent className="max-h-[85%]">
        <ModalHeader>
          <Heading size="lg">Nueva Oración</Heading>

          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text className="mb-5">Agregar Sentimiento: {feeling}</Text>

            <Grid
              className="gap-3"
              _extra={{
                className: "grid-cols-8 gap-2",
              }}
            >
              {feelings.map((item) => (
                <GridItem
                  key={item.id}
                  _extra={{
                    className: "col-span-4",
                  }}
                >
                  <TouchableOpacity
                    className="flex-row items-center gap-2 bg-muted p-4 rounded-md"
                    onPress={() =>
                      handleFeeling(item.name, item.icon, item.color)
                    }
                  >
                    <Icon as={item.icon} color={item.color} size={20} />

                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </GridItem>
              ))}
            </Grid>

            <FormPrayer feeling={feeling} icon={icon} color={color} />
          </ScrollView>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalPrayer;
