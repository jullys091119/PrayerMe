import { useContext, useState } from "react";
import { AppContext } from "../context/contex";

import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "../components/ui/form-control";

import { Button } from "../components/ui/button";
import { Text } from "../components/ui/text";

import { Textarea, TextareaInput } from "../components/ui/textarea";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

function FormPrayer({ feeling, icon, color }) {
  const { setPrayer } = useContext(AppContext);

  const [newPrayer, setNewPrayer] = useState("");

  const handleSavePrayer = () => {
    const id = uuidv4();

    setPrayer((prev) => [
      ...prev,
      {
        id,
        prayer: newPrayer,
        answered: false,
        feeling,
        icon,
        color,
      },
    ]);

    setNewPrayer("");
  };

  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText className="my-5">Oración</FormControlLabelText>
      </FormControlLabel>

      <Textarea className="min-w-[200px]">
        <TextareaInput
          placeholder="Pon tu Oración aquí."
          value={newPrayer}
          onChangeText={setNewPrayer}
          multiline
        />
      </Textarea>

      <Button className="bg-sky-600 my-5" onPress={handleSavePrayer}>
        <Text>Agregar</Text>
      </Button>
    </FormControl>
  );
}

export default FormPrayer;
