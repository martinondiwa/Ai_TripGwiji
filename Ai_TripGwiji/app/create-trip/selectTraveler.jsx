import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function selectTraveler() {

    useEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
      })
    },[])
  return (
    <View>
      <Text>selectTraveler</Text>
    </View>
  )
}