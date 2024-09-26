import { Colores } from '../constants/Colors';
import React, { FC } from 'react';
import Texto from './Texto';
import {StyleSheet, Pressable, Dimensions, View } from 'react-native';

interface Props{
    text:string,
    onPress?: () => void,
    tamanoFuenteProps?: number;
    id: number;
}


const BotonRadio: FC<Props> = ({text, onPress, tamanoFuenteProps, id}) => { 
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
  
    const circulo = () => {
        
    }
    
    const circuloSeleccionado = () => {

    }

    return (
        <View>
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        padding: "3%",
        borderRadius: 12,
    }
});

export default BotonRadio;
