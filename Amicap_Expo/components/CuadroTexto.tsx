import React, {FC, useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {Colores} from './../constants/Colors';

interface Actividad{
    nombre:string;
    paso:string;
}
interface Props{
    actividad: Actividad;
}




const CuadroTexto: FC<Props> =({ actividad }) => {
    // Establece el estilo base y el estilo de la punta del cuadro
    const cuadroStyles = [styles.cuadro];
    const flechaStyles = [styles.flecha];
  
    return (
      <View style={cuadroStyles}>
        <Text>{actividad.nombre}</Text>
        <Text>{actividad.paso}</Text>
        <View style={flechaStyles} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    cuadro: {
      backgroundColor: Colores.blanco,
      padding: 10,
      borderRadius: 10,
      maxWidth: '80%',
      position: 'relative',
      marginBottom: 10,
    },
    flecha: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomWidth: 10,
        borderBottomColor: Colores.blanco, 
        left: 20, // Ajusta la posición de la punta
        top: -10, 
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      paso: {
        fontSize: 16,
      },
      placeholderText: {
        fontSize: 18,
        marginBottom: 20,
      },
   
  });
  
  export default CuadroTexto;