import { Text, View } from "react-native";
import Login from './../Components/Login'
import {auth} from './../configs/FirebaseConfig'
import { Redirect, Stack } from "expo-router";
export default function RootLayout() {
  'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
  'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf')
})
  
  const user=auth.currentUser;

  return (
 <Stack screenOptions={{
  headerShown:false
 }}>
  {/**<Stack.Screen name="index" options={{headerShown:false}}/>*/}

  <Stack.Screen name="(tabs)"/>
 </Stack>
  );
}