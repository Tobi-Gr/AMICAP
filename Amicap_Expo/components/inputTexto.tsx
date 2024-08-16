import React, { FC } from "react";
import { useFonts } from 'expo-font';
import { TextInput, StyleSheet, View, KeyboardTypeOptions, Dimensions } from 'react-native';
import { Colores } from "@/constants/Colors";

interface Props {
    placeholder: string;
    keyBoardType?: KeyboardTypeOptions;
    onChange: (text: string) => void;
    esContrasena?: boolean; // Add this prop to handle password input
}

const InputTexto: FC<Props> = ({ placeholder, keyBoardType = 'default', onChange, esContrasena = false }) => { 
    useFonts({
        'Montserrat-Regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
    });
    const [text, setText] = React.useState('');

    const width = Dimensions.get('window').width;
    const tamanoFuente = width * 0.05;

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.textInput, { fontSize: tamanoFuente }]}
                onChangeText={(newText) => {
                    setText(newText);
                    onChange(newText);
                }}
                value={text}
                placeholder={placeholder}
                keyboardType={keyBoardType}
                placeholderTextColor={Colores.blanco}
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
        color: Colores.blanco,
        fontFamily: 'Montserrat-Regular',
    },
});

export default InputTexto;
