import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Colores } from './../constants/Colors';
import Texto from './Texto';

interface Ataque{
    fecha: Date,
}

interface Props{
  ataques: Ataque[];
  tipo: 'semanal' | 'mensual';
}

const Ataque: React.FC<Props> = ({ ataques, tipo}) => {
  const [ataquesContados, setAtaquesContados] = useState<number>(0);

  useEffect(() => {
    const calcularAtaques = () => {
      const ahora = new Date();

      let ataquesFiltrados = [];
      
      if (tipo === 'semanal') {
        ataquesFiltrados = ataques.filter(ataque => {
          const diferenciaSemana = (ahora.getTime() - new Date(ataque.fecha).getTime()) / (1000 * 3600 * 24);
          return diferenciaSemana <= 7 && diferenciaSemana >= 0;
        });
      } else if (tipo === 'mensual') {
        ataquesFiltrados = ataques.filter(ataque => {
          const diferenciaMes = (ahora.getTime() - new Date(ataque.fecha).getTime()) / (1000 * 3600 * 24 * 30); // Aproximadamente 30 días
          return diferenciaMes <= 1 && diferenciaMes >= 0;
        });
      }

      setAtaquesContados(ataquesFiltrados.length);
    };

    calcularAtaques();
  }, [ataques, tipo]);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight= Dimensions.get('window').height
  const ancho = windowWidth * 0.4;
  const alto = windowWidth * 0.3;
  const tamanoFuente = ancho / 7.5;
  const tamanoNumero = ancho / 5;


  return (
    <View
      style={[styles.container, { width: ancho, height: alto }]}>
      <View style={[styles.card, { height: alto, width: ancho }]}> 
      <Texto text={`${ataquesContados}`} estilo="tituloTurquesa" style={{ fontSize: tamanoNumero }}/>
      <Texto
          text={`${tipo === 'semanal' ? 'Ataques esta semana' : 'Ataques este \n mes'}`}
          estilo="tituloTurquesa"
          style={{ fontSize: tamanoFuente, textAlign: 'center' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colores.blanco,
    //zIndex: 1,
  },
});

export default Ataque;
