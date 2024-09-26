import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchPlace() {

    const navigation=useNavigation();
    
    useEffect(()=>{

        navigation.setOptions({
            headerShown:true,
            headerTransparent: true,
            headerTitle: 'Search'
        })
    },[navigation])

  return (
    <View 
    style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
    <GooglePlacesAutocomplete
    placeholder='Search'
    fetchDetails={true}
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data.description);
    }}
    query={{
      key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
      language: 'en',
    }}
  />
    </View>
  )
}