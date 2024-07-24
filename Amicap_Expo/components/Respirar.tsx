import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, StyleSheet, Dimensions, Text } from 'react-native';
import { Colores } from './../constants/Colors';
import Texto from './Texto';

interface Props {
  inhalar: number,
  exhalar: number,
  mantener: number
}

const Respirar: React.FC<Props> = ({ inhalar, exhalar, mantener }) => {
  const windowWidth = Dimensions.get('window').width;
  const tamanoFuente = windowWidth / 10;

  const cuadradoTamano = windowWidth / 1.5;
  const diametroChico = cuadradoTamano / 6;
  const arriba = -cuadradoTamano - diametroChico / 2;
  const abajo = -diametroChico / 2;
  const derecha = cuadradoTamano / 2;
  const izquierda = -derecha;

  const circuloY = useRef(new Animated.Value(arriba)).current;
  const circuloX = useRef(new Animated.Value(derecha)).current;
  const escalaCirculo = useRef(new Animated.Value(1)).current;
  const [texto, setTexto] = useState('Inhala');
 // const [contador, setContador] = useState(inhalar);

  useEffect(() => {
    // Actualizar el texto en función de la duración de la animación
    const inhalarDuracion = inhalar * 1000;
    const exhalarDuracion = exhalar * 1000;
    const mantenerDuracion = mantener * 1000;

    const cambiarTexto = () => {
      setTexto('Inhala');
      setTimeout(() => setTexto('Espera'), inhalarDuracion);
      setTimeout(() => setTexto('Exhala'), inhalarDuracion + mantenerDuracion);
      setTimeout(() => setTexto('Espera'), inhalarDuracion + mantenerDuracion + exhalarDuracion);
    };
    cambiarTexto();

  //  const cambiarContador =() => {
  //    setContador(inhalar);
  //    while(contador != 1)
  //    {
  //      setTimeout(() => setContador(contador - 1), 1000);
  //    }
  //    setContador(mantener);
  //    while(contador != 1)
  //    {
  //        setTimeout(() => setContador(contador - 1), 1000);
  //    }
  //    setContador(exhalar);
  //    while(contador != 1)
  //      {
  //          setTimeout(() => setContador(contador - 1), 1000);
  //      }
  //    setContador(mantener);
  //    while(contador != 1)
  //      {
  //          setTimeout(() => setContador(contador - 1), 1000);
  //      }
  //  };
  //  cambiarContador();

    const intervalo = setInterval(cambiarTexto, inhalarDuracion + mantenerDuracion * 2 + exhalarDuracion);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);

  }, [inhalar, exhalar, mantener]);

  

  const moverCirculo = () => {
    // Mover y agrandar para abajo
    const animacionYAbajo = Animated.timing(circuloY, {
      toValue: abajo,
      duration: inhalar * 1000,
      useNativeDriver: true,
    });

    const animacionAgrandar = Animated.timing(escalaCirculo, {
      toValue: 2,
      duration: inhalar * 1000,
      useNativeDriver: true,
    });

    // Mover y achicar para arriba
    const animacionYArriba = Animated.timing(circuloY, {
      toValue: arriba,
      duration: exhalar * 1000,
      useNativeDriver: true,
    });

    const animacionAchicar = Animated.timing(escalaCirculo, {
      toValue: 1,
      duration: exhalar * 1000,
      useNativeDriver: true,
    });

    // Mover para la izquierda
    const animacionXIzq = Animated.timing(circuloX, {
      toValue: izquierda,
      duration: mantener * 1000,
      useNativeDriver: true,
    });

    // Mover para la derecha
    const animacionXDer = Animated.timing(circuloX, {
      toValue: derecha,
      duration: mantener * 1000,
      useNativeDriver: true,
    });

    // Empezar las animaciones en paralelo y en bucle
    return Animated.loop(
      Animated.sequence([
        Animated.parallel([
          animacionYAbajo,
          animacionAgrandar,
        ]),
        animacionXIzq,
        Animated.parallel([
          animacionYArriba,
          animacionAchicar,
        ]),
         animacionXDer
      ])
    ).start();
  };

  useEffect(() => {
    moverCirculo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.cuadrado, { height: cuadradoTamano, width: cuadradoTamano }]}>
        <View>
          <Texto text={texto} estilo='tituloBlanco' style={{ fontSize: tamanoFuente }}/>
        </View>
      </View>
      <Animated.View style={[styles.circulo, 
        {
          transform: [
            { translateY: circuloY },
            { translateX: circuloX },
            { scale: escalaCirculo }
          ]
        }
      ]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  circulo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colores.celeste,
    position: 'relative'
  },
  cuadrado: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: Colores.blanco,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Respirar;
