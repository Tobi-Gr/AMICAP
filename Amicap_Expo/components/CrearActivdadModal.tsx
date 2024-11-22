import React, { FC, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions, TextInput, Keyboard } from 'react-native';
import { Colores } from './../constants/Colors';
import Texto from './Texto';
import Boton from './Boton';
import BotonTexto from './BotonTexto'

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    isKeyboardVisible: boolean;
}
const CrearActividadModal: FC<Props> = ({visible, setVisible, isKeyboardVisible}) => {
   const windowWidth = Dimensions.get('window').width;
   const tamanoTitulo = windowWidth / 14;
   const tamanoFuente = windowWidth / 18;
   const [nuevaAct, setNuevaAct] = useState('');
   const cardHeight = isKeyboardVisible ? '65%' : '45%';
   function cerrarModal() {
       setVisible(false);
       setNuevaAct('');
   }
   function guardarActividad()
   {
    /*GUARDAR ACT EN BASE DE DATOS*/
    cerrarModal();
   }

   return (
       <Modal visible={visible} transparent={true} animationType="fade">
           <View style={styles.container}>
                <View style={[styles.card, { height: cardHeight }]}>
                    <Texto text="Crear actividad" estilo="textoTurquesa" style={{fontSize: tamanoTitulo}}/>
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
                            <Boton text='Crear' onPress={cerrarModal} textStyle='textoBlanco' containerColor='turquesa' tamanoFuenteProps={tamanoFuente}/>
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
        height: '65%',
        borderWidth: 2,
        borderColor: Colores.celeste,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        position: 'relative',
        marginTop: 15,
   }
});
export default CrearActividadModal;