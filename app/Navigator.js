// Navigator.js
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./index";
import LogSleepPage from "./SecureAccess";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogSleepPage" component={LogSleepPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
