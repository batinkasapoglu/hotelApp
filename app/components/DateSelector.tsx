import React, { useState } from "react";
import { View, Text, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

type props ={
  buttonText:string;
};

export default function DateSelector({buttonText}:props) {
  const [checkDate, setCheckDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChangeCheckIn = (event: any, selectedDate?: Date, ) => {
    setShowPicker(false); 

    if (selectedDate) {
      setCheckDate(selectedDate); 
    }
  };

  return (
    <View className="p-4">
      <Text className="text-lg mb-2">Seçilen Giriş Tarihi: {checkDate.toDateString()}</Text>

      <Button
        title={buttonText}
        onPress={() => setShowPicker(true)}
      />

      {showPicker && (
        <DateTimePicker
          value={checkDate}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "default"}
          onChange={onChangeCheckIn}
        />
      )}
    </View>
  );
}
