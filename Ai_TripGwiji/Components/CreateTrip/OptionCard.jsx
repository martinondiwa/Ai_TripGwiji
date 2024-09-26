import { View, Text } from "react-native";
import React from "react";

export default function OptionCard({ option }) {
  return (
    <View
      style={{
        padding: 25,
        display:'flex',
        flexDirection:'row',
      }}
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
