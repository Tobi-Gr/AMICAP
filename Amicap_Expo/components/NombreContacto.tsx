import React, { FC } from "react";
import { TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import Contact from './icons/Contact';
import { Colores } from './../constants/Colors';
import Texto from "./Texto";

interface Contact {
    id: number;
    nombre: string;
    numero: string;
}

interface Props {
    contacto: Contact;
    seleccionado: boolean;
    onPress: (contacto: Contact) => void;
}

const NombreContacto: FC<Props> = ({ contacto, seleccionado, onPress }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 18;
    const heightIcon = windowHeight / 25;
    const widthIcon = heightIcon * 0.9;
    
    const handleOnPress = () => {
        onPress(contacto);
    }

    return (
        <TouchableOpacity onPress={handleOnPress} style={[styles.container, seleccionado ? styles.selected : styles.unselected]}>
            <View style={styles.innerContainer}>
                <Contact height={heightIcon} width={widthIcon} color={seleccionado ? Colores.blanco : Colores.turquesa} />
                <Texto text={contacto.nombre} estilo={seleccionado ? "textoBlanco" : "textoTurquesa"} style={{ fontSize: tamanoFuente, marginLeft: 10 }} />
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
        // Adding a margin to align the border with the content
        marginBottom: '2%'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    selected: {
        backgroundColor: Colores.turquesa,
        // Adding padding to adjust the border position
        paddingBottom: 2
    },
    unselected: {
        borderBottomColor: Colores.turquesa,
        borderBottomWidth: 2,
        backgroundColor: Colores.blanco,
        // Adding padding to adjust the border position
        paddingBottom: 2
    }
});

export default NombreContacto;
