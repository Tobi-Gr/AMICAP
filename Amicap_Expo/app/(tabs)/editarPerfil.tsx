import { StyleSheet, View, Dimensions, Keyboard } from 'react-native';
import React, { useState, useEffect } from "react";
import { Colores } from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';
import FondoAzulEditarPerfil from '@/components/FondoAzulEditarPerfil';
import Flecha from '@/components/Flecha';
import ConfirmarContrasenaModal from '@/components/ConfirmarContrsenaModal';

interface Props {
  navigation: any;
}

const EditarPerfilScreen: React.FC<Props> = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoTitulo = windowWidth / 10;
  const tamanoTexto = windowWidth * 0.05;
  const flechaTamano = windowWidth / 10;
  const botonesY = windowHeight / 4;
  const tamanoFuente = windowWidth / 20;

  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');
  const [confirmacion, setConfirmacion] = useState<string>('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false); // Estado para controlar la visibilidad del teclado

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // Muestra elementos si el teclado está visible
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // Oculta elementos si el teclado no está visible
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const [visible, setVisible] = useState(false);
  const abrirModal = () =>
  {
    if (contrasena == confirmacion) setVisible(true);
    else alert('contraseña y confirmar contraseña no coinciden');
  };

    return (
      <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.turquesa}/>
        <ConfirmarContrasenaModal visible={visible} setVisible={setVisible} nombre={nombre} email={email} contrasena={contrasena}/>
        <View style={styles.tituloContainer}>
          <Texto text='Editar'estilo="textoTurquesa" style={{ fontSize: tamanoFuente }} />
        </View>
        <FondoAzulEditarPerfil/>
        <View style={styles.inputContainer}>
          <InputTexto placeholder="Nombre" onChange={setNombre}/>
          <InputTexto placeholder="Email" onChange={setEmail}/>   
          <InputTexto placeholder="Nueva contraseña" onChange={setContrasena} esContrasena={true}/>
          <InputTexto  placeholder="Confirmar contraseña" onChange={setConfirmacion} esContrasena={true}/>
        </View>
        {!isKeyboardVisible && (
          <View style={styles.botoncontainer}>
            <Boton text="Cancelar" onPress={abrirModal} containerColor={'turquesa'} textStyle={'textoBlanco'}/>
            <Boton text="Guardar" onPress={abrirModal} containerColor={'blanco'} textStyle={'textoTurquesa'}/>
          </View>
        )}
        
      </View>

      );  
    };    

  const styles = StyleSheet.create({
    inputContainer:{      
      position: 'absolute',
      top: Dimensions.get('screen').height * 0.2,
      left: '5%',
      right: '5%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: Dimensions.get('screen').height * 0.35
    },    
    botoncontainer:{      
      position: 'absolute',
      width: '100%',
      bottom: '5%',
      right: '2.5%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    tituloContainer:{
      position: 'absolute',
      left: '12.5%',
      top: 25
    }
  });


  export default EditarPerfilScreen;

    