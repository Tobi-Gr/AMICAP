import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Colores } from './../constants/Colors';
import Add from './icons/Add';

interface Props {
  navigation: any;
}

const AgregarContacto: React.FC<Props> = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight= Dimensions.get('window').height
  const diametro = windowWidth * 0.15; //cambiar los tamaños
  const tamanoFuente = diametro / 5;
  const heightIcon = windowHeight / 25;
    const widthIcon = heightIcon * 0.9;
  const handlePress = () => {
    navigation.navigate('');
  };

  return (
    <TouchableOpacity
      activeOpacity={1} 
      onPress={handlePress}
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
