import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { useEffect } from "react";
import CalendarPicker from "react-native-calendar-picker";

export default function SelectDates() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: "aliceblue",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>
      <View
      style={{
        marginTop:30
      }}
      >
        <CalendarPicker onDateChange={this.onDateChange} 
        allowRangeSelection={true}
        minDate={new Date}
        maxRangeDuration={20}
        />
        <View>
          <TouchableOpacity style={{
            padding:15,
            backgroundColor:Colors.PRIMARY,
            borderRadius: 15
          }}>
                <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
