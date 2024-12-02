import React, { FC, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions, TextInput, Keyboard } from 'react-native';
import { Colores } from './../constants/Colors';
import DBDomain from '@/constants/dbDomain';
import Texto from './Texto';
import Boton from './Boton';
import BotonTexto from './BotonTexto'
import InputTexto from './inputTexto';
import { useUserContext } from '@/context/UserContext';

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    isKeyboardVisible: boolean;
}
const CrearActividadModal: FC<Props> = ({visible, setVisible, isKeyboardVisible}) => {
    const {usuario} = useUserContext();
    const windowWidth = Dimensions.get('window').width;
    const tamanoTitulo = windowWidth / 14;
    const tamanoFuente = windowWidth / 18;
    const [nuevaAct, setNuevaAct] = useState('');
    const [actNombre, setActNombre] = useState('');
    const cardHeight = isKeyboardVisible ? '75%' : '47%';
    function cerrarModal() {
        setVisible(false);
        setNuevaAct('');
    }
    function guardarActividad()
    {
        cerrarModal();
        crearActividad();
    }

    const crearActividad = async () => {
        console.log("entro");
        try {
            const response = await fetch(`${DBDomain}/api/actividades`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
    
            body: JSON.stringify({
                'id_usuario': usuario?.id,
                'nombre': actNombre,
                'paso_uno': nuevaAct
            }),
        });
        console.log(response)
    
        if (response.ok) {
            alert('Actividad creada');
            setVisible(false);
        } 
        else {
            const errorMessage = await response.text();
            alert(`Error: ${errorMessage}`);
        }
        } catch (error) {
            console.log('Error creando actividad:', error);
            alert('Hubo un error al crear la actividad');
        }
    };

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={[styles.card, { height: cardHeight }]}>
                    <Texto text="Crear actividad" estilo="textoTurquesa" style={{fontSize: tamanoTitulo}}/>
                    <View style={styles.containerInputNombre}>
                        <InputTexto placeholder='Nombre...' onChange={setActNombre} colorPlaceholder={Colores.turquesa} colorTexto={Colores.negro}/>
                    </View>
                    <View style={styles.containerInput}>
                            <TextInput
                                style={[styles.textInput, { fontSize: tamanoFuente }]}
                                onChangeText={(nuevaAct) => {
                                    setNuevaAct(nuevaAct);
                                }}
                                value={nuevaAct}
                                placeholder='Actividad'
                                placeholderTextColor={Colores.turquesa}
                                autoCapitalize="none"
                                textAlignVertical="top"
                                multiline
                            />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <BotonTexto text='Cancelar' onPress={cerrarModal} color='textoTurquesa' tamanoFuenteProps={tamanoFuente}/>
                            <Boton text='Crear' onPress={guardarActividad} textStyle='textoBlanco' containerColor='turquesa' tamanoFuenteProps={tamanoFuente}/>
                        </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    card:{
        width: '83%',
        padding: 20,
        backgroundColor: Colores.blanco,
        borderRadius: 18,
        alignItems: 'center'
    },
    boton: {
        color: 'rgb(255, 0, 255)',
        fontSize: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: '8%',
        alignItems: 'center',
    },
    textInput: {
        height: '100%',
        width: '100%',
        fontFamily: 'Montserrat-Regular',
    },
    containerInput:
    {
        width: '90%',
        height: '55%',
        borderWidth: 2,
        borderColor: Colores.celeste,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        position: 'relative',
        marginTop: 15,
    },
    containerInputNombre:
    {
        width: '90%'
    }
});
export default CrearActividadModal;