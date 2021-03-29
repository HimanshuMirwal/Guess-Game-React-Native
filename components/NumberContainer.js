import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../Constants/Colors"
const NumberContainer = props => {
    return (
        <View style={styles.Container}>
            <Text style={styles.numberText}>
                {props.children}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        borderWidth:1,
        borderColor:Color.primary,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        padding:10,
        marginVertical:10,
        alignContent:"center",
        justifyContent:"center",
        width:50
    },
    numberText:{
        color:Color.accent,
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    }
})

export default NumberContainer;