import React, { FC, useState, useRef } from 'react';
import { Colores } from './../constants/Colors';
import { View, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import Home from './icons/Home';
import Settings from './icons/Settings';
import Profile from './icons/Profile';

interface Props {
    tipo: 'home' | 'profile' | 'configuration';
}

const Navbar: FC<Props> = ({ tipo }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const barHeight = windowHeight / 11;
    const buttonWidth = windowWidth / 3;

    // Estado para el icono seleccionado
    const [selected, setSelected] = useState(tipo);

    // Posición inicial de la línea basada en el índice del botón
    const initialPosition = useRef(new Animated.Value(buttonWidth * getIndex()));

    // Función para obtener el índice del botón seleccionado
    function getIndex() {
        switch (selected) {
            case 'configuration':
                return 0;
            case 'home':
                return 1;
            case 'profile':
                return 2;
        }
    }

    // Función para manejar el cambio de selección
    const handlePress = (icon: 'home' | 'profile' | 'configuration', index: number) => {
        setSelected(icon);
        Animated.spring(initialPosition.current, {
            toValue: buttonWidth * index,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={[styles.container, { height: barHeight }]}>
          <View style={styles.inactiveLine}></View>
            <TouchableOpacity
                onPress={() => handlePress('configuration', 0)}
                style={[styles.button, { width: buttonWidth }]}
                activeOpacity={1}
            >
                <Settings color={Colores.blanco} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlePress('home', 1)}
                style={[styles.button, { width: buttonWidth }]}
                activeOpacity={1}
            >
                <Home color={Colores.blanco} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlePress('profile', 2)}
                style={[styles.button, { width: buttonWidth }]}
                activeOpacity={1}
            >
                <Profile color={Colores.blanco} />
            </TouchableOpacity>
            <Animated.View
                style={[
                    styles.line,
                    { transform: [{ translateX: initialPosition.current }], width: buttonWidth },
                ]}
            />
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
        top: 0,
        height: 2,
        backgroundColor: Colores.blanco,
    },
    inactiveLine: {
      position: 'absolute',
      top: 0,
      height: 2,
      backgroundColor: 'black',
      opacity: 0.25,
      width: '100%'
    }
});

export default Navbar;


