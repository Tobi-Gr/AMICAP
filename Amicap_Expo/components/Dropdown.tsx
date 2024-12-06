import { StyleSheet, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Colores } from '@/constants/Colors';
import React, { FC, useState, useEffect } from 'react';
import Triangulo from './icons/Triangulo';
import DBDomain from '@/constants/dbDomain';
import Texto from './Texto';
import Add from './icons/Add';
import BotonRadio from './BotonRadio';

interface AtaqueDetalles {
    causas: string[];
    lugar: string;
}

interface Props {
    type: 'causa' | 'lugar';
    ataque: AtaqueDetalles;
    data: string[]; //aca mandan o todas las causas o todos los lugares
}

const Dropdown: FC<Props> = ({type, ataque, data }) => {
    const screen_width = Dimensions.get("screen").width;
    const [abierto, setAbierto] = useState(false);
    const [causas, setCausas] = useState([]);
    const [lugares, setLugares] = useState([]);
    const titulo = type === 'lugar' ? 'Lugares' : 'Causas';
    const tamanoFuente = screen_width / 15;

    const handleCheck = (item: string, check: boolean) =>
    {
        console.log("check");
    }

    const ListaItems = () => {
        const isCuadrado = type === 'causa'; //es cuadrado si el tipo es causa
        return (
            <ScrollView>
                {data.map((item) => (
                    <BotonRadio
                        text={item}
                        tamanoFuente={tamanoFuente}
                        check={false} //hay q poner una variable posta !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        onChange={(checked) => handleCheck(item, !checked)}
                        cuadrado={isCuadrado}
                    />
                ))}
            </ScrollView>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Texto text={titulo} estilo={"textoBlanco"} style={{fontSize: tamanoFuente}}/>
                <View style={styles.iconosContainer}>
                    <Add color={Colores.blanco} width={27}/>
                    <TouchableOpacity onPress={()=> setAbierto(!abierto)} style={styles.containerTriangulo}>
                        <Triangulo color={Colores.blanco} />
                    </TouchableOpacity>
                </View>
            </View>
            {abierto && ListaItems()}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center'
    },
    header:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconosContainer:
    {
        flexDirection: 'row',
        gap: 10
    },
    containerTriangulo:
    {
        top: '10%'
    }
});

export default Dropdown;