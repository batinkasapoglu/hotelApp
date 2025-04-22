import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
}
