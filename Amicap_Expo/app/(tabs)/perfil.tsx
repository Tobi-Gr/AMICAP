import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Navbar from '@/components/Navbar';
import FondoAzul from '@/components/FondoAzul';
import Edit from '@/components/icons/Edit';
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
    const editTamano = windowWidth / 10;
    const rectangleHeight = windowHeight * 0.7;

    //dsp hacer que el nombre salga de la base de datos
    const nombre = "Nombre";
    
    return (
      <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
      <View style={styles.edit}>
        <Edit height={editTamano} width={editTamano} color={Colores.turquesa} onPress={() => navigation.navigate('EditarPerfil')}/>
      </View>
        <View style={[styles.titleContainer, { marginTop: yTexto }]}>
          <Texto text={nombre} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} /> 
        </View>
        <FondoAzul currentScreen="Perfil"/>
         <View style={[styles.buttonsContainer, {top: botonesY}]}>
         <BotonTextoIcono text="Tus contactos" icon="contact" onPress={() => console.log('Botón Contactos presionado')}/>
          <BotonTextoIcono text="Tus registros" icon="graph" onPress={() => console.log('Botón registros presionado')}/>
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
  edit: {
    position: 'absolute',
    left: '85%',
    top: 20
  },
  buttonsContainer:{
    position: 'absolute',
    bottom: 20, 
    left: '5%',
    right: '5%', 
    flexDirection: 'column', 
    alignItems: 'center', 
  },
  fondo:
  {
    position: 'absolute',
    top: '21%'
  }
});

export default PerfilScreen;