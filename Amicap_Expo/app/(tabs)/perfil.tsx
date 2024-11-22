import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import { useUserContext } from '@/context/UserContext';
import {Colores} from '../../constants/Colors';
import DBDomain from '@/constants/dbDomain';
import Texto from '@/components/Texto';
import Navbar from '@/components/Navbar';
import FondoAzul from '@/components/FondoAzul';
import Edit from '@/components/icons/Edit';
import BotonTextoIcono from '@/components/BotonTextoIcono';
import Boton from '@/components/Boton';
import RecEmail from '@/components/RecEmail';
import ConfirmarModal from '@/components/ConfirmarModal';

interface Props {
  navigation: any;
}

const PerfilScreen: React.FC<Props> = ({ navigation }) => {
  const [visibleSesion, setVisibleSesion] = useState(false);
  const [visibleEliminar, setVisibleEliminar] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  //const tamanoTitulo = windowWidth / 10;
  const tamanoFuente = windowWidth / 10;
  const yTexto = windowHeight / 10;
  const botonesX = windowWidth / 5.5;
  const botonesY = windowHeight / 4.5;
  const editTamano = windowWidth / 10;
  const rectangleHeight = windowHeight * 0.7;

  //dsp hacer que el nombre y email salga de la base de datos
  const {token, setToken, usuario, setUsuario} = useUserContext();
  const nombre = usuario?.username;
  const email = usuario?.email;
  
  async function eliminarUsuario() {
    const urlApi = `${DBDomain}/api/usuario/${usuario?.id}`;

    try {
      const response = await fetch(urlApi, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      if (!data) {
        throw new Error('data failed to response');
      }
      return data;
    } catch (error) {
      console.error('Hubo un error al eliminar el usuario:', error);
    }
  }

  function handleOnPressEliminarCuenta () {
    setVisibleEliminar(true);
  };
  
  function handleOnPressCerrarSesion(){
    setVisibleSesion(true);
  }
  
  const eliminarCuenta = async () =>
  {
    let data = await eliminarUsuario();
    if (data !== null)
    {
      setToken(null);
      setUsuario(null);
      navigation.navigate('Inicio');
    }
    else alert('algo salio mal, por favor intente denuevo');
  }

  function cerrarSesion()  {
    setToken(null);
    setUsuario(null);
    console.log("Se cerró la sesión");
    navigation.navigate('Inicio');
  };

  function handleOnPressContactos(){
    navigation.navigate ('ContactosConfig')
  }

  function handleOnPressRegistros(){
    navigation.navigate ('RegistroData')
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
      <ConfirmarModal visible={visibleSesion} setVisible={setVisibleSesion} prompt='¿Querés cerrar sesión?' confirmado={cerrarSesion}/>
      <ConfirmarModal visible={visibleEliminar} setVisible={setVisibleEliminar} prompt='¿Querés eliminar tu cuenta?' confirmado={eliminarCuenta} aclaracion={"No vas a poder recuperar tu información"}/>
      <View style={styles.edit}>
        <Edit height={editTamano} width={editTamano} color={Colores.turquesa} onPress={() => navigation.navigate('EditarPerfil')}/>
      </View>
        <View style={[styles.titleContainer, { marginTop: yTexto }]}>
          <Texto text={nombre || 'Usuario'} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} /> 
        </View>
        <FondoAzul/>

        <View style={styles.itemContainer}>   
          <RecEmail email={email || 'email@gmail.com'}/>
          <BotonTextoIcono text="Tus contactos" icon="contact" onPress={handleOnPressContactos}/>
          <BotonTextoIcono text="Tus registros" icon="graph" onPress={handleOnPressRegistros}/>
        </View>
        <View style={styles.buttonsContainer}>
          <Boton text="Eliminar cuenta" onPress={handleOnPressEliminarCuenta} containerColor={'turquesa'} textStyle={'textoBlanco'} />
          <Boton text="Cerrar sesión" onPress={handleOnPressCerrarSesion} containerColor={'turquesa'} textStyle={'textoBlanco'}/>
        </View> 
      
      <Navbar tipo="profile" navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  edit: {
    position: 'absolute',
    left: '85%',
    top: 20
  },
  buttonsContainer:{
    // position: 'absolute',
    // bottom: 70, 
    // left: '5%',
    // right: '5%', 
    // flexDirection: 'column', 
    // alignItems: 'center', 
    position: 'absolute',
      width: '100%',
      bottom: '10%',
      right: '2.5%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
  },
  itemContainer:{        
    position: 'absolute',
    top: '30%',//Dimensions.get('screen').height * 0.25,
    left: '5%',
    right: '5%', 
    flexDirection: 'column', 
    alignItems: 'center',    
  },
  fondo:
  {
    position: 'absolute',
    top: '21%'
  },
 
});


export default PerfilScreen;