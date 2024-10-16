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
  const diametro = windowWidth * 0.2;
  const tamanoFuente = diametro / 5;


  return (
    <TouchableOpacity
      activeOpacity={1} 
      style={[styles.container, { width: diametro, height: diametro }]}>
      <View style={[styles.circulo, { height: diametro, width: diametro }]}> 
      <Texto
          text={`${tipo === 'semanal' ? 'Ataques Semanales' : 'Ataques Mensuales'}: ${ataquesContados}`}
          estilo="tituloTurquesa"
          style={{ fontSize: tamanoFuente }}
        />
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
    borderRadius: 10,
    backgroundColor: Colores.blanco,
    zIndex: 1,
  },
});

export default Ataque;
