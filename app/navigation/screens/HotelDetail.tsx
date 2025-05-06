import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileHeader from "../../components/ProfileHeader";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import DateSelector from "../../components/DateSelector";

export default function HotelDetail({ route }: any) {
  const { hotel } = route.params;
  const navigation = useNavigation();

  const user = useSelector((state: RootState) => state.auth.user);
  const handleReservation = async () => {
    if (!user) {
      alert("Lütfen giriş yapın.");
      return;
    }
  };

  return (
    <SafeAreaProvider>
      <ProfileHeader />

      <ScrollView>
        <View className=" bg-white">
          <Image
            source={{ uri: hotel.thumbnail }}
            className="w-full h-60"
            resizeMode="cover"
          />
          <View className="p-6">
            <Text className="text-2xl font-bold text-gray-800">
              {hotel.name}
            </Text>
            <Text className="text-base text-gray-500 mt-1">
              {hotel.location}
            </Text>
            <Text className="text-base text-yellow-500 mt-2">
              ⭐ {hotel.rating.toFixed(1)}
            </Text>

            <View className="mt-6">
              <Text className="text-lg font-semibold text-gray-800 mb-2">
                Room Types
              </Text>
              {hotel.room_types.map((room, index) => (
                <View key={index} className="flex-row justify-between mb-1">
                  <Text className="text-gray-700">{room.type}</Text>
                  <Text className="text-gray-900 font-semibold">
                    ${room.price}
                  </Text>
                </View>
              ))}
            </View>

            <View className="mt-6">
              <Text className="text-lg font-semibold text-gray-800 mb-2">
                Amenities
              </Text>
              <View className="flex-row flex-wrap">
                {hotel.amenities.map((amenity, index) => (
                  <View
                    key={index}
                    className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    <Text className="text-gray-700 text-sm">{amenity}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View className="mt-6">
              <Text className="text-sm text-gray-400">
                Coordinates: {hotel.coordinates.lat}, {hotel.coordinates.lng}
              </Text>
            </View>
          </View>
        </View>
        <Button  title="rezerve" onPress={handleReservation}></Button>
        <MapView
          style={{ width: "100%", height: 300 }}
          initialRegion={{
            latitude: hotel.coordinates.lat,
            longitude: hotel.coordinates.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: hotel.coordinates.lat,
              longitude: hotel.coordinates.lng,
            }}
          />
        </MapView>
        <DateSelector buttonText="seç"></DateSelector>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaProvider>
  );
}
