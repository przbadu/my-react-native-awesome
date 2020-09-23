import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./app/screens/Onboarding";
import Home from "./app/screens/Home";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
