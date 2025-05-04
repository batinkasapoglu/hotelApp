import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useHotels } from "../../../src/data/useHotels";
import { useNavigation } from "@react-navigation/native";
import ProfileHeader from "../../components/ProfileHeader";

export default function HomeScreen() {
  const hotels = useHotels();
  const navigation = useNavigation();

  return (
    <View >
      <ProfileHeader />
      <FlatList 
      numColumns={2}
        data={hotels}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-white rounded-2xl shadow-md mb-4 mx-4 flex-1"
            onPress={() => navigation.navigate("HotelDetails", { hotel: item })}
          >
            <Image
              source={{ uri: item.thumbnail }}
              className="w-full h-48"
              resizeMode="cover"
            />
            <View className="p-4">
              <Text className="text-lg font-bold text-gray-800">
                {item.name}
              </Text>
              <Text className="text-sm text-gray-500 mt-1">
                {item.location}
              </Text>
              <Text className="text-sm text-yellow-500 mt-2">
                ⭐ {item.rating.toFixed(1)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}
