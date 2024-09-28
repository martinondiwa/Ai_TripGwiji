import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { CreateTripContext } from '../../context/CreateTripContext';


export default function ReviewTrip() {

    const navigation=useNavigation();
    const {tripData,setTripData}=useContext(CreateTripContext);

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
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
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}
      >Review your trip</Text>
     <View style={{
        marginTop:20
     }}>
     <Text
     style={{
        fontFamily:'outfit-bold',
        fontSize:20
     }}
     > Before generating your trip, please riview your selection</Text>
     </View>
     <View>
     <View style={{
        marginTop:20
     }}>
     <EvilIcons name="location" size={34} color="black" />
     </View>
     <View>
     <Text>Destination</Text>
     <Text>Destination</Text>
     </View>
     </View>
    </View>
  )
}