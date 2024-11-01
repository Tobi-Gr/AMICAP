 import React, { FC, useEffect, useState } from 'react';
 import {StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions } from 'react-native';
 import { Colores } from './../constants/Colors';
 import Texto from './Texto';
 import { tapHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';
import InputTexto from './inputTexto';

 interface Props {
     visible: boolean;
     setVisible: (visible: boolean) => void;
 }

 const CrearActividadModal: FC<Props> = ({visible, setVisible}) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 14;
    const [nuevaAct, setNuevaAct] = useState('');   

    function cerrarModal() {
        setVisible(false);
    }

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                    <Texto text="Crear actividad" estilo="textoTurquesa" style={{fontSize: tamanoFuente}}/>
                    <InputTexto placeholder='Actividad...' onChange={setNuevaAct}/>
                    <TouchableOpacity onPress={(cerrarModal)}>
                        <Text style={styles.boton}>cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </Modal>
   );
 };
 const styles = StyleSheet.create({
     card:{
         width: '83%',
         height: '46%',
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
       }
 });
 export default CrearActividadModal;