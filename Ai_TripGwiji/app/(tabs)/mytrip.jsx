import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MyTrip() {
  return (
    <View 
    style={{
      padding:25,
      paddingTop:55,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}
    >
    <View>
    <Text
    style={{
      fontFamily:'outfit-bold',
      fontSize:35
    }}
    >My Trips</Text>
    <Ionicons name="add-circle-outline" size={50} color="black" />
  </View>
    </View>
  )
}