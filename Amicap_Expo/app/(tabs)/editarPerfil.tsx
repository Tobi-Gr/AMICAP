import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';
import BotonTexto from '@/components/BotonTexto';
import FondoAzulEditarPerfil from '@/components/FondoAzulEditarPerfil';
import Flecha from '@/components/Flecha';


interface Props {
  navigation: any;
}

const EditarPerfilScreen: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const tamanoTitulo = windowWidth / 10;
    const tamanoTexto = windowWidth * 0.05;
    const flechaTamano = windowWidth / 10;
  

    return (
      <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
          <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.turquesa}/>
        <FondoAzulEditarPerfil />
        
         {/* <InputTexto placeholder="Nombre" onChange={}/>
        <InputTexto placeholder="Contraseña" onChange={}/>
        <InputTexto placeholder="Email" onChange={}/>  */}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        background:{
            flex: 1,
            flexDirection: 'column', 
            backgroundColor: Colores.turquesa,
            alignItems: 'center',
            paddingTop: '20%'
        },
        inputContainer: {
            width: '90%',
            height: '50%',
            justifyContent: 'space-evenly',
        },
        botonesContainer: {
            height: '20%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: '5%'
        },
        fondo:
        {
          position: 'absolute',
          top: '30%',
        
        },
        flecha: {
          position: 'absolute',
          left: '5%',
          top: 20
        },
    });
    
    export default EditarPerfilScreen;