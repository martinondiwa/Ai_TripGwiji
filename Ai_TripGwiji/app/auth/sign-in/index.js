import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { router, useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import { StyleSheet } from "react-native";

export default function SignIn() {
  const navigation = useNavigation();

  const router=useRouter();

  useEffect(() => {
    navigation.setOptions({
      headershown: false,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        marginTop: 80,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
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
             {/**Create Account */}
             <View 
             
             style={{
               padding:25,
               backgroundColor:Colors.WHITE,
               borderRadius:15, 
               marginTop:20,
               borderWidth:1
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
