// import {View, StyleSheet, Dimensions} from 'react-native';
// import {Colores} from './../constants/Colors';
// const FondoAzul  = () => {
//     const windowWidth = Dimensions.get('window').width;
//     const windowHeight = Dimensions.get('window').height;
//      const rectangleHeight = windowHeight * 0.7;

//     return <View style={[styles.container, { width: windowWidth }]}>
//                 <View style={[styles.rectangle,{ height: rectangleHeight } ]} />
//             </View>;
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-end', 
//         alignItems: 'center'
//     },
//     rectangle: {
//         width: '100%', 
//         backgroundColor: Colores.turquesa,
//         borderTopLeftRadius: 80,
//         borderTopRightRadius: 80,
//     },
// });

// export default FondoAzul;

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Colores } from './../constants/Colors';

const FondoAzul = () => {
    const [rectangleHeight, setRectangleHeight] = useState(0);
    const route = useRoute();  // Obtén la ruta actual

    useEffect(() => {
        const windowHeight = Dimensions.get('window').height;

        switch (route.name) {
            case 'Home':
            case 'Configuracion':
            case 'Perfil':
                setRectangleHeight(windowHeight * 0.7);
                break;
            case 'EditarPerfil':
                setRectangleHeight(windowHeight * 9);
                break;
        }
    }, [route.name]);

    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={[styles.container, { width: windowWidth }]}>
            <View style={[styles.rectangle, { height: rectangleHeight }]} />
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-end', 
//         alignItems: 'center'
//     },
//     rectangle: {
//         width: '100%', 
//         backgroundColor: Colores.turquesa,
//         borderTopLeftRadius: 80,
//         borderTopRightRadius: 80,
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',  // Permite posicionar el rectángulo absolutamente dentro del contenedor
    },
    rectangle: {
        position: 'absolute',  // Posiciona el rectángulo absolutamente
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colores.turquesa,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
    },
});

export default FondoAzul;
