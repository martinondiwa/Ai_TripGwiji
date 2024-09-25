import { View, Text } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

export default function StartNewTripCard() {
  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center'
    }}
    >
      
      <Entypo name="location" size={40} color="black" />
      <Text>No trip planned yet</Text>
    </View>
  )
}