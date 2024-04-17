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
import { COLORS, STYLE } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { useEmmersiveLayout } from "../hooks/useEmmersiveLayout";
import randomAccessCode from "../hooks/useSampleAccessCode";

const SecureAccess = () => {
  const navigation = useNavigation();
  const [accessCode, setAccessCode] = useState(randomAccessCode().toString());

  useEmmersiveLayout();
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={STYLE.container}>
        <Text style={[STYLE.largeheader, { alignSelf: "center" }]}>
          Login
        </Text>
          <Text style={STYLE.header}>Sleep Log Access Code</Text>
          <TextInput
            style={STYLE.input}
            placeholder="Enter your access code here"
            placeholderTextColor={COLORS.gray}
            value={accessCode}
            onChangeText={setAccessCode}
          />
          <Pressable
            style={!accessCode ? STYLE.buttonDisabled : STYLE.button}
            onPress={() => navigation.navigate("SleepLogger")}
            disabled={!accessCode}
          >
            <Text
              style={!accessCode ? STYLE.buttontextDisabled : STYLE.buttontext}
            >
              Add New Log
            </Text>
          </Pressable>
          <Pressable
            style={!accessCode ? STYLE.buttonDisabled : STYLE.buttonSecondary}
            onPress={() => navigation.navigate("SleepLogs")}
            disabled={!accessCode}
          >
            <Text
              style={!accessCode ? STYLE.buttontextDisabled : STYLE.buttontext}
            >
              View All
            </Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SecureAccess;
