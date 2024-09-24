import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View >
    
        
        <Image  source={require('./../assets/images/download.png')} 
        style={{ 
         width:'100%',
         height:400
        }}/>
        
        <View style={styles.container}>
        <Text style={{fontSize:25, fontFamily:'outfit-bold', textAlign:'center'}}>Trip Gwiji, Your Most Trusted Ai-Travel Planner</Text>
        <Text>Discover tailor-made travel experiences with ease. From dream destinations to budget-friendly stays, let us plan your perfect journey. Start exploring today!</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    marginTop:-20,
    borderTopLeftRadius:20,
    borderTopRightRadius:30,
    height:'100%',
    padding: 15
  }
})