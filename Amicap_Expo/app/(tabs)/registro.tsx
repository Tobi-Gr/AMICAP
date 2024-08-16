import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import BotonTexto from '@/components/BotonTexto';
import InputTexto from '@/components/inputTexto';

interface Props {
  navigation: any;
}

const Registro: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [confirmacion, setConfirmacion] = useState('');
    const [contrasena, setContrasena] = useState('');
    const tamanoFuente = windowWidth / 10;


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

  return (
    <View style={styles.background}>
        <Texto text="Inicio Sesión" estilo="tituloBlanco" style={{fontSize: tamanoFuente}}/>
        <View style={styles.inputContainer}>
            <InputTexto  placeholder="Nombre" onChange={handleNombreChange}/>
            <InputTexto  placeholder="Email" onChange={handleEmailChange} keyBoardType='email-address'/>
            <InputTexto  placeholder="Contraseña" onChange={handleContrasenaChange} esContrasena={true}/>
            <InputTexto  placeholder="Confirmar contraseña" onChange={handleContrasenaChange} esContrasena={true}/>
        </View>
        <BotonTexto text="Registrar" textStyle='textoTurquesa' containerColor='blanco'/>
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

export default Registro;