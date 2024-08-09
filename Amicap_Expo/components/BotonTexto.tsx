import { Colores } from './../constants/Colors';
import React,{FC} from 'react';
import Texto from './Texto';
import {StyleSheet, Pressable, Dimensions } from 'react-native';

interface Props{
    text:string,
    onPress?: () => void,
}


const BotonTexto: FC<Props> = ({text, onPress}) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth * 0.05;
    
    const handleOnPress = () =>
    {
        if(onPress)
        {
            onPress();
        }
    };
  
    return (
        <Pressable style={styles.container} onPress={handleOnPress}>
            <Texto text={text} estilo="textoBlanco" style={{fontSize: tamanoFuente }}/>
        </Pressable>
    );
  };

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        padding: "3%",
        backgroundColor: Colores.turquesa,
        borderRadius: 12
    }
});

export default BotonTexto;
