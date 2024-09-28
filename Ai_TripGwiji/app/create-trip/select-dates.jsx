import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';

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
      backgroundColor: 'alice-blue',
      height:'100%'
    }}
    >
      <Text>select dates</Text>
    </View>
  )
}