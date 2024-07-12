import React, {useRef, useEffect} from 'react';
import {Animated, View, StyleSheet, Dimensions, Button} from 'react-native';
import { Colores } from './../constants/Colors';
//ANIMATED: https://reactnative.dev/docs/animated

interface Props {
  inhalar: number,
  exhalar: number,
  mantener: number
}

const Respirar: React.FC<Props> = ({inhalar, exhalar, mantener}) => {
  const windowWidth = Dimensions.get('window').width;
  const cuadradoTamano = windowWidth / 1.5;
  const diametroGrande = cuadradoTamano / 3.4;
  const diametroChico = cuadradoTamano / 6;
  const arriba = -cuadradoTamano - diametroChico / 2;
  const abajo =  -diametroChico / 2;
  const derecha = cuadradoTamano / 2;
  const izquierda = - derecha;


  const circuloY = useRef(new Animated.Value(arriba)).current;
  const circuloX = useRef(new Animated.Value(derecha)).current;

  //const circuloTamano = useRef(new Animated.Value(diametroChico)).current;

  // useEffect(() => {
  //   moverCirculo();
  // }, []);


  const moverCirculo = () => {
    // Mover para abajo
    const animacionYAbajo = Animated.timing(circuloY, {
      toValue: abajo,
      duration: inhalar * 1000,
      useNativeDriver: true,
    });
  
    // Mover para la izquierda
    const animacionXIzq = Animated.timing(circuloX, {
      toValue: izquierda,
      duration: mantener * 1000,
      useNativeDriver: true,
    });

    // Mover para arriba
    const animacionYArriba = Animated.timing(circuloY, {
      toValue: arriba,
      duration: exhalar * 1000,
      useNativeDriver: true,
    });

    //Mover a la derecha
    const animacionXDer = Animated.timing(circuloX, {
      toValue: derecha,
      duration: mantener * 1000,
      useNativeDriver: true,
    });
  
    // Empezar las animaciones
    animacionYAbajo.start(() => {
      animacionXIzq.start(() => {
        animacionYArriba.start(() => {
          animacionXDer.start();
        });
      });
    });
  };
  // const cambiarTamanoCirculo = () => {
  // };

  return (
    <View style={styles.container}>
      <View style={[styles.cuadrado, {height: cuadradoTamano, width: cuadradoTamano}]}/>
      <Animated.View style={[styles.circulo, 
          {height: diametroChico,
          width: diametroChico,
          translateY: circuloY,
          translateX: circuloX
          }]}></Animated.View>
          <Button title="Mover círculo" onPress={moverCirculo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: "auto",
  },
  circulo:{
    borderRadius: 50,
    backgroundColor: Colores.celeste,
    position: 'relative'
  },
  cuadrado:
  {
    backgroundColor: "transparent",
    borderWidth: 4,
    borderColor: Colores.blanco,
    borderRadius: 18
  }
});

export default Respirar;
