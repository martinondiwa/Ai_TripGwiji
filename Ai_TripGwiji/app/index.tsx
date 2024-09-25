import { Text, View } from "react-native";
import { auth } from './../configs/FirebaseConfig';
import { Redirect } from "expo-router";
import Login from "@/Components/Login";

export default function Index() {
  const user = auth.currentUser;

  // If there is no user, directly return the Redirect
  if (!user) {
    return <Redirect href={'/mytrip'} />;
  }

  // If user exists, show their trips or any other content
  return (
    
     <View 
     style={{ flex:1, }} 
     > 
     {user? 
     <Redirect href={'/mytrip'}/>: 
     <Login/> 
     } 
     </View> 
    
  );
}
