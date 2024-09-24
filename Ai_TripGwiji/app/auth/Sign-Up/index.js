import { View, Text, TextInput } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import createUserWithEmailAndPassword from 'firebase/auth';
import { auth } from "../../../configs/FirebaseConfig";
import { useState } from "react";
import { getAuth } from "firebase/auth";


export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [fullName,setFullName]=useState();

  useEffect(()=>{
    navigation.setOptions({
      headershown: false,
    });
  }, []);

   const OnCreateAccount=()=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
    // ..
  });

   }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
        backgroundColor: Colors.WHITE,
        height:'100%'
      }}
    > 
    <TouchableOpacity onPress={()=>router.back()}><Ionicons name="chevron-back-circle" size={24} color="black" /></TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop:30
        }}
      >
        Create new Account
      </Text>

      {/**Full name*/}
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          onChangeText={setFullName}
        ></TextInput>
      </View>

      {/**Email */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email"  onChangeText={setEmail}></TextInput>
      </View>
      {/**Password */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={setPassword}
        ></TextInput>
      </View>

      {/**Sign In Button */}
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </View>
      {/**Create Account */}
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
          alignItems:'center'
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("/auth/sign-in")}
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
           
          }}
        >
          <Text> Sign In</Text>
        </TouchableOpacity>
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
