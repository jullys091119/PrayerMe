import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from '../components/ui/form-control';
import { Textarea, TextareaInput } from '../components/ui/textarea';

function FormPrayer() {
  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>Oración</FormControlLabelText>
      </FormControlLabel>
      <Textarea className="min-w-[200px]">
        <TextareaInput placeholder="Type your comment here..." />
      </Textarea>
     
    </FormControl>
  );
}

export default FormPrayer;