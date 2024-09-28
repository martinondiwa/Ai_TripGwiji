import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import OptionCard from './../../Components/CreateTrip/OptionCard';
import { SelectBudgetOptions } from '../../constants/Options';
import { TouchableOpacity } from 'react-native';

export default function SelectBudget() {
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
        <TouchableOpacity
        onPress={()=>setSelectedOption(item)}
         style={{marginVertical:10}}>
           <OptionCard option={item} selectedOption={selectedOption}/>
        </TouchableOpacity>
       )}
       />
      </View>
    </View>
  )
}