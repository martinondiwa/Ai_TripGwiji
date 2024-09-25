import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {Colors} from './../../constants/Colors'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function TabLayout() {
  return (
<Tabs screenOptions={{
  headerShown:false,
  tabBarActiveTintColor:Colors.PRIMARY
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
  <Tabs.Screen name="discover"
  options={{
    tabBarLabel:'Discover',
    tabBarIcon:({color})=><FontAwesome5 name="globe-africa" size={24} color={color} />
  }}
  />
  <Tabs.Screen name="profile"
  options={{
    tabBarLabel:'Profile',
    tabBarIcon:({color})=><EvilIcons name="location" size={24} color={color} />
  }}
  />
  
</Tabs>
  )
}