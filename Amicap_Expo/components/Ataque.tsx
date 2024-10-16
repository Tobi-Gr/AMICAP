import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Colores } from './../constants/Colors';
import Texto from './Texto';

interface Props{
    ataquesMes:number,
    ataquesSemana:number,
}

const Ataque: React.FC<Props> = ({ ataquesMes, ataquesSemana}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight= Dimensions.get('window').height
  const diametro = windowWidth * 0.2; //cambiar los tamaños
  const tamanoFuente = diametro / 5;


  return (
    <TouchableOpacity
      activeOpacity={1} 
      style={[styles.container, { width: diametro, height: diametro }]}>
      <View style={[styles.circulo, { height: diametro, width: diametro }]}> 
      <Texto text="" estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} />      
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  circulo: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colores.blanco,
    zIndex: 1,
  },
});

export default Ataque;
