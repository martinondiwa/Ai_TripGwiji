import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {colors} from './../../constants/Colors'


export default function TabLayout() {
  return (
<Tabs screenOptions={{
  headerShown:false,
  tabBarActiveTintColor:Colors
}}>
  <Tabs.Screen name="mytrip"
  options={{

  }}
  />
  <Tabs.Screen name="mytrip"
  options={{
    tabBarLabel:'My Trip',
    tabBarIcon:({color})=><EvilIcons name="location" size={24} color={color} />
  }}
  />
  <Tabs.Screen name="discover"/>
  <Tabs.Screen name="profile"/>
  
</Tabs>
  )
}