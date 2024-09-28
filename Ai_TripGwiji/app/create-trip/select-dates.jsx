import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

export default function SelectDates() {

  const navigation=useNavigation();
  return (
    <View>
      <Text>select dates</Text>
    </View>
  )
}