import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from "./../../context/CreateTripContext";
import { AI_PROMT } from '../../constants/Options';

export default function GenerateTrip() {
  const {tripData, setTripData}=useContext(CreateTripContext);

  const GenerateAiTrip=()=>{
     
    const FINAL_PROMT=AI_PROMT
    .replace('{location}',tripData?.locationInfo?.name)
    .replace('{totalDays}',tripData?.totalNoOfDays)
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