import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props:any) => { 
    return (<View style={style.textInputContainer}>
        <TextInput style={style.numberInput} maxLength={2} keyboardType='number-pad' />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>);
}

const style = StyleSheet.create({
    textInputContainer: {
        padding: 16,
        marginHorizontal: 24,
        marginTop: 100,
        borderRadius: 8,
        backgroundColor: '#72063c',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowRadius: 6,
        shadowOpacity: .75,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default StartGameScreen;