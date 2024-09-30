import Boton from './Boton';
import { Colores } from './../constants/Colors';
import React, { FC, useEffect, useState, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions, ScrollView } from 'react-native';
import DBDomain from '@/constants/dbDomain';
import {useUserContext} from '@/context/UserContext';
import InputTexto from './inputTexto';

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    nombre: string;
    email: string;
    contrasena: string;
}

const ConfirmarModal: FC<Props> = ({ visible, setVisible, nombre, email, contrasena }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 14;

    const {usuario, setUsuario} = useUserContext();
    const [confirmacion, setConfirmacion] = useState<string>('');
    
    function cerrarModal()
    {
        setVisible(false);
    }

    function updateUsuario()
    {

    }

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <InputTexto placeholder="ingrese su contraseña actual" onChange={setConfirmacion} esContrasena={true}/>
                    </View>
                    <View style={styles.botonesContainer}>
                        <Boton text="Confirmar" onPress={cerrarModal} textStyle='textoBlanco' containerColor='turquesa'/>
                        <Boton text="Cancelar" onPress={cerrarModal} textStyle='textoBlanco' containerColor='turquesa'/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '83%',
        height: '40%',
        padding: 20,
        backgroundColor: Colores.blanco,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    header: {
        marginBottom: 20,
    },
    botonesContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-around',
    },
});

export default ConfirmarModal;
