import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 
export default function SearchPlace() {

    const navigation=useNavigation();
    const {tripData,setTripData}=useContext(CreateTripContext)
    
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
      console.log(details?.geometry.location);
      console.log(details?.photos[0]?.photo_reference);
      console.log(details?.url)
    }}
    query={{
      key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
      language: 'en',
    }}
  />
    </View>
  )
}