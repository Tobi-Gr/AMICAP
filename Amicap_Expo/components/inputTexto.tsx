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
    color?: ColorKeys;
}

const InputTexto: FC<Props> = ({ placeholder, keyBoardType = 'default', onChange, esContrasena = false, color = 'blanco' }) => { 
    useFonts({
        'Montserrat-Regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
    });
    const [text, setText] = React.useState('');

    const width = Dimensions.get('window').width;
    const tamanoFuente = width * 0.05;

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.textInput, { fontSize: tamanoFuente, color: Colores[color]}]}
                onChangeText={(newText) => {
                    setText(newText);
                    onChange(newText);
                }}
                value={text}
                placeholder={placeholder}
                keyboardType={keyBoardType}
                placeholderTextColor={Colores[color]}
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
        borderBottomColor: Colores.celeste,
        width: '100%',
        paddingVertical: '2%',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
    },
});

export default InputTexto;
