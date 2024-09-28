import { View, Text, FlatList, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
import OptionCard from './../../Components/CreateTrip/OptionCard';
import { SelectBudgetOptions } from '../../constants/Options';
import { TouchableOpacity } from 'react-native';
import { CreateTripContext } from '../../context/CreateTripContext';
import { Colors } from '../../constants/Colors';

export default function SelectBudget() {
    const navigation=useNavigation();

    const [selectedOption,setSelectedOption]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const router=useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[]);

    useEffect(()=>{
          
        selectedOption&&setTripData({
            ...tripData,
            budget:selectedOption?.title
        })
    },[selectedOption])

    const OnClickContinue=()=>{

        if(!selectedOption)
        {
            ToastAndroid.show('Select Your Budget', ToastAndroid.LONG);
            return;
        }

        router.push('/create-trip/review-trip');
    }

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
        height:'auto',
        backgroundColor:'lightblue',
        borderRadius:15
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
       <View>
       <TouchableOpacity

       onPress={OnClickContinue()}
       
       style={{
         padding:15,
         backgroundColor:Colors.PRIMARY,
         borderRadius: 15,
         marginTop:35
       }}>
             <Text
             style={{
               fontFamily:'outfit-medium',
               color:'aliceblue',
               textAlign:'center',
               fontSize:20
             }}
             >Continue</Text>
       </TouchableOpacity>
       </View>
      </View>
     
    </View>
  )
}