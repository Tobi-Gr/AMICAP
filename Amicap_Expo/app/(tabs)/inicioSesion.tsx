import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState, useEffect } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';
import BotonTexto from '@/components/BotonTexto';
import DBDomain from '@/constants/dbDomain';

interface Props {
  navigation: any;
}

const InicioSesion: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const [userEmail, setUserEmail] = useState('');
    const [userContrasena, setUserContrasena] = useState('');
    const tamanoTitulo = windowWidth / 10;
    const tamanoTexto = windowWidth * 0.05;

    const handleEmailChange = (nuevoEmail: string) => {
        setUserEmail(nuevoEmail);
    }; 
    const handleContrasenaChange = (nuevaContrasena: string) => {
        setUserContrasena(nuevaContrasena);
    }; 
    const registroPress = () => {
        navigation.navigate("Registro");
    };
    const sinCuentaPress = () => {
        navigation.navigate("Ayuda");
    };

    //DBDomain es el dominio de ngrok
    const urlApi = `${DBDomain}/api/usuario/login`;
    const [token, setToken] = useState<string | null>(null);
    
    //fetch del token
    const fetchToken = async () => {
        try {
            const response = await fetch(urlApi, {
                //metodo POST para mandarle un json
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
            console.log('data: ', data);
            return data;
        } catch (error) {
            console.log('Hubo un error en el fetchToken ', error);
        }
    }

    //Hace el fetch, devuelve el token, lo guarda en el estado y pasa a la Home
    const generateToken = async () => {
        const data = await fetchToken();
        console.log(data);
        if (data.length > 0 && data !== null) {
          setToken(data);
        }
        else throw new Error('Token invalido');
    }

    useEffect( () =>{
        setToken(null);
      }, []);

      useEffect( () =>{
        if (token !== null) {
            navigation.navigate('Home');
        }
      }, [token]);

  return (
    <View style={styles.background}>
        <Texto text="Inicio Sesión" estilo="tituloBlanco" style={{fontSize: tamanoTitulo}}/>
        <View style={styles.inputContainer}>
            <InputTexto  placeholder="Email" onChange={handleEmailChange} keyBoardType='email-address'/>
            <InputTexto  placeholder="Contraseña" onChange={handleContrasenaChange} esContrasena={true}/>
        </View>
        <Boton text="Iniciar" textStyle='textoTurquesa' containerColor='blanco' onPress={generateToken}/>
        <View style={styles.botonesContainer} >
            <Texto text="¿No tenés cuenta?" estilo="textoBlanco" style={{fontSize: tamanoTexto}}/>
            <BotonTexto text="Registrate" onPress={registroPress}/>
            <BotonTexto text="Seguir sin cuenta" onPress={sinCuentaPress}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    background:{
        flex: 1,
        flexDirection: 'column', 
        backgroundColor: Colores.turquesa,
        alignItems: 'center',
        paddingTop: '20%'
    },
    inputContainer: {
        width: '90%',
        height: '35%',
        justifyContent: 'space-evenly',
        marginTop: '10%'
    },
    botonesContainer: {
        height: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5%'
    }
});

export default InicioSesion;