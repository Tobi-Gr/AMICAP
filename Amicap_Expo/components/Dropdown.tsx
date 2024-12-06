import { StyleSheet, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Colores } from '@/constants/Colors';
import React, { FC, useState, useEffect } from 'react';
import Triangulo from './icons/Triangulo';
import DBDomain from '@/constants/dbDomain';
import Texto from './Texto';
import Add from './icons/Add';
import BotonRadio from './BotonRadio';

interface Item {
    id: number;
    nombre: string;
}

interface Attack {
    id: number;
    id_lugar: number;
}

interface Props {
    onClick: () => void;
    type: 'causa' | 'lugar';
    data: Item[];
    ataque: Attack
}

const Dropdown: FC<Props> = ({onClick, type, data }) => {

    const [abierto, setAbierto] = useState(false);
    const [causas, setCausas] = useState([]);
    const [lugares, setLugares] = useState([]);
    const titulo = type === 'lugar' ? 'Lugares' : 'Causas';
    const tamanoFuente = 50;


    const handleCheck = (item: number, check: boolean) =>
    {

    }

    const ListaActs = () => {
        return (
            <ScrollView>
                {data.map((item) => (
                    <BotonRadio
                        key={item.id}
                        text={item.nombre}
                        id={item.id}
                        tamanoFuente={tamanoFuente}
                        check={false} //hay q poner una variable posta
                        onChange={(checked) => handleCheck(item.id, !checked)}
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