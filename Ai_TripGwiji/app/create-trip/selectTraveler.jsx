import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation} from 'expo-router'
import { Colors } from '../../constants/Colors';
import { FlatList } from 'react-native';
import { SelectTravelesList } from '../../constants/Options';
import OptionCard from '../../Components/CreateTrip/OptionCard';
import { TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { CreateTripContext } from '../../context/CreateTripContext';


export default function selectTraveler() {

    const navigation=useNavigation();
    const [selectedTraveler,setSelectedTraveler]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext);

    useEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle: ''
      })
    },[])
    useEffect(()=>{
        setTripData({...tripData,
            traveler:selectedTraveler

        })
    },[selectedTraveler]);
    useEffect(()=>{
        console.log(tripData);
    }, [tripData])
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
       data={SelectTravelesList}
       renderItem={({item,index})=>(
        <TouchableOpacity 
        onPress={()=>setSelectedTraveler(item)}
        style={{
            marginVertical:10
        }}
        >
        <OptionCard option={item} selectedTraveler={selectedTraveler}/>
        </TouchableOpacity>
       )}
       />
      </View>
      <TouchableOpacity>
       <Text></Text>
      </TouchableOpacity>
    </View>
  )
}