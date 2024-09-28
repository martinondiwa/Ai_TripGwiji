import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

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
    }}
    >
      <Text>select dates</Text>
    </View>
  )
}