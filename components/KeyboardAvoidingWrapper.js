import React from "react";

//keyboard avoiding view
import {
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

const KeyboardAvoidingWrapper = (props) => {
    return (
        <KeyboardAvoidingView style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {props.children}
                </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper;