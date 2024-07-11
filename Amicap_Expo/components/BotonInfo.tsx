import React, { FC, ReactNode } from "react";
import { TouchableOpacity, ViewStyle, StyleSheet, Dimensions, View} from 'react-native';
import Info from './icons/Info';
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
                    <Info/>
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
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default BotonInfo;