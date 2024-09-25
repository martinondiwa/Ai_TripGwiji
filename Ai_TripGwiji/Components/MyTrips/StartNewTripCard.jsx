import { View, Text } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';

export default function StartNewTripCard() {
  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:20
    }}
    >
      
      <Entypo name="location" size={40} color="black" />
      <Text
      style={{
        fontSize:25,
        fontFamily:'outfit-medium'
       
      }}
      >No trip planned yet</Text>

      <Text
      style={{
        fontSize:20,
        fontFamily:'outfit',
        textAlign:'center',
        color:Colors.GRAY
       
      }}
      >Looks like it's time to plan a new travel experience! Get Started below</Text>

      <TouchableOpacity>
       <Text>Start a New Trip</Text>
      </TouchableOpacity>
      
    </View>
  )
}