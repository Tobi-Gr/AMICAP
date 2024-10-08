import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import SliderNumeros from './sliderNumeros';
import Texto from './Texto';

type Props = {
    value: number;
    onValueChange: (value: number) => void;
    text: string;
};

const SliderSegundos: React.FC<Props> = ({ value, onValueChange, text }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth * 0.05;

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Texto text={text} estilo='textoBlanco' style={{ fontSize: tamanoFuente }} />
                <View style={styles.sliderContainer}>
                    <SliderNumeros value={value} onValueChange={onValueChange} position='flex-start' />
                    <Texto text={`${value}s`} estilo='textoBlanco' style={{ fontSize: tamanoFuente }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    container: {
        alignItems: 'flex-start',
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default SliderSegundos;
