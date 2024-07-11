import React, { FC, ReactNode } from "react";
import { TouchableOpacity, ViewStyle, StyleSheet, Dimensions, View} from 'react-native';
import Info from './icons/Info';
import {Colores} from './../constants/Colors';



const BotonInfo=  () => {
    const windowWidth = Dimensions.get('window').width;
    const diameter = windowWidth / 4;
    const iconDiameter = diameter / 1.4;
    const handlePress = () => {
            console.log("Ver info")
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={1}>
            <View style={[styles.borderWrapper, { width: diameter + 4, height: diameter + 8, borderRadius: (diameter + 4) / 2 }]}>
                <View style={[styles.button, { width: diameter, height: diameter }]}>
                    <Info width={iconDiameter} height={iconDiameter} color={Colores.turquesa}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    borderWrapper: {
        borderWidth: 4,
        borderColor: Colores.blanco,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: Colores.blanco,
        opacity: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:80
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default BotonInfo;