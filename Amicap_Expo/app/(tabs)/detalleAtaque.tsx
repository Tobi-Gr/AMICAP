import {StyleSheet, View, Dimensions, Keyboard, Platform} from 'react-native';
import React, { useState, useEffect } from 'react';
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import DBDomain from '@/constants/dbDomain';
import {useUserContext} from '@/context/UserContext';
import Flecha from '@/components/Flecha';

interface Props {
    navigation: any;
}

//¿Cómo hacemos para saber qué ataque es?
const DetalleAtaque: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const flechaTamano = windowWidth / 10;
    const tamanoIndice = windowWidth / 16;

    return (
        <View>
            <View style={styles.flechaContainer}>
                <Flecha
                    height={flechaTamano}
                    width={flechaTamano}
                    navigation={navigation}
                    screen={"ListaAtaques"}
                    color={Colores.blanco}
                />
                <Texto text="Fecha del ataque" estilo="textoBlanco" style={{fontSize: tamanoIndice}}/> {/*Hay que poner la fecha posta lol*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flechaContainer: {
        alignSelf: 'flex-start',
        gap: 10,
        marginBottom: '8%'
    },
});

export default DetalleAtaque;
