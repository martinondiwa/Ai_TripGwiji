import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function TabLayout() {
  return (
<Tabs screenOptions={{
  headerShown:false
}}>
  <Tabs.Screen name="mytrip"
  options={{

  }}
  />
  <Tabs.Screen name="mytrip"
  options={{
    tabBarIcon:({color})=><EvilIcons name="location" size={24} color="black" />
  }}
  />
  <Tabs.Screen name="discover"/>
  <Tabs.Screen name="profile"/>
  
</Tabs>
  )
}