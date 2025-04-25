import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { setUser } from "../../../features/slices/authSlice";
import { RootState } from "../../store";


export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state:RootState)=> state.auth.user);

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
      <Text>{user?.surName}asdada</Text>
      <Text>{user?.uid}asdada</Text>
      <Text>{user?.name??"ad yok"}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
