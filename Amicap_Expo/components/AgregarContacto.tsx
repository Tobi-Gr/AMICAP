import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Colores } from './../constants/Colors';
import Add from './icons/Add';

interface Props {
  onPress: () => void; 
}

const AgregarContacto: React.FC<Props> = ({ onPress }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight= Dimensions.get('window').height
  const diametro = windowWidth * 0.15; //cambiar los tamaños
  const heightIcon = windowHeight / 25;
    const widthIcon = heightIcon * 0.9;

  return (
    <TouchableOpacity
      activeOpacity={1} 
      onPress={onPress}
      style={[styles.container, { width: diametro, height: diametro }]}>
      <View style={[styles.circulo, { height: diametro, width: diametro }]}>       
      <Add height={heightIcon} width={widthIcon} color={Colores.turquesa} />
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
    borderRadius: 200,
    backgroundColor: Colores.blanco,
    zIndex: 1,
  },
});

export default AgregarContacto;
