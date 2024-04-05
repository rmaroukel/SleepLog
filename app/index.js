import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StatusBar,
} from "react-native";
import { COLORS, STYLE } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { useEmmersiveLayout } from "../hooks/useEmmersiveLayout";

const Home = () => {
  const navigation = useNavigation();

  useEmmersiveLayout();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={STYLE.container}>
        <Text style={STYLE.largeheader}>Welcome!</Text>
        <Text style={STYLE.infoText}>
          A good night's sleep is essential for your health and well-being. It
          helps to improve your brain performance, mood, and overall health.
          Logging your sleep can be a great first step towards understanding
          your sleep patterns and making necessary improvements.
        </Text>
        <Text style={STYLE.calltoaction}>
          A code from your provider is required to proceed, please click the
          button below to view your sleep logs with your access code.
        </Text>
        <Pressable
          style={STYLE.button}
          onPress={() => navigation.navigate("SecureAccess")}
        >
          <Text style={STYLE.buttontext}>Access Sleep Logs</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Home;
