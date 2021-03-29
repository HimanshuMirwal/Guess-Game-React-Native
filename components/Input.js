import React from "react";
import {StyleSheet, TextInput} from "react-native";

const Input = props =>{
    return (
        <TextInput  {...props}  style={{...props.styles, ...styles.InputTextStyle}} />
    )
}
const styles = StyleSheet.create({
    InputTextStyle:{
        height:30,
        borderBottomColor:"grey",
        textAlign:"center",
        marginVertical:10,

    }
});

export default Input;