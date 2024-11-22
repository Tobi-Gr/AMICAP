import DBDomain from '../../constants/dbDomain';
import { Image, StyleSheet, Platform, View, Text, Dimensions} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {Colores} from './../../constants/Colors';
import { useUserContext } from '@/context/UserContext';
import CuadroTexto from '@/components/CuadroTexto';
import Piso from './../../components/Piso';
import Flecha from '@/components/Flecha';
import Boton from '@/components/Boton';

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

  const {usuario} = useUserContext();

  const [actividades, setActividades] = useState<Actividad[]>([]);
  const [selectedActividad, setSelectedActividad] = useState<Actividad>({nombre: '', paso_uno: '', paso_dos:'', paso_tres:'', paso_cuatro:''});
  const [pasoActual, setPasoActual] = useState<number>(1);
  const [enunciado, setEnunciado] = useState<string>('');
  
  
  //toma las actividades preferidas de la API
  const fetchActividades = async () => {
    let urlApi;
    if(usuario)
    {
      urlApi = `${DBDomain}/api/actPreferida/${usuario?.id}`;
    }
    else urlApi = `${DBDomain}/api/actividades`;
    try {
      const response = await fetch(urlApi);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (!data) {
        throw new Error('data failed to response');
      }
      return data;
    } catch (error) {
      console.log('Hubo un error en el fetchActividades ', error);
    }
  }
  
  const randomActividad = async () => {
    try {
      console.log('random: ', actividades);
      //selecciona una actividad random
      if (actividades.length > 0) {
        const rnd = Math.floor(Math.random() * actividades.length)
        const nuevaAct = actividades[rnd];
        setSelectedActividad(nuevaAct);
        setPasoActual(1);
        setEnunciado(nuevaAct.paso_uno)
        //Elimina la actividad seleccionada del array
        //No funciona bien esto
        let nuevasActividades = actividades;
        nuevasActividades.splice(rnd, 1);
        console.log(nuevasActividades);
        setActividades(nuevasActividades);
      }
    } catch (error) {
      console.log('Hubo un error en el randomActividad ', error);
    }
  }

  const siguientePaso = async () => {
    try {
      switch (pasoActual) {
        case 1:
          if(selectedActividad.paso_dos !== null)
          {
            setPasoActual(2);
            setEnunciado(selectedActividad.paso_dos ?? '');
          }
          else randomActividad();
          break;
          case 2:
            if(selectedActividad.paso_tres !== null)
            {
              setPasoActual(3);
              setEnunciado(selectedActividad.paso_tres ?? '');
            }
            else randomActividad();
          break;
          case 3:
            if(selectedActividad.paso_cuatro !== null)
            {
              setPasoActual(4);
              setEnunciado(selectedActividad.paso_cuatro ?? '');
            }
            else randomActividad();
          break;
          case 4:
            randomActividad();
          break;
        default:
        break;
      }
    } catch (error) {
      console.log('Hubo un error en el siguientePaso ', error);
    }
  }

  useEffect( () =>{
    const fetchAndSetActividades = async () => {
      const data = await fetchActividades();
      console.log('fetchAndSetActividades: ', data );
      if (data.length > 0) {
        setActividades(data);
      }
    };

    fetchAndSetActividades();
  }, []);

  useEffect( () =>{
    if(actividades.length > 0) {
      //selecciona una actividad random
      randomActividad();
    }
  }, [actividades]);

  useEffect( () =>{
    console.log('selectedActividad', selectedActividad);
  }, [selectedActividad]);

  function handleOnPressHome(){
    navigation.navigate('Home');
  }

  //arreglar la direccion de los botones
  return (
    <View style={{ flex: 1, backgroundColor: Colores.turquesa }} >
    <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Home"} color={Colores.blanco}/>
    <CuadroTexto 
      actividad={enunciado} 
      style={{top: dialogoY, left: dialogoX}}
      textStyle={{fontSize: tamanoFuente}}/>
    <View style={[styles.buttonsContainer, {top: botonesY, left:botonesX}]}>
      <Boton text={"Proxima actividad"} tamanoFuenteProps={tamanoFuente} onPress={siguientePaso}  containerColor={'blanco'} textStyle={'textoTurquesa'}/> 
      <Boton text={"Terminar"} tamanoFuenteProps={tamanoFuente} onPress={handleOnPressHome}  containerColor={'turquesa'} textStyle={'textoBlanco'}/> 
    </View>
    
    <Piso/>
  </View>
  );
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
