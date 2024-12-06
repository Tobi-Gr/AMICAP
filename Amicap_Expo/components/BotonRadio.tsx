import { Colores } from '../constants/Colors';
import React, { FC } from 'react';
import Texto from './Texto';
import { StyleSheet, Pressable, Dimensions, View } from 'react-native';

interface Props {
    text: string;
    onChange?: (checked: boolean) => void;
    tamanoFuente: number;
    id?: number;
    check: boolean;
    cuadrado?: boolean;
    fondoOscuro?: boolean;
}

const BotonRadio: FC<Props> = ({ text, onChange, tamanoFuente, id, check, cuadrado = true, fondoOscuro = false }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuenteLocal = windowWidth * 0.05;
    const [checked, setChecked] = React.useState(check);

    const handleOnPress = () => {
        setChecked(!checked);
        if (onChange) {
            onChange(checked);
        }
    };

    // Definir colores según si color fondo
    const colorCirculo = fondoOscuro ? Colores.blanco : Colores.negro;
    const colorCirculoSeleccionado = fondoOscuro ? Colores.celeste : Colores.turquesa;
    const colorCirculoInterno = fondoOscuro ? Colores.celeste : Colores.turquesa;
    const colorTexto= fondoOscuro ? 'textoBlanco' : 'textoNegro';

    const Circulo = () => {
        const borderRadiusValue = cuadrado ? 5 : 50;

        return (
            <View
                style={[
                    styles.circulo,
                    checked && { borderColor: colorCirculoSeleccionado },
                    { borderRadius: borderRadiusValue },
                    !checked && { borderColor: colorCirculo}
                ]}
            >
                {checked ? <View style={[styles.circuloInterno, { backgroundColor: colorCirculoInterno, borderRadius: borderRadiusValue / 2 }]} /> : <View />}
            </View>
        );
    };

    return (
        <Pressable onPress={handleOnPress} style={styles.container}>
            <Circulo />
            <Texto text={text} style={{ fontSize: tamanoFuente}} estilo={colorTexto}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8,
    },
    circulo: {
        height: 25,
        width: 25,
        backgroundColor: 'transparent',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '5%',
    },
    circuloInterno: {
        width: 15,
        height: 15,
    },
});

export default BotonRadio;
