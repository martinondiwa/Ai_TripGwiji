import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function GenerateTrip() {
  return (
    <View
    style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.GRAY,
        height:'100%'
    }}
    >
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        textAlign:'center'
      }}
      >generate-trip</Text>
    </View>
  )
}