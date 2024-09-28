import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from 'expo-router';
import CalendarPicker from "react-native-calendar-picker";

export default function SelectDates() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });
  }, [navigation]);

  // Use useState instead of constructor and this.state
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    if (type === "END_DATE") {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const minDate = new Date(); // Today
  const maxDate = new Date(2017, 6, 3);
  const startDate = selectedStartDate ? selectedStartDate.toString() : "";
  const endDate = selectedEndDate ? selectedEndDate.toString() : "";

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: 'aliceblue',
        height: '100%'
      }}
    >
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 35,
          marginTop: 20
        }}
      >
        Travel Dates
      </Text>

      <View style={styles.container}>
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
          onDateChange={onDateChange}
        />

        <View>
          <Text>SELECTED START DATE: {startDate}</Text>
          <Text>SELECTED END DATE: {endDate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
  },
});
