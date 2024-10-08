import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from "./../../context/CreateTripContext";
import { AI_PROMT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModal';
import { useRouter } from 'expo-router';
import {auth,db} from './../../configs/FirebaseConfig'
import {doc,setDoc} from 'firebase/firestore';

export default function GenerateTrip() {
  const {tripData, setTripData}=useContext(CreateTripContext);

  const [loading,setLoading]=useState(false);
  const router=useRouter();
  const user=auth.currentUser;
  useEffect(()=>{
    tripData&&GenerateAiTrip()
  },[tripData])

  const GenerateAiTrip=async()=>{

    setLoading(true);
     
    const FINAL_PROMT=AI_PROMT
    .replace('{location}',tripData?.locationInfo?.name)
    .replace('{totalDays}',tripData?.totalNoOfDays)
    .replace('{totalNight}',tripData?.totalNoOfDays-1)
    .replace('traveler', tripData?.traveler?.title)
    .replace('{budget}',tripData.budget)
    .replace('{totalDays}',tripData?.totalNoOfDays)
    .replace('{totalNight}',tripData.totalNoOfDays-1);

    console.log(FINAL_PROMT);

    const result = await chatSession.sendMessage(FINAL_PROMT);
    console.log(result.response.text());
    const tripResp=JSON.parse(result.response.text());
    setLoading(false)
     const docId=(Date.now()).toString();
     const result_=await setDoc(doc(db,"userTrips", docId),{
      userEmail:user.email,
      tripData:tripResp
     })
   
      router.push('(tabs)/mytrip');
    
  }

  return (
    <View
    style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'orange',
        height:'100%'
    }}
    >
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        textAlign:'center'
      }}
      >Please Wait.....</Text>

      <Text
      style={{
        fontFamily:'outfit-medium',
        fontSize:18,
        textAlign:'center',
        marginTop:40
      }}
      > We are working to generate your dream trip</Text>

      <Image source={'./../../assets/images/adaptive-icon.png'} 
      style={{
        width:'100%',
        height:300, 
        objectFit:'contain'
      }}
      />

      <Text
      style={{
        fontFamily:'outfit',
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'center'
      }}
      >Do not Go Back</Text>
      

    </View>
  )
}