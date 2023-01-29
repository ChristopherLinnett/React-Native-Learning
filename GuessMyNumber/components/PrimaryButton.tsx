import React from "react";
import { View, Text } from "react-native";

const PrimaryButton = (props: {children?:String}) => { 
    return (<View>
        <Text>{props.children}</Text>
    </View>);
}

export default PrimaryButton;