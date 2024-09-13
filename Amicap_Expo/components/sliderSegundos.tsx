import React from 'react';
import { StyleSheet, View } from 'react-native';
import SliderNumeros from './sliderNumeros';
import { Colores } from '../constants/Colors';
import Texto from './Texto';
//https://reactnativeelements.com/docs/components/slider

type Props = {
    value: number;
    onValueChange: (value: number) => void;
    text: string;
};

const SliderSegundos: React.FC<Props> = ({ value, onValueChange }) => {
    return (
        <View>
            <Texto text="text"/>        
        <View>
            <SliderNumeros value={value} onValueChange={onValueChange} position='flex-start'/>
        </View>

        </View>
    );
};

const styles = StyleSheet.create({
});

export default SliderSegundos;
