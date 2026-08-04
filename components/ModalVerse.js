import React, { useContext } from "react";
import { AppContext } from "@/context/contex";
import { Heading } from "../components/ui/heading";
import { Icon, CloseIcon} from "../components/ui/icon";
import  FormVerse from "./FormVerse"

import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "./ui/modal";

function ModalVerse() {
 
  const {setVerse, verse} = useContext(AppContext);
   
  return (
    <>
      <Modal 
        isOpen={verse} 
        onClose={() => setVerse(false)} 
        size="lg"
        avoidKeyboard={true} 
      >
        <ModalBackdrop />
        <ModalContent className="max-h-[100%]">
          <ModalHeader>
            <Heading size="lg">Agregar</Heading>
            <ModalCloseButton><Icon as={CloseIcon} /></ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <FormVerse/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalVerse;
