import React, {useContext} from "react"
import { AppContext } from "@/context/contex";

import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '../components/ui/modal';
import { Button, ButtonText } from '../components/ui/button';
import { Heading } from '../components/ui/heading';
import { Text } from '../components/ui/text';
import { Icon, CloseIcon } from '../components/ui/icon';
import FormPrayer from './FormPrayer';
import {
  Smile,
  Frown,
  Angry,
  CloudLightning,
  Heart,
  Sparkles,
  HelpCircle,
  BatteryLow,
  Sun,
  TriangleAlert,
} from "lucide-react-native";
import { Pressable } from "react-native";

function ModalPrayer() {
  const [showModal, setShowModal] = React.useState(false);
  const [feeling, setFeeling] = React.useState("")
  const {portal, setPortal, feelings, setPrayer}  = useContext(AppContext)
  const icons = {
  Smile,
  Frown,
  Angry,
  CloudLightning,
  Heart,
  Sparkles,
  HelpCircle,
  BatteryLow,
  Sun,
  TriangleAlert,
};

  const handleFeeling = (name) => {
    console.log(name, "name")
    setFeeling(name)
  }
  return (
    <>
      <Modal
        isOpen={portal}
        onClose={() => {
          setPortal(false);
        }}
        size="md"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Nueva Oraciòn</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>Agregar Sentimiento</Text>
            {
              feelings.map((item)=>{
                const icon = icons[item.icon]
                 return (
                    <Pressable className="flex flex-row gap-2" onPress={()=>{handleFeeling(item.name)}}>
                        <Icon as={icon} color={item.color} size={20}/>
                        <Text>{item.name}</Text>
                    </Pressable>
                 )
              })

            }
            
            <FormPrayer  feeling={feeling} />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              className="mr-3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Save</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalPrayer