 import React, { FC } from "react";
 import { TouchableOpacity, Text, TextStyle, ViewStyle, StyleSheet, Pressable} from 'react-native';
 import { Colores } from '../constants/Colors';
 import Texto from "./Texto";
 interface Props {
     onPress?: () => void,
     styleText?: TextStyle,
     styleContainer?: ViewStyle,
     texto: string,
     estilo?: keyof typeof styles,
 }
 const BotonPrincipal: FC<Props> = ({ onPress, styleText, texto }) => {
     const handlePress = () => {
         if (onPress) {
             onPress();
         }
     };
     return (
         <Pressable style={[styles.container, {marginBottom: '12%'}]} onPress={handlePress}>
             <Texto text={texto} estilo={"textoTurquesa"} style={styleText}/> 
        </Pressable>
     );
 };
 const styles = StyleSheet.create({
     container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 'auto',
        borderRadius: 18,
        backgroundColor: Colores.blanco,
     }
 });
 export default BotonPrincipal;