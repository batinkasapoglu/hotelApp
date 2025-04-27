import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileHeader from "../../components/ProfileHeader";

export default function HotelDetail({ route }: any) {
  const { hotel } = route.params;
  const navigation = useNavigation();

  return (
    <View className="mt-20">
      <ProfileHeader />
      <Text>HotelDetail</Text>
      <Text>{hotel.name}</Text>
      <Image source={{ uri: hotel.thumbnail }} style={{ height: 200 }} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
