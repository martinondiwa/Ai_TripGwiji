import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { FontDisplay } from "expo-font";
import { useRouter } from "expo-router";

export default function Login() {
  const router= useRouter()
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("./../assets/images/download.png")}
        style={{
          width: "100%",
          height: 520,
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          Trip Gwiji, Your Most Trusted Ai-Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            Color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Discover tailor-made travel experiences with ease. From dream
          destinations to budget-friendly stays, let us plan your perfect
          journey. Start exploring today!
        </Text>
      </View>
      <View style={styles.button}>
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontFamily: "outfit",
            fontSize: 17,
          }}
        >
          Sign in with Google
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "20%",
  },
});
