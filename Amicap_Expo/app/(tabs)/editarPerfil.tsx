import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';
import BotonTexto from '@/components/BotonTexto';
import FondoAzul from '@/components/FondoAzul';

interface Props {
  navigation: any;
}

const EditarPerfilScreen: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const tamanoTitulo = windowWidth / 10;
    const tamanoTexto = windowWidth * 0.05;
    const rectangleHeight = windowHeight * 3;

    return (
      <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
           <View style={styles.fondo}>
          <FondoAzul />
        </View>
        {/* <InputTexto placeholder="Nombre" onChange={}/>
        <InputTexto placeholder="Contraseña" onChange={}/>
        <InputTexto placeholder="Email" onChange={}/> */}
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
        }
    });
    
    export default EditarPerfilScreen;