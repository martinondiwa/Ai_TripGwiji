import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
export default function SignUp() {
  const navigation=useNavigation();
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  )
}