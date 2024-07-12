import React from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';
import { Colores } from './../constants/Colors';
import Texto from './Texto';
//ANIMATED: https://reactnative.dev/docs/animated

interface Props {
  inhalar: number,
  exhalar: number,
  mantener: number
}

const Respiracion: React.FC<Props> = ({inhalar, exhalar, mantener}) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Respiracion;
