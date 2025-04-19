import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUp from "./tabs/SignUp";
import Login from "./tabs/Login";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
}
