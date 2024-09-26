import { View, Text } from "react-native";
import React from "react";

export default function OptionCard({ option }) {
  return (
    <View
      style={{
        padding: 25,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'outfit-bold',
          }}>{option?.title} </Text>

      </View>
      <View>
      <Text
        style={{
          fontSize: 17,
          fontFamily: 'outfit',
        }}>{option?.desc} </Text>

    </View>

    <View>
    <Text
      style={{
        fontSize: 17,
        fontFamily: 'outfit-bold',
      }}>{option?.desc} </Text>

  </View>
    </View>
  );
}
