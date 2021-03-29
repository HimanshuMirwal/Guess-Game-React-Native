import React, { useState } from "react";
import Card from "../Card";
import colors from "../../Constants/Colors";
import Input from "../Input";
import NumberContainer from "../NumberContainer";
import MyButton from "../MyButton";
import Color from "../../Constants/Colors";
import { Text, StyleSheet, View, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
const StartGameScreen = props => {
    const [EnteredNumber, SetEnteredValue] = useState("");
    const [StartGameSelectedValue, SetStartGameSelectedValue] = useState("");
    const [ConfirmState, setConfirm] = useState(false);
    const [SelectedValue, SetSelectedValue] = useState();
    const NumberInputHandler = InputText => {
        SetEnteredValue(InputText.replace(/^\D+/g, ''))
        console.log(InputText.replace(/^\D+/g, ''));
    }
    const ResetHandler = () => {
        SetEnteredValue("");
        setConfirm(false);

    }
    const ConfirmUserHandler = () => {
        const ChoosenValue = parseInt(EnteredNumber);
        if (isNaN(ChoosenValue) || ChoosenValue <= 0 || ChoosenValue > 99) {
            Alert.alert("Invalid number!", "Number has to be a number between 1 to 99.", [{ text: "Okay", style: "destructive", onPress: ResetHandler }])
            return;
        }
        setConfirm(true);
        SetSelectedValue(ChoosenValue);
        SetStartGameSelectedValue(ChoosenValue);
        SetEnteredValue("");
        Keyboard.dismiss();
    }
    const StartGameHandler = ()=>{
        props.ScreenHandler(StartGameSelectedValue);
    }
    let ConfirmOutput;
    if (ConfirmState) {
        ConfirmOutput = <Card styles={styles.SummeryContainer}>
            <Text style={styles.SummeryContainerText}>You Selected</Text>
            <NumberContainer>{SelectedValue}</NumberContainer>
            {/* <Button   onPress={}/> */}
            <MyButton  onPressToMyButton={StartGameHandler}>Start Game</MyButton>
        </Card>
    }
    return (
        <ScrollView>
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.ScreenStyle}>
                <Text style={styles.title} >Start the game</Text>
                <Card styles={styles.InputConatiner}>
                    <Text style={{fontFamily:"OpenSansRegular", fontSize:16}}>Select a number</Text>
                    <Input value={EnteredNumber} onChangeText={NumberInputHandler} styles={styles.TextInputStyle} autoCorrect={false} blurOnSubmit autoCapitalize="none" keyboardType="numeric" maxLength={2} />
                    <View style={styles.ButtonContainer}>
                        <MyButton    onPressToMyButton={ResetHandler} >Reset</MyButton>
                        <MyButton   onPressToMyButton={ConfirmUserHandler} >Confirm</MyButton>
                    </View>
                </Card>
                {ConfirmOutput}
            </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    ScreenStyle: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        alignContent: "center"
    },
    InputConatiner: {
        width:"80%",
        minWidth: 300,
        maxWidth: "95%",
        alignItems: "center",
    }
    ,
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily:"OpenSansBold"
        // margin vertical replaces margin bottom and top.
    }
    ,
    ButtonContainer: {
        // alignItems:"center",
        justifyContent: "space-evenly",
        width: "100%",
        paddingHorizontal: 15,
        flexDirection: "row",
        marginVertical: 20,
    },
    ButtonStyle: {
        width: "50"
    },
    TextInputStyle: {
        fontSize: 25,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        width: 70
    },
    SummeryContainer: {
        marginTop: 10,
        padding:"2%",
        alignItems:"center",
    },
    SummeryContainerText:{
        textAlign:"center",
        fontFamily:"OpenSansRegular",
        fontSize:16
    },
});

export default StartGameScreen;