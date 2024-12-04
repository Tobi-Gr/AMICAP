import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
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

const Ataque: React.FC<Props> = ({ ataques, tipo }) => {
  const [ataquesContados, setAtaquesContados] = useState<number>(0);


  const getUltimoDomingo = (date: Date) => {
    const domingo = new Date(date);
    domingo.setDate(domingo.getDate() - domingo.getDay()); // ajusta al último domingo
    domingo.setHours(0, 0, 0, 0); // acomoda hora 00:00:00
    return domingo;
  };

  const getPrimerDiaMes = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1); // Primer día del mes
    firstDay.setHours(0, 0, 0, 0);
    return firstDay;
  };

  useEffect(() => {
    const calcularAtaques = () => {
      const ahora = new Date();
      let ataquesFiltrados = [];

      if (tipo === 'semanal') {
        const ultimoDomingo = getUltimoDomingo(ahora);
        const principioSemana = ultimoDomingo;
        const FinSemana = new Date(principioSemana);
        FinSemana.setDate(principioSemana.getDate() + 6); // Suma 6 días al domingo

        ataquesFiltrados = ataques.filter(ataque => {
          const fechaAtaque = new Date(ataque.fecha);
          return fechaAtaque >= principioSemana && fechaAtaque <= FinSemana;
        });
      } else if (tipo === 'mensual') {
        const primerDiaMes = getPrimerDiaMes(ahora);
        ataquesFiltrados = ataques.filter(ataque => {
          const fechaAtaque = new Date(ataque.fecha);
          return fechaAtaque >= primerDiaMes && fechaAtaque < new Date(primerDiaMes.getFullYear(), primerDiaMes.getMonth() + 1, 0); // Se fija que esté adentro del mes
        });
      }

      setAtaquesContados(ataquesFiltrados.length);
    };

    calcularAtaques();
  }, [ataques, tipo]);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ancho = windowWidth * 0.4;
  const alto = windowWidth * 0.3;
  const tamanoFuente = ancho / 7.5;
  const tamanoNumero = ancho / 5;

  return (
    <View
      style={[styles.container, { width: ancho, height: alto }]}>
      <View style={[styles.card, { height: alto, width: ancho }]}> 
        <Texto text={`${ataquesContados}`} estilo="tituloTurquesa" style={{ fontSize: tamanoNumero }} />
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
    borderRadius: 18,
    backgroundColor: Colores.blanco,
  },
});

export default Ataque;
