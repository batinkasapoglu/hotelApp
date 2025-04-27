import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { setUser } from "../../../features/slices/authSlice";
import { RootState } from "../../store";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(setUser(null));
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <View className="flex-1 items-center bg-white p-6 mt-20">
      <View className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg">
        <View className="w-full h-full bg-gray-300 flex items-center justify-center">
          <Text className="text-4xl text-white">👤</Text>
        </View>
      </View>

      <Text className="text-xl font-semibold text-gray-800">
        {user?.name} {user?.surName}
      </Text>
      <Text className="text-base text-gray-500">{user?.email}</Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-500 px-3 py-1 rounded-full"
      >
        <Text className="text-white text-xs">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
