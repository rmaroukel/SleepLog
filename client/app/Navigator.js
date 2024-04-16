// Navigator.js
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./index";
import LogSleepPage from "./SecureAccess";
import SleepLogger from "./SleepLogger";
import SleepLogs from "./SleepLogs";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogSleepPage" component={LogSleepPage} />
        <Stack.Screen name="SleepLogger" component={SleepLogger} />
        <Stack.Screen name="SleepLogs" component={SleepLogs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
