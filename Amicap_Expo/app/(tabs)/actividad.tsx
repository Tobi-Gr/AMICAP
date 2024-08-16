import DBDomain from '../../constants/dbDomain';
import { Image, StyleSheet, Platform, View, Text, Dimensions} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {Colores} from './../../constants/Colors';
import CuadroTexto from '@/components/CuadroTexto';
import Piso from './../../components/Piso';
import Flecha from '@/components/Flecha';
import BotonPrincipal from '@/components/BotonPrincipal';

interface Actividad {
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
    const urlApi = `${DBDomain}/api/actPreferida/1`;
    const [actividades, setActividades] = useState<Actividad[]>([]);
    let [selectedActividad, setSelectedActividad] = useState<Actividad>({nombre: '', paso_uno: '', paso_dos:'', paso_tres:'', paso_cuatro:''});
    
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
        console.log('data: ', data);
        return data;
      } catch (error) {
        console.log('Hubo un error en el fetchActividades ', error);
      }
    }

    const randomActividad = () => {
      try {
        console.log('random: ', actividades);
        //selecciona una actividad random
        const rnd = Math.floor(Math.random() * actividades.length)
        setSelectedActividad(actividades[rnd]);
        //elimina la actividad seleccionada del array
        setActividades(actividades.filter(actividad => actividad !== actividades[rnd]));
      } catch (error) {
        console.log('Hubo un error en el randomActividad ', error);
      }
    }
    
    const mapearActividades = (data: Actividad[]) => {
      console.log('map: ', data);
      setActividades(data);
    }

    useEffect( () =>{
      const fetchAndSetActividades = async () => {
        const data = await fetchActividades();
        if (data.length > 0) {
          setActividades(data);
        }
      };
      fetchAndSetActividades();
      console.log('effect: ', actividades);

    }, []);

    useEffect( () =>{
      if(actividades.length > 0) {
        //selecciona una actividad random
        randomActividad(); 
      }
    }, [actividades]);

    function handleOnPressHome(){
      navigation.navigate('Home');
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
          <BotonPrincipal texto={"Proxima actividad"} styleText={{fontSize: tamanoFuente}} onPress={randomActividad}/> 
          <BotonPrincipal texto={"Terminar"} styleText={{fontSize: tamanoFuente}} onPress={handleOnPressHome}/>
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
