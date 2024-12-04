import {StyleSheet, View, Dimensions, Keyboard, Platform} from 'react-native';
import React, { useState, useEffect } from 'react';
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import DBDomain from '@/constants/dbDomain';
import {useUserContext} from '@/context/UserContext';

interface Props {
    navigation: any;
}
//cómo hacemos para que sepa qué ataque mostrar?
const DetalleAtaque: React.FC<Props> = ({ navigation }) => {

    return (
        <View>
        </View>
    );
};

const styles = StyleSheet.create({
    estilo: {
        flex: 1,
    },
});

export default DetalleAtaque;
