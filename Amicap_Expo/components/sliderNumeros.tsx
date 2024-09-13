import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Slider } from '@rneui/themed';
import { Colores } from '../constants/Colors';
//https://reactnativeelements.com/docs/components/slider

type Props = {
    value: number;
    onValueChange: (value: number) => void;
    position?: "flex-start" | "flex-end";
};

const SliderNumeros: React.FC<Props> = ({ value, onValueChange, position }) => {
    return (
        <View style={[styles.wrapper, {alignItems: position}]}>
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
        paddingHorizontal: '7%'
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
