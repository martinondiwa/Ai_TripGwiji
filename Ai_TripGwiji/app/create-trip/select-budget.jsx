import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import OptionCard from './../../Components/CreateTrip/OptionCard'

export default function SelectBudgetOptions() {
    const navigation=useNavigation();

    const [selectedOption,setSelectedOption]=useState();

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
        paddingTop:75,
        padding:25
    }}>
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}
      >Budget</Text>
      <View
      style={{
        marginTop:20,
        height:'100%',
        backgroundColor:'lightblue'
      }}
      >
       <Text
       style={{
        fontFamily:'outfit-bold',
        fontSize:20
       }}
       >Choose sending habits for your trip</Text>

       <FlatList
       data={SelectBudgetOptions}
       renderItem={({item,index})=>(
        <View>
           <OptionCard option={item} selectedOption={selectedOption}/>
        </View>
       )}
       />
      </View>
    </View>
  )
}