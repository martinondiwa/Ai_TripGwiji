import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <Image
        source={require("./../assets/images/download.png")}
        style={{
          width: "100%",
          height: 400,
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
            color: Colors.GRAY, // Fixed the color property
            marginTop: 20,
          }}
        >
          Discover tailor-made travel experiences with ease. From dream
          destinations to budget-friendly stays, let us plan your perfect
          journey. Start exploring today!
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => router.push("/auth/sign-in")}
            style={{ alignItems: "center" }} // Ensure text is centered
          >
            <Text
              style={{
                color: Colors.WHITE,
                fontFamily: "outfit",
                fontSize: 17,
          
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Ensure the wrapper takes full height
  },
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
    alignItems: "center", // Center the button contents
    
  },
});
