import Boton from './Boton';
import { Colores } from './../constants/Colors';
import React, { FC, useEffect, useState, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions, ScrollView, Pressable, TextInput } from 'react-native';
import Texto from './Texto';
import DBDomain from '@/constants/dbDomain';
import Ex from './icons/Ex';
import BotonRadio from './BotonRadio';
import Search from './icons/Search';

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
    const [busqueda, setBusqueda] = React.useState('');
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth * 0.05;
    const tamanoTitulo = windowWidth * 0.06;
        
    function cerrarModal() {
        setVisible(false);
    }

    function guardarCambios() {
        cerrarModal();
        //GUARDAR TODO EN LA BASE DE DATOS
    }

    const Busqueda = () => {
        return (
            <View style={styles.busquedaContainer}>
                <TextInput
                    style={{fontSize: tamanoFuente, width: '90%' }}
                    onChangeText={(nuevaBusqueda) => {
                        setBusqueda(nuevaBusqueda);
                        //onChange(nuevaBusqueda);
                    }}
                    value={busqueda}
                    placeholder='Buscar'
                    placeholderTextColor={Colores.negro}
                />
                <Search color={Colores.turquesa}/>
            </View>
        );
    };

    const ListaActs = () => {
        return (
            <ScrollView>
                {actividades.map((actividad) => (
                    <BotonRadio 
                        key={actividad.id} 
                        text={actividad.nombre} 
                        id={actividad.id} 
                        tamanoFuente={tamanoFuente} 
                    />
                ))}
            </ScrollView>
        );
    }

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Texto text='Actividades que me sirven' estilo="textoTurquesa" style={{fontSize: tamanoTitulo}}/>
                        <Pressable onPress={cerrarModal}>
                            <Ex color={Colores.turquesa}/>
                        </Pressable>
                    </View>
                    <Busqueda/>
                    {ListaActs()}
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
    },
    busquedaContainer:
    {
        borderBottomColor: Colores.celeste,
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    }
});

export default SeleccionarActsModal;