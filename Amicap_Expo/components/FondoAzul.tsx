 import {View, StyleSheet, Dimensions} from 'react-native';
 import {Colores} from './../constants/Colors';
 import { StyleSheet as RNStyleSheet } from 'react-native-media-query';
 

 const FondoAzul = ({currentScreen}) => {
     const windowWidth = Dimensions.get('window').width;
     const windowHeight = Dimensions.get('window').height;
    //   let rectangleHeight;
    // switch (currentScreen) {
    //     case 'Home':
    //         rectangleHeight = windowHeight * 0.7; // 70% de la altura para la pantalla Home
    //         break;
    //         case 'Configuracion':
    //         rectangleHeight = windowHeight * 0.7; // 70% de la altura para la pantalla Home
    //         break;
    //         case 'Perfil':
    //         rectangleHeight = windowHeight * 0.7; // 70% de la altura para la pantalla Home
    //         break;
    //     case 'editarPerfil':
    //         rectangleHeight = windowHeight * 0.85; // 50% de la altura para la pantalla Details
    //         break;
    //     default:
    //         rectangleHeight = windowHeight * 0.7; // Valor por defecto
    //         break;
    // }
    //  return <View style={[styles.container, { width: windowWidth }]}>
    //              <View style={[styles.rectangle,{ height: rectangleHeight } ]} />
    //          </View>;
 };
 const styles = RNStyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'flex-end', 
         alignItems: 'center',
         
        
     },
     rectangle: {
         width: '100%', 
         backgroundColor: Colores.turquesa,
         borderTopLeftRadius: 80,
         borderTopRightRadius: 80,
     },
 });

 const mediaStyles = RNStyleSheet.create({
    rectangle: {
        '@media (min-height: 700px)': {
            height: currentScreen === 'Home' ? 400 : currentScreen === 'Details' ? 300 : 200,
        },
        '@media (max-height: 699px)': {
            height: currentScreen === 'Home' ? 250 : currentScreen === 'Details' ? 200 : 150,
        },
    },
});

return (
    <View style={[styles.container, { width: windowWidth }]}>
        <View style={[styles.rectangle, mediaStyles.rectangle]} />
    </View>
);
};

export default FondoAzul;
