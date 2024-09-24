import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from "./../../../constants/Colors"; 

export default function SignUp() {
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
      paddingTop:50
    }}
    >
      <Text
      style={{
      fontFamily:'outfit-bold',
      fontSize:35
      }}
      >Create new Account</Text>
    </View>
  )
}