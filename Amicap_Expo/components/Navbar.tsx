import React, { FC, useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Colores } from './../constants/Colors';
import Home from './icons/Home';
import Settings from './icons/Settings';
import Profile from './icons/Profile';

interface Props {
    tipo: 'home' | 'profile' | 'configuration';
    navigation: any;
}

const Navbar: FC<Props> = ({ tipo, navigation }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const barHeight = windowHeight / 11;
    const buttonWidth = windowWidth / 3;

    const [selected, setSelected] = useState(tipo);
    const initialPosition = useRef(new Animated.Value(buttonWidth * getIndex(tipo)));

    // cambiar el icono seleccionado
    useFocusEffect(
        React.useCallback(() => {
            setSelected(tipo);
            Animated.spring(initialPosition.current, {
                toValue: buttonWidth * getIndex(tipo),
                useNativeDriver: false,
            }).start();
        }, [tipo])
    );

    function getIndex(selectedIcon: 'home' | 'profile' | 'configuration') {
        switch (selectedIcon) {
            case 'configuration':
                return 0;
            case 'home':
                return 1;
            case 'profile':
                return 2;
        }
    }

    const handlePress = (icon: 'home' | 'profile' | 'configuration', index: number) => {
        if (selected !== icon) {
            setSelected(icon);
            Animated.spring(initialPosition.current, {
                toValue: buttonWidth * index,
                useNativeDriver: false,
            }).start();

            switch (icon) {
                case 'configuration':
                    navigation.navigate('Configuracion');
                    break;
                case 'home':
                    navigation.navigate('Home');
                    break;
                case 'profile':
                    navigation.navigate('Perfil');
                    break;
            }
        }
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
        position: 'relative',
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
       height: 3,
       backgroundColor: 'black',
       opacity: 0.2,
       width: '100%',
    }
});

export default Navbar;
