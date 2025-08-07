import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CustomButtonProps } from "../../src/data/types";

export const CustomButton = ({page,text}: CustomButtonProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(page)}
      className="bg-red-500 px-3 py-1 rounded-full"
    >
      <Text className="text-white text-xs">{text}</Text>
    </TouchableOpacity>
  );
};
