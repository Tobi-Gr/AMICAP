import { Image, StyleSheet, Platform, View, Text, Dimensions} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import Texto from '@/components/Texto'
import {Colores} from './../../constants/Colors';

interface Actividad
{
    nombre:string;
    numero:string;
}

const ActividadScreen: React.FC = () => {  
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const tamanoFuente = windowWidth / 10;
    
    const urlApi = "http://localhost:3000/api/actPreferida/1";
    const [Actividades, setActividades] = useState<Actividad[]>([]);
    let [selectedActividad, setSelectedActividad] = useState<Actividad | null>(null);
    selectedActividad = {"numero": "0", "nombre": ""};

    const fetchActividades = async () => {
        try {
            const response = await fetch(urlApi);
            if (!response.ok) {
            throw new Error('Failed to fetch data');
            }
            const data = await response.json();
    
            // Mapear los resultados para adaptarlos al formato de Contacto que se espera
            const mappedActividades: Actividad[] = data.results.map((result: any) =>
            ({
                nombre: result.nombre,
                numero: result.number,
            }));
            setActividades(mappedActividades);
    
            //selecciona una actividad random
            const rnd = Math.floor(Math.random() * mappedActividades.length)
            setSelectedActividad(mappedActividades[rnd]);
        } catch (error) {
            console.log('Hubo un error ', error);
        }
  
    }

    useEffect(() =>{
        fetchActividades();
    }, []);

  return (
      <View style={{flex: 1, backgroundColor: Colores.blanco}}>
          <Texto text={selectedActividad.nombre} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }}/> 
      </View>
        );    
  };

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  }
});
export default ActividadScreen;
