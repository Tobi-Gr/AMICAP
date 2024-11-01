import { Colores } from '../constants/Colors';
import React, { FC } from 'react';
import Texto from './Texto';
import {StyleSheet, Pressable, Dimensions, View } from 'react-native';

interface Props{
    text:string,
    onPress?: () => void,
    tamanoFuente: number;
    id: number;
}


const BotonRadio: FC<Props> = ({text, onPress, tamanoFuente, id}) => { 
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuenteLocal = windowWidth * 0.05;
    const [checked, setChecked] = React.useState(true);
    
    const handleOnPress = () =>
    {
        setChecked(!checked);
        if(onPress)
        {
            onPress();
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
        borderRadius: 50,
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
        borderRadius: 50,
        backgroundColor: Colores.turquesa,
        width: 15,
        height: 15,
    },
});

export default BotonRadio;
