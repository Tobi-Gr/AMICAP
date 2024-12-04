import { Colores } from '../constants/Colors';
import React, { FC } from 'react';
import Texto from './Texto';
import {StyleSheet, Pressable, Dimensions, View } from 'react-native';

//ya no es radio, es un cuadrado
//cambiarle el nombre era demasiado lío

interface Props{
    text:string,
    onChange?: (checked: boolean) => void;
    tamanoFuente: number;
    id: number;
    check: boolean;
    cuadrado: boolean;
}


const BotonRadio: FC<Props> = ({text, onChange, tamanoFuente, id, check, cuadrado = true}) => { 
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuenteLocal = windowWidth * 0.05;
    const [checked, setChecked] = React.useState(check);
    
    const handleOnPress = () =>
    {
        setChecked(!checked);
        if(onChange)
        {
            onChange(checked);
        }
    };
    const Circulo = () => {
        return (
            <View style={[styles.circulo, checked && styles.circuloSeleccionado]}>
                {checked? (
                    <View style={styles.circuloInterno}></View>
                ):(<View></View>)}
            </View>
        );
    };

    return (
        <Pressable onPress={handleOnPress} style={styles.container}>
            <Circulo />
            <Texto text={text} style={{ fontSize: tamanoFuente }}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8
    },
    circulo: {
        borderRadius: 5,
        height: 25,
        width: 25,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: Colores.negro,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '5%'
    },
    circuloSeleccionado: {
        borderColor: Colores.turquesa,
    },
    circuloInterno: {
        borderRadius: 2.5,
        backgroundColor: Colores.turquesa,
        width: 15,
        height: 15,
    },
});

export default BotonRadio;
