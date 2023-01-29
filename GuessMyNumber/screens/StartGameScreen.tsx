import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props:any) => { 
    return (<View style={style.startGameScreen}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>);
}

const style = StyleSheet.create({
    startGameScreen: {
        flex: 1,
    }
})

export default StartGameScreen;