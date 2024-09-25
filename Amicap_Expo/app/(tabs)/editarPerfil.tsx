import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';
import InputTexto from '@/components/inputTexto';
import BotonTexto from '@/components/BotonTexto';
import FondoAzulEditarPerfil from '@/components/FondoAzulEditarPerfil';
import Flecha from '@/components/Flecha';


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
  const [contrasena, setContrasena] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleGuardarCambios = () => {
    // Aquí puedes implementar la lógica para guardar los cambios
    console.log("Nombre:", nombre);
    console.log("Contraseña:", contrasena);
    console.log("Email:", email);
  };

    return (
      <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
          <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.turquesa}/>
          <View style={styles.editarcontainer}>
          <Texto text='Editar'estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} />
          </View>
        <FondoAzulEditarPerfil />
        <View style={styles.itemcontainer}>
          <InputTexto placeholder="Nombre" onChange={setNombre}/>
          <InputTexto placeholder="Contraseña" onChange={setContrasena} esContrasena={true}/>
          <InputTexto placeholder="Email" onChange={setEmail}/>   
          </View>

          <View style={styles.botoncontainer}>
          <Boton text="Guardar" onPress={handleGuardarCambios} containerColor={'blanco'} textStyle={'textoNegro'}/>
          <Boton text="Cancelar" onPress={handleGuardarCambios} containerColor={'turquesa'} textStyle={'textoBlanco'}/>
          </View>
        </View>

      );  
    };
    

    const styles = StyleSheet.create({

      itemcontainer:{
        
        position: 'absolute',
        bottom: 450, 
        left: '5%',
        right: '5%', 
        flexDirection: 'column', 
        alignItems: 'center', 
        
      },
      
      botoncontainer:{
        
        position: 'absolute',
        bottom:20,
        left: '5%',
        right: '5%', 
        flexDirection: 'column', 
        alignItems: 'center', 
        
      },

      editarcontainer:{
        position: 'absolute',
        left: '25%',
        top: 25
      }

    });


    export default EditarPerfilScreen;


        // const styles = StyleSheet.create({
    //     background:{
    //         flex: 1,
    //         flexDirection: 'column', 
   
    //         alignItems: 'center',
    //         paddingTop: '20%'
    //     },
    //     inputContainer: {
    //       flex: 1,
    //         width: '90%',
    //         height: '50%',
    //         justifyContent: 'center',
    //     },
    //     buttonsContainer:{
    //       position: 'absolute',
    //       bottom: 20, 
    //       left: '5%',
    //       right: '5%', 
    //       flexDirection: 'column', 
    //       alignItems: 'center', 
    //     },
    //     fondo:
    //     {
    //       position: 'absolute',
    //       top: '30%',
        
    //     },
    //     flecha: {
    //       position: 'absolute',
    //       left: '5%',
    //       top: 20
    //     },
    // });
    