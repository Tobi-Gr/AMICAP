

//NO ESTÁ NI CERCA DE ESTAR LISTO. ME FALTABAN LOS COMPONENTES ASÍ QUE LOS VOY A HACER :)


import { StyleSheet, View, Dimensions, Keyboard } from 'react-native';
import React, { useState, useEffect } from "react";
import { Colores } from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';
import FondoAzulEditarPerfil from '@/components/FondoAzulEditarPerfil';
import Flecha from '@/components/Flecha';


interface Props {
  navigation: any;
}

const EditarRegistroScreen: React.FC<Props> = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoTitulo = windowWidth / 10;
  const tamanoTexto = windowWidth * 0.05;
  const flechaTamano = windowWidth / 10;
  const botonesY = windowHeight / 4;
  const tamanoFuente = windowWidth / 20;


    return (
      <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.turquesa}/>
        
        <View style={styles.tituloContainer}>
          <Texto text='Editar'estilo="textoTurquesa" style={{ fontSize: tamanoFuente }} />
        </View>
      
        <View style={styles.inputContainer}>
        
        </View> 
      </View>
      );  
    };    

  const styles = StyleSheet.create({
    inputContainer:{      
      position: 'absolute',
      top: Dimensions.get('screen').height * 0.2,
      left: '5%',
      right: '5%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: Dimensions.get('screen').height * 0.35
    },    
    
    tituloContainer:{
      position: 'absolute',
      left: '12.5%',
      top: 25
    }
  });


  export default EditarRegistroScreen;

    