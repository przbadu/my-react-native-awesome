import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/Feather";

import Video from "./Video";
import Overview from "./Overview";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = route.name === "VIDEO" ? "youtube" : "list";

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
    >
      <Tab.Screen name="VIDEO" component={Video} icon />
      <Tab.Screen name="NOTES" component={Overview} />
    </Tab.Navigator>
  );
}
