import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TouchableOpacity } from "react-native";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.GRAY,
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
        Review your trip
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          {" "}
          Before generating your trip, please riview your selection
        </Text>
      </View>
      <View>
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <EvilIcons name="location" size={34} color="black" />

          <View>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 20,
                color: "goldenbrown",
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>
          
    
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
         <EvilIcons name="calendar" size={24} color="black" />

          <View>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 20,
                color: "goldenbrown",
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {moment(tripData?.startDate).format('DD MMM') +"  "
                +" To  "+ 
                moment(tripData.endDate).format('DD MMM') +"  "}
                ({tripData?.totalNoOfDays} days)
                  
            </Text>
          </View>
        </View>

        
        
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
         <Ionicons name="people" size={24} color="black" />

          <View>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 20,
                color: "goldenbrown",
              }}
            >
              Who is travelling ?
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
             {tripData?.traveler?.title}
                  
            </Text>
          </View>
        </View>

        
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <FontAwesome6 name="money-bill-1" size={24} color="black" />

          <View>
            <Text
              style={{
                fontFamily: "outfit-regular",
                fontSize: 20,
                color: "goldenbrown",
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
             {tripData?.budget}
                  
            </Text>
          </View>
        </View>
        
        <View>
       <TouchableOpacity

       onPress={OnClickContinue()}
       
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
