import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // dizini kendine göre ayarla
import { setUser } from "../../features/slices/authSlice";
import { RootState } from "../store";

export default function ProfileHeader() {
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
    <View className="w-full bg-white p-4 flex-row items-center justify-between shadow-md">
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 items-center justify-center mr-3">
          <Text className="text-2xl text-white">👤</Text>
        </View>
        <View>
          <Text className="text-sm font-semibold text-gray-800">
            {user?.name} {user?.surName}
          </Text>
          <Text className="text-xs text-gray-500">{user?.email}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-500 px-3 py-1 rounded-full"
      >
        <Text className="text-white text-xs">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
