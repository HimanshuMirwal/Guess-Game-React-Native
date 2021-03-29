import React, { useState } from 'react';
import Header from "./components/Header";
import StartGameScreen from "./components/Screen/StartGameScreen";
import {StyleSheet, View, SafeAreaView} from "react-native";
import GameScreen from "./components/Screen/GameScrren";
import GameOverScreen from "./components/Screen/GameOverScreen";
import { useFonts } from 'expo-font';

export default function App() {
  const [selectedNumber, SetSelectedNumber] = useState();
  const [numberOfRounds, SetnumberOfRounds] = useState(0);
  const [loaded] = useFonts({
   OpenSansBold : require('./assets/fonts/OpenSans-Bold.ttf'),
   OpenSansRegular : require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  const ScreenHandler = value =>{
    // console.log(value);
    SetSelectedNumber(value);
    SetnumberOfRounds(0);

  } 
  const GameOverHandler = value =>{
      SetnumberOfRounds(value);
  }
  const RestartGameHandler = ()=>{
    SetSelectedNumber("");
    SetnumberOfRounds(0);
  }
  let DefaultScreen = <StartGameScreen ScreenHandler={ScreenHandler} />
  if(selectedNumber && numberOfRounds <=0){
    DefaultScreen =  <GameScreen userEnteredValue = {selectedNumber} GameOverHandler={GameOverHandler} />
  }else if(numberOfRounds > 0){
    DefaultScreen = <GameOverScreen RestartGameHandler={RestartGameHandler} userEnteredValue = {selectedNumber} numberOfRounds = {numberOfRounds}/>
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header Title={"Guess a number"} />
      {DefaultScreen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
