import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from 'expo-router'
import {colors} from './../../../constants/Colors'
export default function SignIn() {
  const navigation=useNavigation();
   useEffect(()=>{
    navigation.setOptions({
      headershown:false
    })
   },[])
  return (
    <View
     style={{
      padding:25,
      marginTop:60
     }}
    >
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:30,
      }} 
      >Let's Sign You in</Text>
    </View>
  )
}