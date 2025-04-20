import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import BottomTabUserNavigator from "./BottomTabUserNavigator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const Stack = createNativeStackNavigator();

export default function StackScreen() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="AuthenticatedTab" component={BottomTabUserNavigator} />
        </>
      ) : (
        <>
         <Stack.Screen name="GuestTab" component={BottomTabNavigator} />
          
        </>
      )}
    </Stack.Navigator>
  );
}
