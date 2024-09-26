import Boton from './Boton';
import { Colores } from './../constants/Colors';
import React, { FC, useEffect, useState, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions, ScrollView, Pressable } from 'react-native';
import Texto from './Texto';
import DBDomain from '@/constants/dbDomain';
import Ex from './icons/Ex';
import BotonRadio from './BotonRadio';

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
    const tamanoFuente = windowWidth * 0.06;
        
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
                <BotonRadio text="AMI Contra Ataques de Pánico" id={4}/>
            </ScrollView>
        );
    }

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Texto text='Actividades que me sirven' estilo="textoTurquesa" style={{fontSize: tamanoFuente}}/>
                        <Pressable onPress={cerrarModal}>
                            <Ex color={Colores.turquesa}/>
                        </Pressable>
                    </View>
                    {listaActs()}
                    <View style={styles.buttonContainer}>
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    header:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default SeleccionarActsModal;
