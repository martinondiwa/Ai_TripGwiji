import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function ReviewTrip() {

    const navigation=useNavigation();

    useEffect(())
  return (
    <View>
      <Text>review-trip</Text>
    </View>
  )
}