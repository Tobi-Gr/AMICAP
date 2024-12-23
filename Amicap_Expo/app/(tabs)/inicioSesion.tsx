import {StyleSheet, View, Dimensions, Keyboard, Platform} from 'react-native';
import React, { useState, useEffect } from 'react';
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';
import BotonTexto from '@/components/BotonTexto';
import DBDomain from '@/constants/dbDomain';
import {useUserContext} from '@/context/UserContext';

interface Props {
  navigation: any;
}

const InicioSesion: React.FC<Props> = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const [userEmail, setUserEmail] = useState('');
  const [userContrasena, setUserContrasena] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false); // Estado para controlar la visibilidad del teclado
  const tamanoTitulo = windowWidth / 10;
  const tamanoTexto = windowWidth * 0.05;

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

  const handleEmailChange = (nuevoEmail: string) => {
    setUserEmail(nuevoEmail);
  };

  const handleContrasenaChange = (nuevaContrasena: string) => {
    setUserContrasena(nuevaContrasena);
  };

  const registroPress = () => {
    navigation.navigate('Registro');
  };

  const sinCuentaPress = () => {
    navigation.navigate('Ayuda');
  };

  const { token, setToken, usuario, setUsuario } = useUserContext();

  const fetchToken = async () => {
    const urlApi = `${DBDomain}/api/usuario/login`;

    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          contrasena: userContrasena,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (!data || data === null) {
        throw new Error('data failed to response');
      }
      return data;
    } catch (error) {
      console.log('Hubo un error en el fetchToken ', error);
    }
  };

  const generateToken = async () => {
    const data = await fetchToken();
    if (data && data.token) {
      setToken(data.token);
    } else throw new Error('Token invalido');
  };

  const verifyToken = async () => {
    const urlApi = `${DBDomain}/api/usuario/verify/${token}`;
    if (!token) return;
    try {
      const response = await fetch(urlApi);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (!data) {
        throw new Error('data failed to response');
      }
      setUsuario(data);
    } catch (error) {
      console.log('Hubo un error en el VerifyToken ', error);
    }
  };

  useEffect(() => {
    if (token !== null) {
      verifyToken();
    }
  }, [token]);

  useEffect(() => {
    if (usuario !== null) {
      navigation.navigate('Home');
    }
  }, [usuario]);

  return (
    <View style={styles.background}>
      <Texto text="Inicio Sesión" estilo="tituloBlanco" style={{fontSize: tamanoTitulo}} />
      <View style={styles.inputContainer}>
        <InputTexto placeholder="Email" onChange={handleEmailChange} keyBoardType="email-address" />
        <InputTexto placeholder="Contraseña" onChange={handleContrasenaChange} esContrasena={true} />
        <View style={{ alignItems: 'center' }}>
            <Boton text="Iniciar" textStyle="textoTurquesa" containerColor="blanco" onPress={generateToken}/>
        </View>
      </View>
      {!isKeyboardVisible && ( // Ocultar si el teclado está visible
        <View style={styles.botonesContainer}>
          <Texto text="¿No tenés cuenta?" estilo="textoBlanco" style={{fontSize: tamanoTexto}} />
          <BotonTexto text="Registrate" onPress={registroPress} />
          <BotonTexto text="Seguir sin cuenta" onPress={sinCuentaPress} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colores.turquesa,
    alignItems: 'center',
    paddingTop: '20%',
  },
  inputContainer: {
    width: '90%',
    height: Dimensions.get('screen').height * 0.35,
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  botonesContainer: {
    height: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '5%',
  },
});

export default InicioSesion;
