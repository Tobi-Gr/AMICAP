import { Colores } from '../constants/Colors';
import React,{FC} from 'react';
import Texto from './Texto';
import {StyleSheet, Pressable, Dimensions } from 'react-native';

interface Props{
    text:string,
    onPress?: () => void,
    textStyle: 'textoTurquesa' | 'textoBlanco' | 'textoNegro';
    containerColor: keyof typeof styles;
    fullWidth?: boolean;
    tamanoFuenteProps?: number;
    centered?: boolean;
}


const Boton: FC<Props> = ({text, onPress, textStyle, containerColor, fullWidth, tamanoFuenteProps, centered = true}) => { 
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
        <Pressable 
            style={fullWidth? [ styles.container, styles.fullWidth, styles[containerColor]] :[styles.container, styles[containerColor]]}
            onPress={handleOnPress}>
            <Texto text={text} estilo={textStyle} style={tamanoFuenteProps? {fontSize: tamanoFuenteProps } : {fontSize: tamanoFuenteLocal }} centered={centered}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        padding: "3%",
        borderRadius: 12,
    },
    naranja:
    {
        backgroundColor: Colores.naranja,        
    },
    blanco:
    {
        backgroundColor: Colores.blanco,        
    },
    turquesa: {
        backgroundColor: Colores.turquesa,        
    },
    gris:{
        backgroundColor: Colores.gris
    },

    fullWidth:{
        width: '100%',
    }
});

export default Boton;
