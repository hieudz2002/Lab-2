import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import Lab2 from "./Lab2";

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>    
        <Lab2 />    
      </PaperProvider>
    </SafeAreaProvider>  
  );
};

export default App;


