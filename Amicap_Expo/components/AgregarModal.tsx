import Boton from './Boton';
import { Colores } from './../constants/Colors';
import React, { FC, useState } from 'react';
import { StyleSheet, View, Modal, Dimensions, ScrollView, Linking } from 'react-native';
import Texto from './Texto';
import Profile from './icons/Profile';
import Phone from './icons/Phone';
import InputTextoModal from './inputTextoModal';

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    prompt: string;
    aclaracion?: string;
    confirmado: (nombre: string, numero: string) => void;
    isKeyboardVisible: boolean;
}

const AgregarModal: FC<Props> = ({ visible, setVisible, prompt, aclaracion, confirmado, isKeyboardVisible }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const tamanoFuenteTexto = windowWidth / 18;
    const tamanoFuenteBttn = windowWidth / 20;
    const heightIcon = windowHeight / 25;
    const widthIcon = heightIcon * 0.9;
    const cardHeight = isKeyboardVisible ? '45%' : '30%';

    const [nombre, setNombre] = useState('');
    const [numero, setNumero] = useState('');
    
    function cerrarModal() {
        setVisible(false);
    }
    
    function handleConfirmado()
    {
        confirmado(nombre, numero);
        cerrarModal();
    }

    const handleCausaChange = (nuevaCausa: string) => {
        setNombre(nuevaCausa);
    }; 
    

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={[styles.card, { height: cardHeight }]}>
                {aclaracion &&
                        <Texto text={aclaracion} estilo="textoTurquesa" style={{ fontSize: tamanoFuenteTexto * 0.9, fontWeight: 'normal', textAlign: 'center', marginTop: 10}} />
                    }
                    <View style={styles.innerContainer}>
                        <View style={styles.columna1}>
                            <InputTextoModal  placeholder="Causa" onChange={handleCausaChange}/>
                        </View> 
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
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomWidth:2,
        borderColor: Colores.blanco
    },
    botonesContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '180%',
        height: '30%',        
        justifyContent: 'flex-start',
        marginLeft:50
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
    columna1:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '85%'
    },
    columna2:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        top: '25%'
    },
    inputTexto:{
    color: Colores.turquesa
    },

    
});

export default AgregarModal;
