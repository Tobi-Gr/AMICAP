import React from 'react';
import {Colores} from './../constants/Colors.ts';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Home from './icons/Home.tsx';
import Settings from './icons/Settings.tsx';
import Profile from './icons/Profile.tsx';



const Navbar = () => {
   return (
     <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log('Home')}>
            <Settings color={Colores.blanco}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Configuracion')}>
            <Home color={Colores.blanco}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Perfil')}>
            <Profile color={Colores.blanco}/>
        </TouchableOpacity>
   
      </View>
    );
  };


  //la altura hay que calcularla basandonos en el tamaño de la pantalla
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
      backgroundColor: Colores.turquesa
    },
  });

  export default Navbar;
