import { Image, StyleSheet, Platform, View, Text, Dimensions} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {Colores} from './../../constants/Colors';
import CuadroTexto from '@/components/CuadroTexto';
import Piso from './../../components/Piso';
import Flecha from '@/components/Flecha';
import BotonPrincipal from '@/components/BotonPrincipal';

interface Actividad
{
    nombre:string;
    paso_uno:string;
    paso_dos?:string;
    paso_tres?:string;
    paso_cuatro?:string;
}

interface Props {
    navigation: any;
}

const ActividadScreen: React.FC<Props> = ({navigation}) => {  
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const tamanoFuente = windowWidth / 18;
    const botonesX = windowWidth / 5.5;
    const botonesY = windowHeight / 4.5;
  
  
    const dialogoY = windowHeight / 9.4;
    const dialogoX = windowWidth / 4.5;
  
    const flechaTamano = windowWidth / 10;

    //hay que poner la IP de donde se este hosteando la API
    const urlApi = "http://192.168.0.157:3000/api/actPreferida/1";
    const [Actividades, setActividades] = useState<Actividad[]>([]);
    let [selectedActividad, setSelectedActividad] = useState<Actividad>({ nombre: '', paso_uno: '' });
    
    const fetchActividades = async () => {
      try {
          const response = await fetch(urlApi);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          if (!data) {
            throw new Error('data failed to response');
          }

          // Mapear los resultados para adaptarlos al formato de Contacto que se espera
          const mappedActividades: Actividad[] = data.map((result: any) =>
          ({
              nombre: result.nombre,
              paso_uno: result.paso_uno,
          }));

          //selecciona una actividad random
          const rnd = Math.floor(Math.random() * mappedActividades.length)
          setSelectedActividad(mappedActividades[rnd]);
      } catch (error) {
          console.log('Hubo un error en el try ', error);
      }
  
    }

    useEffect(() =>{
        fetchActividades();
    }, []);

    function handleOnPressRespiracion(){
      navigation.navigate('Ayuda');
    }
    function handleOnPressActividad(){
      navigation.navigate('Actividad');
      }

    //arreglar la direccion de los botones
    return (
        <View style={{ flex: 1, backgroundColor: Colores.turquesa }} >
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Home"}/>
        <CuadroTexto 
          actividad={selectedActividad.paso_uno} 
          style={{top: dialogoY, left: dialogoX}}
          textStyle={{fontSize: tamanoFuente}}/>
        <View style={[styles.buttonsContainer, {top: botonesY, left:botonesX}]}>
          <BotonPrincipal texto={"Proxima actividad"} styleText={{fontSize: tamanoFuente}} onPress={handleOnPressRespiracion}/> 
          <BotonPrincipal texto={"Terminar"} styleText={{fontSize: tamanoFuente}} onPress={handleOnPressActividad}/>
        </View>
        
        <Piso/>
      </View>
      );
        //<Texto text={selectedActividad.paso_uno} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }}/> 
  };

  const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      alignItems: 'center',
    },
    flecha: {
      position: 'absolute',
      left: '5%',
    },
    buttonsContainer:{
      alignContent: 'center',
      marginHorizontal: 'auto'
    }
  });

export default ActividadScreen;
