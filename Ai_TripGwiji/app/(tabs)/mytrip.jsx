import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

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
    <Text>MyTrip</Text>
  </View>
    </View>
  )
}