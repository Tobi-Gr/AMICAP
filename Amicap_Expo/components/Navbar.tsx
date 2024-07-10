import React from 'react';
import {Colores} from './../constants/Colors.ts';
import { View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Home from './icons/Home.tsx';
import Settings from './icons/Settings.tsx';
import Profile from './icons/Profile.tsx';

const Navbar = () => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const barHeight = windowHeight / 11;
    const buttonWidth = windowWidth / 3;
   return (
     <View style={[styles.container, {height: barHeight}]}>
        <TouchableOpacity onPress={() => console.log('Config')} style={[styles.button, { width: buttonWidth }]} activeOpacity={1} >
            <Settings color={Colores.blanco}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Home')} style={[styles.button, { width: buttonWidth }]} activeOpacity={1} >
            <Home color={Colores.blanco}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Perfil')} style={[styles.button, { width: buttonWidth }]} activeOpacity={1} >
            <Profile color={Colores.blanco}/>
        </TouchableOpacity>
   
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: Colores.turquesa,
    },
    button: {
      alignItems: 'center',
    }
  });

  export default Navbar;
