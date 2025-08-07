import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import BottomTabUserNavigator from "./BottomTabUserNavigator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import HotelDetail from "./screens/HotelDetail";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function StackScreen() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen
            name="AuthenticatedTab"
            component={BottomTabUserNavigator}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="GuestTab" component={BottomTabNavigator} />
        </>
      )}
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HotelDetails" component={HotelDetail} />
    </Stack.Navigator>
  );
}
