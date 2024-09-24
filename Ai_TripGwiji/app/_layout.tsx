import { Stack } from "expo-router";
import {useFonts} from "expo-font"
export default function RootLayout() {
  
useFonts({
'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
'outfit-mediunm':require('./../assets/fonts/Outfit-Medium.ttf'),
'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),

})

  return (
  <Stack>
  {/** <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
    </Stack>*/}
    
    <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}
