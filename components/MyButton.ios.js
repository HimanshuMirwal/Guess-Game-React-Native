import React from "react";
import {View, Button, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from "react-native";
import Color from "../Constants/Colors"
const MyButton = props =>{
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPressToMyButton}>
            <View style={styles.ButtonStyle}>
                <Text style={styles.ButtonTextStyle}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
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