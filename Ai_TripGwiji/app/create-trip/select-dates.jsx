import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { useEffect } from 'react';


export default function SelectDates() {

  const navigation=useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle: ''
    })
  },[])
  return (
    <View
    style={{
      padding:25,
      paddingTop:75,
      backgroundColor: 'aliceblue',
      height:'100%'
    }}
    >
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}
      >Travel Dates</Text>
    </View>
  )
}