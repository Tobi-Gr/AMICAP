import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import SliderNumeros from './sliderNumeros';
import { Colores } from '../constants/Colors';
import Texto from './Texto';
import Sound from './icons/Sound';

type Props = {
    value: number;
    onValueChange: (value: number) => void;
};

// hay que añadirle funcionalidad !!!!

const SliderVolumen: React.FC<Props> = ({ value, onValueChange }) => {
    return (
        <View style={styles.wrapper}>
                <View style={styles.sliderContainer}>
                    <Sound color={Colores.blanco}/>
                    <SliderNumeros value={value} onValueChange={onValueChange} position='flex-start' />
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default SliderVolumen;
