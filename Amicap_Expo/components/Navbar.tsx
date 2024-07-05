// Navbar.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from './Icon'; 

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Botón 1 presionado')}>
        <Icon name="home" width={50} height={50} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Botón 2 presionado')}>
        <Icon name="settings" width={50} height={50}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Botón 3 presionado')}>
        <Icon name="profile" width={50} height={50}/>
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
    backgroundColor: 'lightblue'
  },
});

export default Navbar;
