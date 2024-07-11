import React, { FC, ReactNode } from "react";
import { TouchableOpacity, Text, TextStyle, ViewStyle, StyleSheet, Dimensions, View} from 'react-native';
import Infoi from './icons/Info';
import {Colores} from './../constants/Colors';


interface Props {
    styleContainer?: ViewStyle,
}

const BotonInfo: FC<Props> = ({styleContainer}) => {
    const windowWidth = Dimensions.get('window').width;
    const diameter = windowWidth / 4;
    const borderDiameter = diameter + 4;
    const handlePress = () => {
            //función llamar
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={1}>
            <View>
                <View style={[styles.button, { width: diameter, height: diameter }]}>
                    <Infoi/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colores.naranja,
        opacity: 0.7,
        borderRadius: 80
    },
    border:{
        backgroundColor: Colores.blanco,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

export default BotonInfo;