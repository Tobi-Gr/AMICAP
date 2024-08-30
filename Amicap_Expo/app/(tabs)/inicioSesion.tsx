import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';
import BotonTexto from '@/components/BotonTexto';

interface Props {
  navigation: any;
}

const InicioSesion: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const tamanoTitulo = windowWidth / 10;
    const tamanoTexto = windowWidth * 0.05;
    

    const handleEmailChange = (nuevoEmail: string) => {
        setEmail(nuevoEmail);
    }; 
    const handleContrasenaChange = (nuevaContrasena: string) => {
        setContrasena(nuevaContrasena);
    }; 
    const registroPress = () => {
        navigation.navigate("Registro");
    };
    const sinCuentaPress = () => {
        navigation.navigate("Ayuda");
    };

  return (
    <View style={styles.background}>
        <Texto text="Inicio Sesión" estilo="tituloBlanco" style={{fontSize: tamanoTitulo}}/>
        <View style={styles.inputContainer}>
            <InputTexto  placeholder="Email" onChange={handleEmailChange} keyBoardType='email-address'/>
            <InputTexto  placeholder="Contraseña" onChange={handleContrasenaChange} esContrasena={true}/>
        </View>
        <Boton text="Iniciar" textStyle='textoTurquesa' containerColor='blanco'/>
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