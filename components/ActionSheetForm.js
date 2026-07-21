import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetScrollView,
} from "../components/ui/actionsheet";

import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "../components/ui/vstack";
import { FormControl } from "../components/ui/form-control";
import { Switch } from "./ui/switch";

import FormPrayer from "./FormPrayer";

function ActionsheetForm({ portal, setPortal }) {
  const handleClose = () => setPortal(false);

  return (
    <Actionsheet isOpen={portal} onClose={handleClose} snapPoints={[70]}>
      <ActionsheetBackdrop />

      <ActionsheetContent className="flex-1 w-full">
        <KeyboardAvoidingView
          style={{ flex: 1, width: "100%" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <ActionsheetScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingTop: 20,
              paddingBottom: 40,
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <VStack space="md">
              <FormControl>
                <FormPrayer />
                <Switch
                  defaultValue={true}
                  trackColor={{ false: "#d4d4d4", true: "#525252" }}
                  thumbColor="#fafafa"
                  activeThumbColor="#fafafa"
                  ios_backgroundColor="#d4d4d4"
                />
                
                <Button className="mt-6" onPress={handleClose}>
                  <ButtonText>Enviar</ButtonText>
                </Button>
              </FormControl>
            </VStack>
          </ActionsheetScrollView>
        </KeyboardAvoidingView>
      </ActionsheetContent>
    </Actionsheet>
  );
}

export default ActionsheetForm;
