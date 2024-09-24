import { View, Text , TextInput} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from "./../../../constants/Colors"; 
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function SignUp() {
  const navigation=useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headershown:false
    })
  },[])
  return (
    <View
    style={{
      padding:25,
      paddingTop:50
    }}
    >
      <Text
      style={{
      fontFamily:'outfit-bold',
      fontSize:35
      }}
      >Create new Account</Text>

      {/**Full name*/}
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Full Name"></TextInput>
      </View>

      {/**Email */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email"></TextInput>
      </View>
            {/**Password */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Enter Password"></TextInput>
      </View>

      {/**Sign In Button */}
      <View 
      style={{
        padding:25,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15, 
        marginTop:50
      }}>
      <Text
     style={{
      color:Colors.WHITE,
      textAlign:'center'
     }}
      >Sign In</Text>
      </View>
       
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
  },
});