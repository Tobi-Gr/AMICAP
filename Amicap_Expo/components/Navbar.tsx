// Navbar.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from './Icon'; // Importa tu componente Icon

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Botón 1 presionado')}>
        <Icon iconType="home"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Botón 2 presionado')}>
        <Icon iconType="settings"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Botón 3 presionado')}>
        <Icon iconType="profile"/>
      </TouchableOpacity>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'lightblue',
  },
});

export default Navbar;
