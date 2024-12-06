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
    onClick: () => void;
    type: 'causa' | 'lugar';
    ataque: AtaqueDetalles;
    data: string[]; //aca mandan o todas las causas o todos los lugares
}

const Dropdown: FC<Props> = ({onClick, type, ataque, data }) => {

    const [abierto, setAbierto] = useState(false);
    const [causas, setCausas] = useState([]);
    const [lugares, setLugares] = useState([]);
    const titulo = type === 'lugar' ? 'Lugares' : 'Causas';
    const tamanoFuente = 50;


    const handleCheck = (item: string, check: boolean) =>
    {

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
                <Texto text={titulo} estilo={"textoBlanco"}/>
                <Add/>
                <TouchableOpacity onPress={()=> setAbierto(!abierto)}>
                    <Triangulo/>
                </TouchableOpacity>
            </View>
            {abierto && ListaItems()}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%'
    },
    header:
    {

    }
});

export default Dropdown;