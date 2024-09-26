import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function SearchPlace() {

    const navigation=useNavigation();
    
    useEffect(()=>{

        navigation.setOptions({
            headershown:true,
            headerTransparent: true,
        })
    },[])
    
  return (
    <View>
      <Text>Search Place</Text> 
    </View>
  )
}