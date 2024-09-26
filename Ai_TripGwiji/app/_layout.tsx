import { Text, View } from "react-native";
import Login from './../Components/Login';
import { auth } from './../configs/FirebaseConfig';
import { Redirect, Stack } from "expo-router";
import {CreateTripContext} from  './../context/CreateTripContext'
export default function RootLayout() {
  // Remove the erroneous object and extra parenthesis
  const user = auth.currentUser;

  return (
    <CreateTripContext.Provider value={{}}>
    <Stack screenOptions={{
      headerShown: false
    }}>
      {/**<Stack.Screen name="index" options={{headerShown:false}}/>*/}
      <Stack.Screen name="(tabs)" />
    </Stack>
    </CreateTripContext.Provider>
  );
}
