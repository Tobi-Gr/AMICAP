import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import React, { FC, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions } from 'react-native';
import { Colores } from './../constants/Colors';
import Texto from './Texto';
import Triangulo from './icons/Triangulo';
import { tapHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';
import Ex from './icons/Ex';

interface Info{
    id: number
    titulo:string
    informacion: string
  }

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    selectedInfo: Info | null;
}

const InfoModal: FC<Props> = ({visible, setVisible, selectedInfo}) => {
  const windowWidth = Dimensions.get('window').width;
  const tamanoFuente = windowWidth / 18;
  const tamanoTitulo = windowWidth / 18;
  function cerrarModal(){
    // setSelectedInfo(null);
    setVisible(false);
  }

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <GestureHandlerRootView style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity onPress={cerrarModal} style={styles.equis}>
            <Ex color={Colores.turquesa}/>
          </TouchableOpacity>
          <View style={styles.header}>
            <Triangulo style={{ transform: [{ rotate: '-90deg' }] }}/>
            <Texto text={selectedInfo?.titulo + ""} estilo="textoTurquesa" style={{ fontSize: tamanoTitulo }} />
          </View>
          <ScrollView style={styles.scroll}>
            {selectedInfo ? (
              <>
                <Texto text={selectedInfo.informacion} estilo="textoTurquesa" style={{ fontSize: tamanoFuente }} />
              </>
            ) : (
              <Texto text="No hay información disponible" estilo="textoTurquesa" style={{ fontSize: tamanoFuente }} />
            )}
          </ScrollView>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: '84%',
        padding: 20,
        backgroundColor: Colores.blanco,
        borderRadius: 18,
        display:'flex'
    },
    boton: {
        color: Colores.turquesa,
        fontSize: 20
    },
    header:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '5%',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    scroll: {
      maxHeight: '80%'
    },
    equis:
    {
      alignSelf: 'flex-end',
      height: '5%',
      justifyContent: 'center',
      alignContent: 'center'
    }
});

export default InfoModal;