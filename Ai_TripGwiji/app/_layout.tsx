import { Stack } from "expo-router";
import {useFonts} from "expo-font"
export default function RootLayout() {
useFonts({
'outfit':require('./../assets/fonts/Outfit-Regular'),
'outfit-mediunm':require('./../assets/fonts/Outfit-Medium'),
'outfit-bold':require('./../assets/fonts/Outfit-Bold'),

})

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
