import { Image, StyleSheet, Platform, View, Text, Dimensions} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import Texto from '@/components/Texto'
import {Colores} from './../../constants/Colors';

interface Actividad
{
    nombre:string;
    numero:string;
}

export default function ActividadScreen() {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoFuente = windowWidth / 10;

  const urlApi = "http://localhost:3000/api/actPreferida/1";
  const [fetchedActividades, setFetchedActividades] = useState<Actividad[]>([]);
  const [selectedActividad, setSelectedActividad] = useState<Actividad | null>(null);
  useEffect(() => {
    fetch(urlApi)
        .then(response => response.json())
        .then(data => 
        {
          // Mapear los resultados para adaptarlos al formato de Contacto que se espera
          const mappedActividades: Actividad[] = data.results.map((result: any) =>
          ({
            nombre: result.nombre,
            numero: result.number,
            }));
        setFetchedActividades(mappedActividades);
            const rnd = Math.floor(Math.random() * mappedActividades.length)
            setSelectedActividad(mappedActividades[rnd]);
    })
        })
    //     .catch(error => console.log('Hubo un error ' + error));
    // }, []);

  return (
      <View style={{flex: 1, backgroundColor: Colores.blanco}}>
          <Texto text={"Página de ayuda"} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }}/> 
      </View>
        );    
      
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  }
});
