import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackScreen from "./StackScreen";


export default function MainNavigator() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
