import React, { FC } from "react";
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import Contact from './icons/Contact';
import { Colores } from './../constants/Colors';

interface Contact{
  nombre:string;
  numero:string;
}
interface Props {
    contactos: Contact[],
    key: number,
    onPress?: (contactos: Contact[], key:number) => void
}


const BotonContacto: FC<Props> = ({onPress, contactos, key}) => {
    const windowWidth = Dimensions.get('window').width;
    const diameter = windowWidth / 4;
    const iconWidth = diameter / 1.6;
    const iconHeight = iconWidth / 0.9;
    const handlePress = () => {
        console.log("llamando a luca");
        if(onPress){
            onPress(contactos, key);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={1}>
            <View style={[styles.borderWrapper, { width: diameter + 4, height: diameter + 8, borderRadius: (diameter + 4) / 2 }]}>
                <View style={[styles.button, { width: diameter, height: diameter, borderRadius: diameter / 2 }]}>
                    <Contact width={iconWidth} height={iconHeight} color={Colores.turquesa} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    borderWrapper: {
        borderWidth: 4,
        borderColor: Colores.blanco,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: Colores.blanco,
        opacity: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default BotonContacto;
