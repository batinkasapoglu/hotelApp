import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useHotels } from "../../../src/data/useHotels";
import { useNavigation } from "@react-navigation/native";
import ProfileHeader from "../../components/ProfileHeader";

export default function HomeScreen() {
  const hotels = useHotels();
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center mt-20">
      <ProfileHeader />
      <FlatList
        data={hotels}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("HotelDetails", { hotel: item })}
          >
            <Text className="text-black">{item.name}</Text>
            <Text className="text-black">{item.location}</Text>
            <Image source={{ uri: item.thumbnail }} style={{ height: 200 }} />
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}
