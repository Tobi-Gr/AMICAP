import {StyleSheet, View, Dimensions} from 'react-native';
import React, { useState } from "react";
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Navbar from '@/components/Navbar';

interface Props {
  navigation: any;
}

const Perfil: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoTitulo = windowWidth / 10;
    
  return (
    <View style={styles.background}>
        <Texto text="perfil" estilo="tituloBlanco" style={{fontSize: tamanoTitulo}}/>
        <Navbar navigation={navigation} tipo="profile"/>
    </View>
  );
};

const styles = StyleSheet.create({
    background:{
        flex: 1,
        flexDirection: 'column', 
        backgroundColor: Colores.turquesa,
        alignItems: 'center',
        paddingTop: '20%',
    }
});

export default Perfil;