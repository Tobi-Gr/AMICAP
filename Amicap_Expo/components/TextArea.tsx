import React, { FC } from "react";
import { useFonts } from 'expo-font';
import { TextInput, StyleSheet, View, Dimensions } from 'react-native';
import { Colores } from "@/constants/Colors";
import Texto from "./Texto";

interface Props {
    prompt: string;
    onChange: (text: string) => void;
    value: string;
}

const TextArea: FC<Props> = ({onChange, prompt, value}) => { 
    useFonts({
        'Montserrat-Regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
    });

    const width = Dimensions.get('window').width;
    const tamanoFuente = width * 0.05; // ajustar
    const tamanoPrompt = width * 0.04; // ajustar

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Texto text={prompt} estilo="textoBlanco" style={{fontSize: tamanoPrompt, fontWeight: 'normal'}}/>
            </View>
            
            <TextInput
                multiline={true}
                maxLength={200}
                numberOfLines={4} // acomodarlo
                onChangeText={onChange}
                value={value}
                style={[styles.textInput, {fontSize: tamanoFuente}]}
                textAlignVertical="top"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderWidth: 2,
        borderColor: Colores.celeste,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        position: 'relative',
    },
    textInput: {
        height: 100,
        width: '100%',
        paddingVertical: 10,
        color: Colores.blanco,
        fontFamily: 'Montserrat-Regular',
    },
    textContainer: {
        position: 'absolute',
        top: -14,
        left: 10,
        backgroundColor: Colores.turquesa,
        paddingHorizontal: 5,
    },
});

export default TextArea;
