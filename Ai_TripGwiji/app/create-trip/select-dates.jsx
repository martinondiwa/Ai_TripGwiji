import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { useEffect } from 'react';
import CalendarPicker from "react-native-calendar-picker";

export default function SelectDates() {

  const navigation=useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle: ''
    })
  },[])
  return (
    <View
    style={{
      padding:25,
      paddingTop:75,
      backgroundColor: 'aliceblue',
      height:'100%'
    }}
    >
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}
      >Travel Dates</Text>

      <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]}
          months={[
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ]}
          previousTitle="Anterior"
          nextTitle="Próximo"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: "Cochin",
            color: "#000000",
          }}
          onDateChange={this.onDateChange}
        />

    </View>
  )
}