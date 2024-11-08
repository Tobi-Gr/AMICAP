import React,{FC} from 'react';
import Texto from './Texto';
import {StyleSheet, Pressable, Dimensions } from 'react-native';

interface Props{
    text:string;
    onPress: () => void;
    tamanoFuenteProps?: number;
    color?: 'textoBlanco' | 'textoTurquesa' | 'textoNegro' | 'textoCeleste';
}


const Boton: FC<Props> = ({text, onPress, tamanoFuenteProps, color}) => { 
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuenteLocal = windowWidth * 0.05;
    
    const handleOnPress = () =>
    {
        if(onPress)
        {
            onPress();
        }
    };
  
    return (
        <Pressable onPress={handleOnPress}>
            <Texto text={text} estilo={color ? color : 'textoCeleste'} style={tamanoFuenteProps? {fontSize: tamanoFuenteProps } : {fontSize: tamanoFuenteLocal }}/>
        </Pressable>
    );
  };

export default Boton;
