import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from 'expo-router'

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
      margin:30
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