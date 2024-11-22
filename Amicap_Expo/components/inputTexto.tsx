import React, { FC } from "react";
import { useFonts } from 'expo-font';
import { TextInput, StyleSheet, View, KeyboardTypeOptions, Dimensions } from 'react-native';
import { Colores } from "@/constants/Colors";

type ColorKeys = keyof typeof Colores;
interface Props {
    placeholder: string;
    keyBoardType?: KeyboardTypeOptions;
    onChange: (text: string) => void;
    esContrasena?: boolean;
<<<<<<< HEAD
    colorBorde?: string;
    colorPlaceholder?: string;
    colorTexto?: string;
}

const InputTexto: FC<Props> = ({ placeholder, keyBoardType = 'default', onChange, esContrasena = false, colorBorde, colorPlaceholder, colorTexto}) => { 
=======
    color?: ColorKeys;
}

const InputTexto: FC<Props> = ({ placeholder, keyBoardType = 'default', onChange, esContrasena = false, color = 'blanco' }) => { 
>>>>>>> e572ea852cf0e26bafc83c91e05fed0b4f57b0a5
    useFonts({
        'Montserrat-Regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
    });
    colorBorde = colorBorde || Colores.celeste;
    colorPlaceholder = colorPlaceholder || Colores.blanco;
    colorTexto = colorTexto || Colores.blanco;

    const [text, setText] = React.useState('');
    const width = Dimensions.get('window').width;
    const tamanoFuente = width * 0.05;

    return (
        <View style={styles.container}>
            <TextInput
<<<<<<< HEAD
                style={[styles.textInput, { fontSize: tamanoFuente,  borderBottomColor: colorBorde, color: colorTexto}]}
=======
                style={[styles.textInput, { fontSize: tamanoFuente, color: Colores[color]}]}
>>>>>>> e572ea852cf0e26bafc83c91e05fed0b4f57b0a5
                onChangeText={(newText) => {
                    setText(newText);
                    onChange(newText);
                }}
                value={text}
                placeholder={placeholder}
                keyboardType={keyBoardType}
<<<<<<< HEAD
                placeholderTextColor={colorPlaceholder}
=======
                placeholderTextColor={Colores[color]}
>>>>>>> e572ea852cf0e26bafc83c91e05fed0b4f57b0a5
                secureTextEntry={esContrasena} 
                autoCapitalize="none"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    textInput: {
        height: 'auto',
        borderBottomWidth: 2,
        width: '100%',
        paddingVertical: '2%',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
    },
});

export default InputTexto;
