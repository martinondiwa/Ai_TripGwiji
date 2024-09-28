import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { useEffect } from "react";
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { useContext } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";


export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate,setStartDate]=useState();
  const [endDate,setEndDate]=useState();
  const {tripData,setTripData}=useContext(CreateTripContext);
 const router=useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, [])
   
  const onDateChange=(date,type)=>{
    console.log(date,type);
    if (type=='START_DATE'){
      setStartDate(moment(date))
    }
    else {
      setEndDate(moment(date))
    }
  }
  const OnDateSelectionContinue=()=>{

    if (!startDate&&!endDate)
    {
      ToastAndroid.show('Please set Start and End Date', ToastAndroid.LONG)
      return ;

    }
    const totalNoOfDays=endDate.diff(startDate,'days');
    console.log(totalNoOfDays+1);
    setTripData({
      ...tripData,
      startDate:startDate,
      endDate:endDate,
      totalNoOfDays:totalNoOfDays+1
    });
    router.push('/create-trip/select-budget')
  }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: "aliceblue",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>
      <View
      style={{
        marginTop:30
      }}
      >
        <CalendarPicker onDateChange={onDateChange} 
        allowRangeSelection={true}
        minDate={new Date}
        maxRangeDuration={20}
        />
        <View>
          <TouchableOpacity

          onPress={OnDateSelectionContinue}
          
          style={{
            padding:15,
            backgroundColor:Colors.PRIMARY,
            borderRadius: 15,
            marginTop:35
          }}>
                <Text
                style={{
                  fontFamily:'outfit-medium',
                  color:'aliceblue',
                  textAlign:'center',
                  fontSize:20
                }}
                >Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
