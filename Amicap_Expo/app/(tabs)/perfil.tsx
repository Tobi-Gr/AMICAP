import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Navbar from '@/components/Navbar';
import FondoAzul from '@/components/FondoAzul';
import BotonTextoIcono from '@/components/BotonTextoIcono';

interface Props {
  navigation: any;
}

const PerfilScreen: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    //const tamanoTitulo = windowWidth / 10;
    const tamanoFuente = windowWidth / 10;
    const yTexto = windowHeight / 10;
    const botonesX = windowWidth / 5.5;
    const botonesY = windowHeight / 4.5;

    //dsp hacer que el nombre salga de la base de datos
    const nombre = "Nombre";
    
    return (
      <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
        <View style={[styles.titleContainer, { marginTop: yTexto }]}>
          <Texto text={nombre} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} /> 
        </View>
        <View style={{ position: 'relative' }}>
          <FondoAzul />
        {/* <View style={[styles.buttonsContainer, {top: botonesY, left:botonesX}]}>
        acá van los BotonTextoIcono
        </View> */}
        </View>
        <Navbar tipo="profile" navigation={navigation}/>
      </View>
    );
  };

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer:{
    alignContent: 'center',
    marginHorizontal: 'auto',
    width: '88%',
    position: 'absolute'
  }
});

export default PerfilScreen;