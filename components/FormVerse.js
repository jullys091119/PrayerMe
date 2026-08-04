import React, { useContext, useState } from "react";
import { TextInput, Alert } from "react-native";

import { AppContext } from "@/context/contex";

import { VStack } from "./ui/vstack";
import { HStack } from "./ui/hstack";
import { Card } from "./ui/card";
import { Button, ButtonText } from "./ui/button";
import { Text } from "./ui/text";


export default function FormVerse() {

  const { insertVerseSql } = useContext(AppContext);

  const [reference, setReference] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");


  const saveVerse = async () => {

    if (!reference || !text) {
      Alert.alert(
        "Faltan datos",
        "La referencia y el texto son obligatorios"
      );
      return;
    }

    await insertVerseSql({
      reference,
      text,
      category
    });


    setReference("");
    setText("");
    setCategory("");

    Alert.alert(
      "Guardado",
      "Versículo agregado correctamente"
    );
  };


  return (
    <Card className="p-5 my-3">

      <VStack className="gap-4">

        <Text className="text-white text-lg">
          📖 Nuevo versículo
        </Text>


        <TextInput
          placeholder="Referencia (Ej: Filipenses 4:13)"
          placeholderTextColor="#aaa"
          value={reference}
          onChangeText={setReference}
          style={{
            backgroundColor:"#222",
            color:"white",
            padding:12,
            borderRadius:10
          }}
        />


        <TextInput
          placeholder="Texto del versículo"
          placeholderTextColor="#aaa"
          multiline
          numberOfLines={5}
          value={text}
          onChangeText={setText}
          style={{
            backgroundColor:"#222",
            color:"white",
            padding:12,
            borderRadius:10,
            minHeight:120,
            textAlignVertical:"top"
          }}
        />


        <TextInput
          placeholder="Categoría (Ej: Fortaleza)"
          placeholderTextColor="#aaa"
          value={category}
          onChangeText={setCategory}
          style={{
            backgroundColor:"#222",
            color:"white",
            padding:12,
            borderRadius:10
          }}
        />


        <Button
          onPress={saveVerse}
        >
          <ButtonText>
            Guardar versículo
          </ButtonText>
        </Button>


      </VStack>

    </Card>
  );
}