import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

export default function SelectBudget() {
    const navigation=useNavigation();

    
  return (
    <View>
      <Text>select-budget</Text>
    </View>
  )
}