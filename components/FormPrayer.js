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


function FormPrayer({feeling}) {
  const { setPrayer} = useContext(AppContext);
  const [newPrayer, setNewPrayer] = useState("");
  const id = uuidv4();
  
  const handleSavePrayer = (newPrayer) => {
    setPrayer((prev) => [
      ...prev,

      {
        id: id,
        prayer: newPrayer,
        answered: false,
        feeling: feeling
      },
    ]);
  };

  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>Oración</FormControlLabelText>
      </FormControlLabel>
      <Textarea className="min-w-[200px]" value={newPrayer}>
        <TextareaInput
          placeholder="Type your comment here..."
          on
          onChangeText={(e) => setNewPrayer(e)}
          value={newPrayer}
        />
      </Textarea>
      <Button className="bg-sky-600 my-2" onPress={()=>{handleSavePrayer(newPrayer)}}>
        <Text>Agregar</Text>
      </Button>
    </FormControl>
  );
}

export default FormPrayer;
