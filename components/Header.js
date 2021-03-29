import React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";
import Colors from "../Constants/Colors";
import color from "../Constants/Colors";
const Header = props =>{
    return (
        <View style={{...style.Header,...Platform.select({
            android:style.HeaderAndroid,
            ios:style.HeaderIos
        })
        }}>
            <Text style={style.HeaderTitle}>{props.Title}</Text>
        </View>
    )
} ;

const style = StyleSheet.create({
    Header : {
        width:"100%",
        height:90,
        paddingTop:40,
        alignItems:"center",
        justifyContent:"center",
    },
    HeaderIos:{
        backgroundColor:"white",
        borderBottomColor:"#ccc",
        borderBottomWidth:2,
      
    },
    HeaderAndroid:{
        backgroundColor:color.primary,
        borderBottomColor:"transparent",
        borderBottomWidth:0,
    },
    HeaderTitle:{
        color:Platform.OS==="android"?"#fff":Colors.primary,
        fontSize:25,
        fontFamily:"OpenSansBold",
        textShadowRadius:20
    }

});

export default Header;