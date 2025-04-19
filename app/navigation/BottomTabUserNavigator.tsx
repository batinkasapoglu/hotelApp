import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./tabs/HomeScreen";
import Profile from "./tabs/Profile";

const Tab = createBottomTabNavigator();

export default function BottomTabUserNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
