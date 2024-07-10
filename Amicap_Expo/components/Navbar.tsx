import React, {FC, useState} from 'react';
import {Colores} from './../constants/Colors';
import { View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Home from './icons/Home';
import Settings from './icons/Settings';
import Profile from './icons/Profile';

interface Props{
    tipo: 'home' | 'profile' | 'configuration';
}

const Navbar: FC<Props> = ({tipo}) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const barHeight = windowHeight / 11;
    const buttonWidth = windowWidth / 3;

    // Estado para el icono seleccionado
    const [selected, setSelected] = useState(tipo);

    const getLineStyle = (icon: 'home' | 'profile' | 'configuration') => {
        return selected === icon ? styles.selectedLine : {};
    };

    return (
        <View style={[styles.container, {height: barHeight}]}>
            <TouchableOpacity 
                onPress={() => { console.log('Config'); setSelected('configuration'); }} 
                style={[styles.button, { width: buttonWidth }]} 
                activeOpacity={1}
            >
                <View style={[styles.line, getLineStyle('configuration')]} />
                <Settings color={Colores.blanco}/>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => { console.log('Home'); setSelected('home'); }} 
                style={[styles.button, { width: buttonWidth }]} 
                activeOpacity={1}
            >
                <View style={[styles.line, getLineStyle('home')]} />
                <Home color={Colores.blanco}/>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => { console.log('Perfil'); setSelected('profile'); }} 
                style={[styles.button, { width: buttonWidth }]} 
                activeOpacity={1}
            >
                <View style={[styles.line, getLineStyle('profile')]} />
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
    },
    line: {
        position: 'absolute',
        top: -20,
        height: 0,
        width: '100%',
        backgroundColor: Colores.blanco,
    },
    selectedLine: {
        height: 4,
    }
});

export default Navbar;
