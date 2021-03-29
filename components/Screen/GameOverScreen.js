import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image, Dimensions } from "react-native";
import MyButton from "../../components/MyButton";
import Color from "../../Constants/Colors";

const GameOverScreen = (props) => {
    const [orientation, setOrientation] = useState({ ResizeMode: "cover", stylesOfView: styles.TextContainer });
    const [TextContainer, SetTextContainer] = useState(Dimensions.get("window").width / 2);
    useEffect(() => {
        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation({
                    ResizeMode: "cover",
                    stylesOfView: styles.TextContainer
                });
                SetTextContainer(Dimensions.get("window").width / 2)

            } else {
                setOrientation({
                    ResizeMode: "stretch",
                    stylesOfView: styles.TextContainer
                })
                SetTextContainer(Dimensions.get("window").width / 2)

            }
        })

    }, [Dimensions.get("window").width, Dimensions.get("window").height]);
    return (
        <View style={styles.screen}>
            <Image resizeMode={orientation.ResizeMode} source={require('../../assets/success.png')} style={styles.imageStyles} />
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                padding: 10,
                backgroundColor: "rgba(0, 0, 0, .2)",
                height: Dimensions.get("window").height / 2,
                borderRadius: 10,
            }}>
                <Text style={styles.GameOverHeading}>Game is Over</Text>
                <Text style={styles.GameOverText}>Computer take {props.numberOfRounds} rounds to find value.</Text>
                <Text style={styles.GameOverText}>The number was {props.userEnteredValue}.</Text>
                {/* <Button title="" onPress={} /> */}
                <MyButton onPressToMyButton={props.RestartGameHandler}>New Game</MyButton>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    GameOverHeading: {
        color: Color.primary,
        fontFamily: "OpenSansBold",
        fontSize: 25,
        textDecorationLine: "underline",
    }
    ,
    GameOverText: {
        fontFamily: "OpenSansRegular",
        fontSize: 16,
        marginVertical: 10,
        color: "#fff"
    },
    imageStyles: {
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    TextContainer: {

    }
})

export default GameOverScreen;