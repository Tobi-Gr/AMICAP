import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Slider } from '@rneui/themed';
import { Colores } from '../constants/Colors';
//https://reactnativeelements.com/docs/components/slider

type SliderNumerosProps = {
    value: number;
    onValueChange: (value: number) => void;
};

const SliderNumeros: React.FC<SliderNumerosProps> = ({ value, onValueChange }) => {
    return (
        <View style={styles.wrapper}>
            <Slider
                value={value}
                onValueChange={onValueChange}
                maximumTrackTintColor={Colores.negro}
                minimumTrackTintColor={Colores.celeste}
                maximumValue={10}
                minimumValue={4}
                step={1}
                allowTouchTrack
                trackStyle={{ height: 4 }}
                thumbStyle={styles.thumb} 
                style={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colores.turquesa,
        width: '100%',
        alignItems: 'center',
    },
    container: {
        width: '69%',
    },
    thumb: {
        height: 20, 
        width: 20, 
        backgroundColor: Colores.turquesa,
        borderColor: Colores.celeste,
        borderWidth: 4,
    },
});

export default SliderNumeros;
