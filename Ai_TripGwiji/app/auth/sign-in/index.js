import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect } from "react";
import { router, useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import { StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";
import { getAuth } from "firebase/auth";
import { useState } from "react";

export default function SignIn() {
  const navigation = useNavigation();
  const router=useRouter();
  
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  useEffect(() => {
    navigation.setOptions({
      headershown: false,
    });
  }, []);

  const onSignIn=()=>{
     if(!email&&!password)
     {
      ToastAndroid.show("Please Enter Email & Password",ToastAndroid.LONG)
      return;
     }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip');
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,error.code);
    if(errorCode=='auth/invalid-credential')
    {
      ToastAndroid.show("Invalid credentials", ToastAndroid.LONG)
    }
  });
  }
  return (
    <View
      style={{
        padding: 25,
        marginTop: 40,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
       <TouchableOpacity onPress={()=>router.back()}><Ionicons name="chevron-back-circle" size={24} color="black" /></TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        Let's Sign You in
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          Color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          Color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        You have been missed
      </Text>
      {/**Email */}
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput style={styles.input} onChangeText={(value)=>setEmail(value)} placeholder="Enter Email"></TextInput>
      </View>
            {/**Password */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true}  onChangeText={(value)=>setPassword(value)}  placeholder="Enter Password"></TextInput>
      </View>
            {/**Sign In Button */}
            <View 
            style={{
              padding:25,
              backgroundColor:Colors.PRIMARY,
              borderRadius:15, 
              marginTop:50
            }}>
            <TouchableOpacity
            onPress={onSignIn}
          
            ><Text  style={{
              color:Colors.WHITE,
              textAlign:'center'
             }}>Sign In</Text></TouchableOpacity>
            </View>
             {/**Create Account */}
             <View 
             
             style={{
               padding:25,
               backgroundColor:Colors.WHITE,
               borderRadius:15, 
               marginTop:20,
               borderWidth:1,
               alignItems:'center'
             }}>
             <TouchableOpacity
             onPress={()=>router.replace('auth/Sign-Up')}
            style={{
             color:Colors.PRIMARY,
             textAlign:'center'
            }}
             ><Text> Create Account</Text></TouchableOpacity>
             </View>
    </View>
  );
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
