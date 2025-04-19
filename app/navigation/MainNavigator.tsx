import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackScreen from "./StackScreen";
import { Provider } from "react-redux";
import { store } from "../store";

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
