import React, { FC } from "react";
import { TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import Info from './icons/info';
import { Colores } from './../constants/Colors';

interface Info{
    id: number
    titulo:string
    informacion: string
  }

  interface Props {
    navigation: any;
    informacion?: Info[],
    key?: number,
    onPress?: () => void
  }

const BotonInfo: FC<Props> = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const diameter = windowWidth / 5.45;
    const iconDiameter = diameter / 1.4;
    
    
    const handlePress = () => {
        navigation.navigate('InfoGeneral');
    };
    
 
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={1}>
            <View style={[styles.borderWrapper, { width: diameter + 4, height: diameter + 4, borderRadius: (diameter + 4) / 2 }]}>
                <View style={[styles.button, { width: diameter, height: diameter, borderRadius: diameter / 2 }]}>
                    <Info width={iconDiameter} height={iconDiameter} color={Colores.turquesa} />
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
