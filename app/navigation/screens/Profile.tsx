import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { setUser } from "../../../features/auth/authSlice";


export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state:any)=> state.auth.user);

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      dispatch(setUser(null)); 
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  

  return (
    <View>
      <Text>{user.email}aa</Text>
      <Text>{user.uid}aa</Text>
      <Text>{user.displayName}aa</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
