import { View, Text, Image } from 'react-native'
import React from 'react'


export default function Login() {
  return (
    <View>
         <Image src={require('./../assets/images/logom.JPG')} 
         style={{
          width:'100',
          height:500
         }}/>
    </View>
  )
}