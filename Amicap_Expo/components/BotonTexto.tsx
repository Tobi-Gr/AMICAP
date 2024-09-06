import React,{FC} from 'react';
import Texto from './Texto';
import {StyleSheet, Pressable, Dimensions } from 'react-native';

interface Props{
    text:string,
    onPress: () => void
    tamanoFuenteProps?: number;
}


const Boton: FC<Props> = ({text, onPress, tamanoFuenteProps}) => { 
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
            <Texto text={text} estilo={'textoCeleste'} style={tamanoFuenteProps? {fontSize: tamanoFuenteProps } : {fontSize: tamanoFuenteLocal }}/>
        </Pressable>
    );
  };

export default Boton;
