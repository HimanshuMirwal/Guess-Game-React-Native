import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert, ScrollView, SafeAreaView, Dimensions } from "react-native";
import NumberContainer from "../NumberContainer";
import Card from "../Card";
import MyButton from "../../components/MyButton";
import { Ionicons } from "@expo/vector-icons";

const randomNumberGenerator = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min) + min);
    if (random === exclude) {
        return randomNumberGenerator(min, max, exclude);
    } else {
        return random;
    }
}

const RenderItemList = (value, numberOfRound) => {
    return (<View key={value} style={styles.ListOfGuess}>
        <Text style={styles.ListOfTextGuess}>#{numberOfRound}</Text>
        <Text style={styles.ListOfTextGuess}>{value}</Text>
    </View>)
}


const GameScrren = props => {
    const initialGuess = randomNumberGenerator(1, 100, props.userEnteredValue)
    const [CurrentGuess, setCurrentGuess] = useState(initialGuess);
    const [PastGuess, SetPastGuess] = useState([initialGuess]);
    const [PastGuessRounds, SetPastGuessRounds] = useState([])
    const [availableDeviceWidth, setAvailableDeviceheight] = useState(Dimensions.get("window").height);
    const CurrentLow = useRef(1);
    const CurrentHigh = useRef(100);
    const [rounds, SetRounds] = useState(0);
    // It will run after render cycle for this component.
    const { userEnteredValue, GameOverHandler } = props;
    
    useEffect(()=>{
        const UpdateFunctionForNewDevice = ()=> {setAvailableDeviceheight(Dimensions.get("window").height);}
        Dimensions.addEventListener("change",UpdateFunctionForNewDevice);

        return  ()=>{
            Dimensions.removeEventListener("change",UpdateFunctionForNewDevice);
        }
    },[Dimensions.get("window").height])
    
    useEffect(() => {
        if (CurrentGuess === userEnteredValue) {
            GameOverHandler(PastGuess.length);
        }
    }, [CurrentGuess, userEnteredValue, GameOverHandler, Dimensions.get("window").height])
    const NextGuessValueHandler = value => {
        if ((value === "Lower" && CurrentGuess < props.userEnteredValue) || (value === "Higher" && CurrentGuess > props.userEnteredValue)) {
            Alert.alert("Don\t' lie!", "You know that is wrong......", [{ text: "Sorry!", style: "cancel" }]);
            return;
        }
        if (value === "Lower") {
            CurrentHigh.current = CurrentGuess;
        } else {
            CurrentLow.current = CurrentGuess + 1;
        }
        const number = randomNumberGenerator(CurrentLow.current, CurrentHigh.current, CurrentGuess);
        setCurrentGuess(number);
        SetPastGuess(PastGuess => [number, ...PastGuess]);
        SetPastGuessRounds(PastGuessRounds => [rounds, ...PastGuessRounds]);
        // SetRounds(rounds => rounds + 1);
    }

    if (Dimensions.get("window").height < 500) {
        return (
            <View style={styles.screen}>
                <Text style={{ fontFamily: "OpenSansRegular", fontSize: 16 }}>Computer's Guess</Text>
                <View style={styles.SmallerDevideStyle}>
                <MyButton onPressToMyButton={NextGuessValueHandler.bind(this, "Lower")}>
                    <Ionicons name="md-remove" color="#fff" size={27} />
                </MyButton>
                <NumberContainer>{CurrentGuess}</NumberContainer>
                <MyButton onPressToMyButton={NextGuessValueHandler.bind(this, "Higher")} >
                    <Ionicons name="md-add" color="#fff" size={27} />
                </MyButton>
                </View>
                <View style={styles.ListConstainer}>
                    <ScrollView>
                        {
                            PastGuess.map((Guessvalue, index) => RenderItemList(Guessvalue, PastGuess.length - index))
                        }
                    </ScrollView>
                </View>
            </View>)
    }else{
    return (
        <View style={styles.screen}>
            <Text style={{ fontFamily: "OpenSansRegular", fontSize: 16 }}>Computer's Guess</Text>
            <NumberContainer>{CurrentGuess}</NumberContainer>
            <Card styles={styles.buttonContainer}>
                <MyButton onPressToMyButton={NextGuessValueHandler.bind(this, "Lower")}>
                    <Ionicons name="md-remove" color="#fff" size={27} />
                </MyButton>
                <MyButton onPressToMyButton={NextGuessValueHandler.bind(this, "Higher")} >
                    <Ionicons name="md-add" color="#fff" size={27} />
                </MyButton>
            </Card>
            <View style={styles.ListConstainer}>
                <ScrollView>
                    {
                        PastGuess.map((Guessvalue, index) => RenderItemList(Guessvalue, PastGuess.length - index))
                    }
                </ScrollView>
            </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        marginBottom: 10,
        width: Dimensions.get("window").width,
        maxWidth: "80%",
        padding: 10
    },
    ListOfGuess: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 20,
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        width: "100%"
    },
    ListOfTextGuess: {
        fontFamily: "OpenSansRegular",
    },
    ListConstainer: {
        flex: 1,
        width: "80%"
    },
    SmallerDevideStyle:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:"80%"
    }
})
export default GameScrren;