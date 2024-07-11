import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'; // Importa TouchableOpacity para manejar onPress
import { Colores } from './../constants/Colors';
import Texto from './Texto';

const BotonAyuda = () => {
  const windowWidth = Dimensions.get('window').width;
  const diametro = windowWidth * 0.6;
  const tamanoFuente = diametro / 5;

  const handlePress = () => {
    console.log("Toma tu ayuda");
  };

  return (
    <TouchableOpacity
      activeOpacity={1} 
      onPress={handlePress}
      style={[styles.container, { width: diametro, height: diametro }]}
    >
      <View style={[styles.sombra, { height: diametro, width: diametro }]} />     
      <View style={[styles.circulo, { height: diametro, width: diametro }]}>       
        <Texto text="Ayuda" estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sombra: {
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: Colores.naranjaOscuro,
    position: 'absolute',
    top: 23,
  },
  circulo: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    backgroundColor: Colores.naranja,
    zIndex: 1,
  },
});

export default BotonAyuda;
