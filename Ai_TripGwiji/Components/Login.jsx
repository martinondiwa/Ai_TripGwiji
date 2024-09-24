import { View, Text, Image } from 'react-native'
import React from 'react'


export default function Login() {
  return (
    <View>
    
         <Image source={require('./../assets/images/download.png')} 
         style={{ 
          width:'100%',
          height:500
         }}/>

         <Text>Trip Gwiji, Your Most Trusted Ai-Travel Planner</Text>
    </View>
  )
}