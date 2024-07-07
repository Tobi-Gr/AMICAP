import React,{FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colores} from './../constants/Colors';

interface promps{
    text:string,
    estilo?: keyof typeof styles,
    style?: any,
}
const Texto: React.FC<promps> = ({ text, estilo, style }) => {
  const textStyle = estilo ? styles[estilo] : styles.defaultText;
  return (
      <Text style={[textStyle, style]}>{text}</Text>
    );
  }

  const styles = StyleSheet.create({
    defaultText: {
      fontFamily: 'Montserrat-Regular.ttf',
      fontSize: 20
    },
    ayuda: {
      color: Colores.turquesa,
      fontFamily: 'FiraSans-Regular'
    },
  });
  
export default Texto;