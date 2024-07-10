import {useFonts} from 'expo-font';
import React,{FC} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Colores} from './../constants/Colors';

interface promps{
    text:string,
    estilo?: keyof typeof styles,
    style?: any,
}
const Texto: React.FC<promps> = ({ text, estilo, style }) => {
  const [loaded, error] = useFonts({
    'FiraSans-Regular': require('./../assets/fonts/FiraSans-Regular.ttf'),
    'Montserrat-Regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
  });
  
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
      fontSize: 20
    },
    tituloTurquesa: {
      color: Colores.turquesa,
      fontFamily: 'FiraSans-Regular'
    },
  });
  
export default Texto;