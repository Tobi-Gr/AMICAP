import { Colores } from '../constants/Colors';
import React,{FC} from 'react';
import Texto from './Texto';
import {StyleSheet, Pressable, Dimensions, View } from 'react-native';
import Add from './icons/Add';
import Check from './icons/Check';
import Contact from './icons/Contact';
import Graph from './icons/Graph';
import { Icon } from 'react-native-paper';

interface Props{
    text:string,
    onPress?: () => void,
    icon: 'add' | 'check' | 'contact' | 'graph';
}


const BotonTextoIcono: FC<Props> = ({text, onPress, icon}) => { 
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const tamanoFuente = windowWidth * 0.05;
    const buttonHeight = windowHeight* 0.09;
    
    const handleOnPress = () =>
    {
        if(onPress)
        {
            onPress();
        }
    };

    const Icono = () => {
        switch(icon) { 
            case 'add': { 
               return <Add color={Colores.turquesa}/>
            } 
            case 'check': { 
                return <Check color={Colores.turquesa}/>
            } 
            case 'contact':{             
                return <Contact color={Colores.turquesa}/>
            }
            case 'graph': {
                return <Graph color={Colores.turquesa}/>
            }
         } 
    }

    return (
        <Pressable 
        style={[styles.container, {height: buttonHeight}]}
        onPress={handleOnPress}>
            <View style={styles.iconoContainer}>
                <Icono/>
            </View>            
                <Texto text={text} estilo={'textoNegro'} style={{fontSize: tamanoFuente}}/>
        </Pressable>
    );
  };

  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 16,
        padding: "3%",
        borderRadius: 12,
        width: '88%',
        backgroundColor: Colores.gris,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5%'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    iconoContainer: {
        left: '10%'
    }
});

export default BotonTextoIcono;
