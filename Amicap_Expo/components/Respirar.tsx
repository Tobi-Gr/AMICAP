import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
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
  const [contador, setContador] = useState(inhalar);
  useEffect(() => {
    const inhalarDuracion = inhalar * 1000;
    const exhalarDuracion = exhalar * 1000;
    const mantenerDuracion = mantener * 1000;
    let contadorInterval: NodeJS.Timeout;
    const cambiarTextoYContador = () => {
      setTexto('Inhala');
      setContador(inhalar);
      clearInterval(contadorInterval);
      contadorInterval = setInterval(() => {
        setContador((prevContador) => {
          if (prevContador > 1) {
            return prevContador - 1;
          } else {
            clearInterval(contadorInterval);
            return 0;
          }
        });
      }, 1000);
      setTimeout(() => {
        setTexto('Mantener');
        setContador(mantener);
        clearInterval(contadorInterval);
        contadorInterval = setInterval(() => {
          setContador((prevContador) => {
            if (prevContador > 1) {
              return prevContador - 1;
            } else {
              clearInterval(contadorInterval);
              return 0;
            }
          });
        }, 1000);
      }, inhalarDuracion);
      setTimeout(() => {
        setTexto('Exhala');
        setContador(exhalar);
        clearInterval(contadorInterval);
        contadorInterval = setInterval(() => {
          setContador((prevContador) => {
            if (prevContador > 1) {
              return prevContador - 1;
            } else {
              clearInterval(contadorInterval);
              return 0;
            }
          });
        }, 1000);
      }, inhalarDuracion + mantenerDuracion);
      setTimeout(() => {
        setTexto('Mantener');
        setContador(mantener);
        clearInterval(contadorInterval);
        contadorInterval = setInterval(() => {
          setContador((prevContador) => {
            if (prevContador > 1) {
              return prevContador - 1;
            } else {
              clearInterval(contadorInterval);
              return 0;
            }
          });
        }, 1000);
      }, inhalarDuracion + mantenerDuracion + exhalarDuracion);
    };
    cambiarTextoYContador();
    const intervalo = setInterval(cambiarTextoYContador, inhalarDuracion + mantenerDuracion * 2 + exhalarDuracion);
    // Limpia el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(intervalo);
      clearInterval(contadorInterval);
    };
  }, [inhalar, exhalar, mantener]);
  const moverCirculo = () => {
 
    const animacionAgrandar = Animated.timing(escalaCirculo, {
      toValue: 1.5,
      duration: inhalar * 1000,
      useNativeDriver: true,
    });
 
    const animacionAchicar = Animated.timing(escalaCirculo, {
      toValue: 1,
      duration: exhalar * 1000,
      useNativeDriver: true,
    });
 
    const animacionYAbajo = Animated.timing(circuloY, {
      toValue: abajo,
      duration: inhalar * 1000,
      useNativeDriver: true,
    });
    const animacionYArriba = Animated.timing(circuloY, {
      toValue: arriba,
      duration: exhalar * 1000,
      useNativeDriver: true,
    });
    const animacionXIzq = Animated.timing(circuloX, {
      toValue: izquierda,
      duration: mantener * 1000,
      useNativeDriver: true,
    });
    const animacionXDer = Animated.timing(circuloX, {
      toValue: derecha,
      duration: mantener * 1000,
      useNativeDriver: true,
    });
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
        <View style={styles.textoContainer}>
          <Texto text={texto} estilo='tituloBlanco' style={{ fontSize: tamanoFuente }}/>
          <Texto text={contador.toString()} estilo='tituloBlanco' style={{ fontSize: tamanoFuente }}/>
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
  },
  textoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default Respirar;