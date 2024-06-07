import React, { FC, ReactNode } from "react";
import { TouchableOpacity, Text, TextStyle, ViewStyle} from 'react-native';

interface Props {
    onPress: () => void,
    styleText?: TextStyle,
    styleContainer?: ViewStyle,
    texto: string
}

const Boton: FC<Props> = ({onPress, styleText, styleContainer, texto }) => {
    const handlePress = () => {
        if (onPress) {
            onPress(); // Call the onPress function if it's provided
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styleContainer}>
            <Text style={styleText}>{texto}</Text>
        </TouchableOpacity>
    );
};

export default Boton;
