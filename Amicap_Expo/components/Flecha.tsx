import React, { FC } from 'react';
import {StyleSheet, Pressable } from 'react-native';
import { Colores } from './../constants/Colors';
import Arrow from './icons/Arrow';

interface Props {
  height: number;
  width: number;
  navigation: any;
  screen: string; //acá va la pantalla a la que querés que la flecha vuelva
  color:string;
}

const Flecha: FC<Props> = ({ height, width, navigation, screen, color}) => {
    function goBack(){
        navigation.navigate(screen);
        //navigation.goBack();?
      }
    return (
    <Pressable onPress={goBack} style={{height: height, width: width}}>
        <Arrow 
        color={color}
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
