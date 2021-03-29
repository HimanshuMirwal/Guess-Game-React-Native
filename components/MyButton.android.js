import React from "react";
import {View, Button, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from "react-native";
import Color from "../Constants/Colors"
const MyButton = props =>{
    let ButtonType  = TouchableOpacity;
    if(Platform.Version > 21){
        ButtonType  = TouchableNativeFeedback;    
    }
    return (
        <View style={styles.ButtonContainer}>
        <TouchableNativeFeedback activeOpacity={0.6} onPress={props.onPressToMyButton}>
            <View style={styles.ButtonStyle}>
                <Text style={styles.ButtonTextStyle}>{props.children}</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    ButtonContainer:{
        borderRadius:25,
        overflow:"hidden"
    },
    ButtonStyle:{
        backgroundColor:Color.primary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25,
        textAlign:"center"
    },
    ButtonTextStyle:{
        color:"#fff",
        fontFamily:"OpenSansRegular",
        fontSize:18,
    }
})
export default MyButton;