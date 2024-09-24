import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
    
         <Image source={require('./../assets/images/download.png')} 
         style={{ 
          width:'100%',
          height:500
         }}/>

         <Text style={{fontSize:25, fontFamily:'outfit-bold'}}>Trip Gwiji, Your Most Trusted Ai-Travel Planner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE
  }
})