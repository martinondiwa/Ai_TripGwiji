import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from 'expo-router'
import {Colors} from './../../../constants/Colors'
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
      marginTop:80,
      backgroundColor:Colors.WHITE,
      height:'100%'
     }}
    >
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:30,
      }} 
      >Let's Sign You in</Text>
      <Text
      style={{
        fontFamily:'outfit',
        fontSize:30,
        Color:Colors.GRAY,
        marginTop:20
      }} 
      >Welcome Back</Text>
      <Text
      style={{
        fontFamily:'outfit',
        fontSize:30,
        Color:Colors.GRAY,
        marginTop:20
      }} 
      >You have been missed</Text>
      <View>
       <Text>Email</Text>
       <TextInput placeholder='Enter Email'></TextInput>
      </View>
    </View>
  )
}