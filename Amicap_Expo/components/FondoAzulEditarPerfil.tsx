import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Keyboard, Platform } from 'react-native';
import { Colores } from './../constants/Colors';

const FondoAzulEditarPerfil = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const rectangleHeight = keyboardVisible ? windowHeight * 0.6 : windowHeight * 0.9;

    return (
        <View style={[styles.container, { width: windowWidth }]}>
            <View style={[styles.rectangle, { height: rectangleHeight }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        position: 'absolute',
        alignItems: 'center',
        top: Dimensions.get('window').height * 0.1,
    },
    rectangle: {
        width: '100%',
        backgroundColor: Colores.turquesa,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
    },
});

export default FondoAzulEditarPerfil;
