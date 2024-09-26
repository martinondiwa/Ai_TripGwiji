import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';

export default function SearchPlace() {

    const navigation=useNavigation();
    
    useEffect(()=>{

        navigation.setOptions({
            headerShown:true,
            headerTransparent: true,
            headerTitle: 'Search'
        })
    },[navigation])

  return (
    <View 
    style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <Text>Search Place</Text> 
    </View>
  )
}