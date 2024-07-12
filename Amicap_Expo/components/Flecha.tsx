import React, { FC } from 'react';
import {StyleSheet, Pressable } from 'react-native';
import { Colores } from './../constants/Colors';
import Arrow from './icons/Arrow';

interface Props {
  height: number;
  width: number;
  navigation: any;
  screen: string; //acá va la pantalla a la que querés que la flecha vuelva
}

const Flecha: FC<Props> = ({ height, width, navigation, screen}) => {
    function goBack(){
        navigation.navigate(screen);
      }
    return (
    <Pressable onPress={goBack} style={{height: height, width: width}}>
        <Arrow color={Colores.blanco} 
          height={height} 
          width={width} 
          style={styles.flecha}/>
      </Pressable>
  );
};

const styles = StyleSheet.create({
    flecha: {
        position: 'absolute',
        left: '5%',
        top: 20
      }
});

export default Flecha;
