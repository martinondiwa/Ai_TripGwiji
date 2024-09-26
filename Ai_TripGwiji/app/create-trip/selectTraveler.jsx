import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation} from 'expo-router'
import { Colors } from '../../constants/Colors';
import { FlatList } from 'react-native';
import
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
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20
      }}>Who's Travelling?</Text>

      <View style={{
        marginTop:20
      }}>
       <Text style={{
        fontFamily:'outfit-bold',
        fontSize:23
       }}> Choose Your Travellers</Text>
       <FlatList
       data={{SelectTravelesList}}
       />
      </View>
    </View>
  )
}