import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function SignIn() {
  const navigation=useEffect();
   useEffect(()=>{
    navigation.set0ptions({
      headershown:false
    })
   },[])
  return (
    <View>
      <Text>Sign In</Text>
    </View>
  )
}