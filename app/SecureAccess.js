import React, { useState } from "react";
import {
  View,
  TextInput,
  StatusBar,
  Text,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";
import { COLORS, STYLE } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { useEmmersiveLayout } from "../hooks/useEmmersiveLayout";

const SecureAccess = () => {
  const navigation = useNavigation();
  const [accessCode, setAccessCode] = useState("");

  useEmmersiveLayout();

  const logSleep = () => {
    navigation.goBack();
  };

  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={STYLE.container}>
          <Text style={STYLE.header}>Sleep Log Access Code</Text>
          <TextInput
            style={STYLE.input}
            placeholder="Enter your access code here"
            placeholderTextColor={COLORS.gray}
            value={accessCode}
            onChangeText={setAccessCode}
          />
          <Pressable style={STYLE.button} onPress={logSleep}>
            <Text style={STYLE.buttontext}>Access Sleep Logs</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SecureAccess;
