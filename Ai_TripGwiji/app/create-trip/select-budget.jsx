import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function SelectBudget() {
    const navigation=useNavigation();

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
        marginTop:20
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
        
       )}
       />
      </View>
    </View>
  )
}