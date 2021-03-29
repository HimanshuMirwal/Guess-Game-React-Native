import React from "react";
import {View, StyleSheet} from "react-native";

const Card = props =>{
    // console.log({...styles.Card, ...props.styles})
    return(
        <View style={{...styles.CardStyle, ...props.styles}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    CardStyle:{
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:"white",
        elevation:5,
        marginTop:15,
        borderRadius:10,
    }
});
export default Card;