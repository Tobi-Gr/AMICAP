import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';

interface Props {
  navigation: any;
}

const InicioSesion: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const tamanoTitulo = windowWidth / 10;
    const tamanoTexto = windowWidth / 20;
    

    const handleEmailChange = (nuevoEmail: string) => {
        setEmail(nuevoEmail);
    }; 
    const handleContrasenaChange = (nuevaContrasena: string) => {
        setContrasena(nuevaContrasena);
    }; 

  return (
    <View style={styles.background}>
        <Texto text="Inicio Sesión" estilo="tituloBlanco" style={{fontSize: tamanoTitulo}}/>
        <View style={styles.inputContainer}>
            <InputTexto  placeholder="Email" onChange={handleEmailChange} keyBoardType='email-address'/>
            <InputTexto  placeholder="Contraseña" onChange={handleContrasenaChange} esContrasena={true}/>
        </View>
        <Boton text="Iniciar" textStyle='textoTurquesa' containerColor='blanco'/>
        <Texto text="¿Ya tenés cuenta?" estilo="textoBlanco" style={{fontSize: tamanoTexto}}/>
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
        marginTop: '20%',
        height: '50%',
        justifyContent: 'space-evenly',
    }
});

export default InicioSesion;