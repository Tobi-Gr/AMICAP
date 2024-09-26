import Boton from './Boton';
import { Colores } from './../constants/Colors';
import React, { FC, useEffect, useState, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions, ScrollView } from 'react-native';
import Texto from './Texto';
import DBDomain from '@/constants/dbDomain';
import Ex from './icons/Ex';

interface Actividad {
    id: number;
    nombre: string;
}

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    actividades: Actividad[];
}

const SeleccionarActsModal: FC<Props> = ({ visible, setVisible, actividades }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 14;
        
    function cerrarModal() {
        setVisible(false);
    }

    function guardarCambios() {
        cerrarModal();
        //GUARDAR TODO EN LA BASE DE DATOS
    }

    const listaActs = () => {
    //hay que hacer los botones de radio
        return (
            <ScrollView>
            </ScrollView>
        );
    }

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                    <Ex  color={Colores.turquesa} />
                    <Texto text='Actividades que me sirven'/>
                    {listaActs()}
                    <View>
                        <Boton onPress={cerrarModal} text="Cancelar" containerColor='blanco' textStyle='textoTurquesa'/>
                        <Boton  onPress={guardarCambios} text="Guardar" containerColor='turquesa' textStyle='textoBlanco'/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '91.6%',
        height: '70.5%',
        padding: 20,
        backgroundColor: Colores.blanco,
        borderRadius: 18,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonContainer:
    {
        backgroundColor: Colores.naranja
    }
});

export default SeleccionarActsModal;
