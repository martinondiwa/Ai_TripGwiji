import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation} from 'expo-router'
import { Colors } from '../../constants/Colors';

export default function selectTraveler() {

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
        backgroundColor:Colors.GRAY,
        height:'100%'
    }}
    >
      <Text>selectTraveler</Text>
    </View>
  )
}