import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import OptionCard from "./../../Components/CreateTrip/OptionCard";
import { SelectBudgetOptions } from "../../constants/Options";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    selectedOption &&
      setTripData({
        ...tripData,
        budget: selectedOption?.title,
      });
  }, [selectedOption]);

  return (
    <View
      style={{
        paddingTop: 75,
        padding: 25,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Budget
      </Text>
      <View
        style={{
          marginTop: 20,
          height: "100%",
          backgroundColor: "lightblue",
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          Choose sending habits for your trip
        </Text>

        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              style={{ marginVertical: 10 }}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 13,
          }}
        >
          <Link
            href={"/create-trip/select-dates"}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: Colors.WHITE,
                fontFamily: "outfit-medium",
              }}
            >
              Continue
            </Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}
