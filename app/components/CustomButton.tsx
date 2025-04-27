import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CustomButtonProps } from "../../src/data/types";

export const CustomButton = (props: CustomButtonProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(props.screen)}
      className="bg-red-500 px-3 py-1 rounded-full"
    >
      <Text className="text-white text-xs">{props.text}</Text>
    </TouchableOpacity>
  );
};
