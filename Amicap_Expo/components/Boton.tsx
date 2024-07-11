// import React, { FC } from "react";
// import { TouchableOpacity, Text, TextStyle, ViewStyle, StyleSheet } from 'react-native';
// import { Colores } from './../constants/Colors';

// interface Props {
//     onPress: () => void,
//     styleText?: TextStyle,
//     styleContainer?: ViewStyle,
//     texto: string,
//     estilo?: keyof typeof styles,
// }

// const Boton: FC<Props> = ({ onPress, styleText, texto, estilo }) => {
//     const handlePress = () => {
//         if (onPress) {
//             onPress();
//         }
//     };

//     // Determinar el estilo del contenedor basado en la prop 'estilo' o utilizar el estilo por defecto
//     const styleContainer = estilo ? styles[estilo] : styles.defaultContainer;

//     return (
//         <TouchableOpacity onPress={handlePress} style={[styleContainer, styles.container]}>
//             <Text style={[styles.defaultText, styleText]}>{texto}</Text>
//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         alignContent: "center",
//         justifyContent: "center"
//     },
//     defaultContainer: {
//         backgroundColor: Colores.blanco,
//         borderRadius: 18
//     },
//     defaultText: {
//         fontFamily: 'Montserrat-Regular',
//         fontSize: 20
//     },
//     tituloTurquesa: {
//         color: Colores.turquesa,
//         fontFamily: 'FiraSans-Regular'
//     },
// });

// export default Boton;
