import Boton from './Boton';
import { Colores } from './../constants/Colors';
import React, { FC, useState } from 'react';
import { StyleSheet, View, Modal, Dimensions, ScrollView, Linking } from 'react-native';
import Texto from './Texto';
import Profile from './icons/Profile';
import Phone from './icons/Phone';


interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    prompt: string;
    aclaracion?: string;
    confirmado: ()=> void;
}

const ConfirmarModal: FC<Props> = ({ visible, setVisible, prompt, aclaracion, confirmado }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const tamanoFuenteTexto = windowWidth / 18;
    const tamanoFuenteBttn = windowWidth / 20;
    const heightIcon = windowHeight / 25;
    const widthIcon = heightIcon * 0.9;
    
    function cerrarModal() {
        setVisible(false);
    }
    
    function handleConfirmado()
    {
        confirmado();
        cerrarModal();
    }

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                {aclaracion &&
                        <Texto text={aclaracion} estilo="textoTurquesa" style={{ fontSize: tamanoFuenteTexto * 0.9, fontWeight: 'normal', textAlign: 'center', marginTop: 10}} />
                    }
                    <View style={styles.crud}>
                    <Texto text={"Nombre"} estilo="textoTurquesa" style={{ fontSize: tamanoFuenteTexto * 0.9, fontWeight: 'normal', textAlign: 'center', marginTop: 10}} />
                    <Profile height={heightIcon} width={widthIcon} color={ Colores.turquesa } />
                    </View> 
                    <View style={styles.crud}>
                    <Texto text={"Telefono"} estilo="textoTurquesa" style={{ fontSize: tamanoFuenteTexto * 0.9, fontWeight: 'normal', textAlign: 'center', marginTop: 10}} />
                    <Phone height={heightIcon} width={widthIcon} color={ Colores.turquesa } />
                    </View>
                    <View style={styles.botonesContainer}>
                        <View style={[styles.botonContainer, styles.fondoBlanco]}>
                            <Boton text="Cancelar" onPress={cerrarModal} textStyle='textoTurquesa' containerColor='blanco' tamanoFuenteProps={tamanoFuenteBttn}/>
                        </View>
                        <View style={[styles.botonContainer, styles.fondoTurquesa]}>
                            {aclaracion &&
                            <Boton text={aclaracion} onPress={handleConfirmado} textStyle='textoBlanco' containerColor='turquesa' tamanoFuenteProps={tamanoFuenteBttn}/>
                            }
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '83%',
        height: '25%',
        padding: 30,
        backgroundColor: Colores.blanco,
        borderRadius: 18,
        justifyContent: 'center', 
        alignContent: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    botonesContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        height: '30%',        
        justifyContent: 'flex-end',
    },
    botonContainer:
    {
        width: '25%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 18
    },
    fondoTurquesa: {
        backgroundColor: Colores.turquesa,
    },
    fondoBlanco: {
        backgroundColor: Colores.blanco,
    },
    crud:{

    }
});

export default ConfirmarModal;
