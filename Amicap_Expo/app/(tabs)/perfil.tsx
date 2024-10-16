import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import { useUserContext } from '@/context/UserContext';
import {Colores} from '../../constants/Colors';
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
//<ContactosModal visible={visible} setVisible={setVisible} contactosArray={contactos} mensaje={mensaje}/>
// const [visible, setVisible] = useState(false);
// const abrirModal = () =>
// {
//   setVisible(true);
// };


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
    const email = 'usuario@gmail.com';
    
    function handleOnPressEliminarCuenta () {
      setVisibleEliminar(true);
    };
    
    function handleOnPressCerrarSesion(){
      setVisibleSesion(true);
    }
    
    function eliminarCuenta(){
      console.log("Se eliminó la cuenta");
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
            <RecEmail email={email}/>
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