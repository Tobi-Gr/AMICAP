import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import DBDomain from '@/constants/dbDomain';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';
import BotonTexto from '@/components/BotonTexto';

interface Props {
  navigation: any;
}

const Registro: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const [email, setEmail] = useState<string>('');
    const [nombre, setNombre] = useState<string>('');
    const [confirmacion, setConfirmacion] = useState<string>('');
    const [contrasena, setContrasena] = useState<string>('');
    const tamanoTitulo = windowWidth / 10;
    const tamanoTexto = windowWidth * 0.05;


    const handleEmailChange = (nuevoEmail: string) => {
        setEmail(nuevoEmail);
    }; 
    const handleConfirmacionChange = (nuevaConfirmacion: string) => {
        setConfirmacion(nuevaConfirmacion);
    }; 
    const handleNombreChange = (nuevoNombre: string) => {
        setNombre(nuevoNombre);
    }; 
    const handleContrasenaChange = (nuevaContrasena: string) => {
        setContrasena(nuevaContrasena);
    }; 
    const inicioSesionPress = () => {
        navigation.navigate("InicioSesion");
    };
    const sinCuentaPress = () => {
        navigation.navigate("Ayuda");
    };

    //fetch del token
    const createUser = async () => {
        //DBDomain es el dominio de ngrok
        const urlApi = `${DBDomain}/api/usuario/register`;

        try {
            const response = await fetch(urlApi, {
                //metodo POST para mandarle un json
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: nombre,
                    email: email,
                    contrasena: contrasena,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            if (!data || data === null) {
                throw new Error('data failed to response');
            }
            console.log('data.Fetch: ', data);
            return data;
        } catch (error) {
            console.log('Hubo un error en el createUser ', error);
        }
    }

    const register = async () => {
        if (contrasena == confirmacion)
        {
            const data = await createUser();
            console.log('user: ', data);
            if (data > 0)
            {
              navigation.navigate('InicioSesion');
            }
            else throw new Error('no se pudo crear la cuenta');
        }
        else throw new Error('contraseña y confirmar contraseña no coinciden');
    }

    return (
        <View style={styles.background}>
            <Texto text="Inicio Sesión" estilo="tituloBlanco" style={{fontSize: tamanoTitulo}}/>
            <View style={styles.inputContainer}>
                <InputTexto  placeholder="Nombre" onChange={handleNombreChange}/>
                <InputTexto  placeholder="Email" onChange={handleEmailChange} keyBoardType='email-address'/>
                <InputTexto  placeholder="Contraseña" onChange={handleContrasenaChange} esContrasena={true}/>
                <InputTexto  placeholder="Confirmar contraseña" onChange={handleConfirmacionChange} esContrasena={true}/>
            </View>
            <Boton text="Registrar" textStyle='textoTurquesa' containerColor='blanco' onPress={(register)}/>
            <View style={styles.botonesContainer} >
                <Texto text="¿Ya tenés cuenta?" estilo="textoBlanco" style={{fontSize: tamanoTexto}}/>
                <BotonTexto text="Inicia sesión" onPress={inicioSesionPress}/>
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
        height: '50%',
        justifyContent: 'space-evenly',
    },
    botonesContainer: {
        height: '20%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5%'
    }
});

export default Registro;