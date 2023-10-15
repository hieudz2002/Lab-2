import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ContactsScreen from "./src/screens/ContactsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createStackNavigator();

const CustomNavigationBar_Lab2 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Contacts"
        screenOptions={
          {
            headerTintColor: "white",
            headerStyle: {backgroundColor:"blue"},
            headerTitleAlign: "center",  
          }
        }
      >
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CustomNavigationBar_Lab2

const styles = StyleSheet.create({});
