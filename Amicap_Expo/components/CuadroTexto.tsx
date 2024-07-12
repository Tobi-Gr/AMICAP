import React, { FC } from 'react';
import { View, StyleSheet, Dimensions, ViewStyle, TextStyle } from 'react-native';
import { Colores } from './../constants/Colors';
import Texto from './Texto';

interface Props {
  nombre?: string,
  actividad: string,
  style?: ViewStyle,
  textStyle?: TextStyle
}

const CuadroTexto: FC<Props> = ({ nombre, actividad, style, textStyle }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const cuadroWidth = windowWidth / 1.4;
  const cuadroHeight = windowHeight / 3;
  const izqTriangulo = cuadroWidth / 14.5; // distancia desde el borde izquierdo de la burbuja y el principio del triángulo
  const topTriangulo = cuadroHeight - 10;
  return (
    <View style={[styles.dialogo, style]}> 
      <View style={[styles.cuadro, { width: cuadroWidth, height: cuadroHeight }]}>
        {nombre && <Texto text={nombre + ','} estilo="textoTurquesa" style={textStyle}/>}
        <Texto text={actividad} estilo="textoNegro" style={textStyle}/>
      </View>
      <View style={[styles.flecha, { left: izqTriangulo, top: topTriangulo }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  dialogo: {
    backgroundColor: "transparent",
  },
  cuadro: {
    backgroundColor: Colores.blanco,
    paddingTop: '7%',
    paddingHorizontal: '5%',
    borderRadius: 18,
    justifyContent: 'flex-start',
  },
  flecha: {
    position: "absolute",
    width: 0,
    height: 0,
    borderTopColor: "transparent",
    borderTopWidth: 0, // ángulo de la parte de arriba
    borderLeftWidth: 60, // ancho de arriba
    borderRightColor: Colores.blanco,
    borderLeftColor: Colores.blanco,
    borderBottomWidth: 60, // altura
    borderBottomColor: "transparent",
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
