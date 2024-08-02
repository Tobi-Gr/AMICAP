import React, { FC } from "react";
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import Contact from './icons/Contact';
import { Colores } from './../constants/Colors';
import Texto from "./Texto";


interface Props {
    nombre: string;
}


const NombreContacto: FC<Props> =  ({nombre}) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 20;
    const heightIcon = windowHeight / 25;
    const widthIcon = heightIcon * 0.9;
    return (
        <View style={styles.container}>
            <Contact height={heightIcon} width={widthIcon} color={Colores.turquesa}/>
            <Texto text={nombre} estilo="textoTurquesa" style={{fontSize: tamanoFuente, marginLeft: 10}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colores.blanco,
        flexDirection: 'row',
        borderBottomColor: Colores.turquesa,
        borderBottomWidth: 2,
        width: '75%',
        paddingBottom: '2%',
        marginTop: '2%'
    }
});

export default NombreContacto;
