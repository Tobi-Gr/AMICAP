import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
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

const ListaAtaques: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const flechaTamano = windowWidth / 10;
    const tamanoIndice = windowWidth / 16;

    return (
        <GestureHandlerRootView>
            <View style={styles.flechaContainer}>
                <Flecha
                    height={flechaTamano}
                    width={flechaTamano}
                    navigation={navigation}
                    screen={"registroData"}
                    color={Colores.blanco}
                />
                <Texto text="Tus ataques" estilo="textoBlanco" style={{fontSize: tamanoIndice}}/>
            </View>
            <ScrollView>
                
            </ScrollView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    flechaContainer: {
        alignSelf: 'flex-start',
        gap: 10,
        marginBottom: '8%'
    },
});

export default ListaAtaques;
