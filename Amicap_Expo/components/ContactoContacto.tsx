import React, { FC, useState } from "react";
import { TouchableOpacity, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Contact from './icons/Contact';
import { Colores } from './../constants/Colors';
import Texto from "./Texto";
import Edit from "./icons/Edit";
import Add from "./icons/Add";

interface Contact {
    id: number;
    nombre: string;
    numero: string;
}

interface Props {
    contacto: Contact;
}

const ContactoContacto: FC<Props> = ({ contacto }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 18;
    const heightIcon = windowHeight / 25;
    const widthIcon = heightIcon * 0.9;

    const handleOnPress = () => {
        
    };


    return (
        <TouchableOpacity onPress={handleOnPress} style={[styles.container]}>
            <View style={styles.innerContainer}>
                <View style={styles.columna1}>
                <Contact height={heightIcon} width={widthIcon} color={ Colores.blanco } />
                <Texto text={contacto.nombre} estilo={"textoBlanco" } style={{ fontSize: tamanoFuente, marginLeft: 10 }} />
                </View>
                <View style={styles.columna2}>
                <Edit height={heightIcon} width={widthIcon} color={Colores.blanco} />
                <Add height={heightIcon} width={widthIcon} color={Colores.blanco} />
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '75%',
        padding: '2%',
        marginTop: '2%',
        borderRadius: 12,
        marginBottom: '2%'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    selected: {
        backgroundColor: Colores.turquesa,
        paddingBottom: 2
    },
    unselected: {
        borderBottomColor: Colores.turquesa,
        borderBottomWidth: 2,
        backgroundColor: Colores.blanco,
        paddingBottom: 2
    },
    contactList: {
        width: '100%',
        flex: 1,
    },
    contactListContent: {
        alignItems: 'center',
    },
    contactContainer: {
        width: '100%',
        alignItems: 'center',
    },
    columna1:{
        flexDirection: 'row',
        alignItems: 'flex-start',
       
    },
    columna2:{
        flexDirection: 'row',
        alignItems: 'flex-end',
    }
});

export default ContactoContacto ;
