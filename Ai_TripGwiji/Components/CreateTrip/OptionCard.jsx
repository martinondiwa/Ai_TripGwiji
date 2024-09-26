import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function OptionCard({ option,selectedTraveler }) {
  return (
    <View
      style={[
        {
            padding: 25,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:Colors.WHITE,
            borderRadius:15
            
          },selectedTraveler==option.title&&{borderWidth:2}]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold"
          }}>{option?.title}</Text>

        <Text style={{
            fontSize: 17,
            fontFamily: "outfit",
            color: "#660C00"}} > {option?.desc} </Text>
      </View>
        <Text
        style={{fontSize:35}}
        >{option?.icon}</Text>
    </View>
  );
}
