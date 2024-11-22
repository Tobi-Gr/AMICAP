import { useFonts } from 'expo-font';
import React, { FC } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Colores } from './../constants/Colors';

interface Props {
  text: string,
  estilo?: keyof typeof styles,
  style?: any,
}

const Texto: React.FC<Props> = ({ text, estilo, style }) => {
  const [fontsLoaded] = useFonts({
    'FiraSans-Regular': require('./../assets/fonts/FiraSans-Regular.ttf'),
    'Montserrat-Regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color="#0000ff" />; // Muestra un indicador de carga
  }

  const textStyle = estilo ? styles[estilo] : styles.defaultText;
  return (
    <View style={styles.container}>
      <Text style={[textStyle, style]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center"
  },
  defaultText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18
  },
  tituloTurquesa: {
    color: Colores.turquesa,
    fontFamily: 'FiraSans-Regular'
  },
  tituloBlanco: {
    color: Colores.blanco,
    fontFamily: 'FiraSans-Regular'
  },
  textoTurquesa:{
    color: Colores.turquesa,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold'
  },
  textoBlanco:{
    color: Colores.blanco,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold'
  },
  textoNaranja:{
    color: Colores.naranja,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold'
  },
  textoNegro:{
    color: Colores.negro,
    fontFamily: 'Montserrat-Regular',
  },
  textoCeleste:{
    color: Colores.celeste,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  }
});

export default Texto;
