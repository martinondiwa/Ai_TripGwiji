import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function GenerateTrip() {
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

      <Text>Do not Go Back</Text>
      

    </View>
  )
}