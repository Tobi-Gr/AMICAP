import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Colores } from '@/constants/Colors';
import React, { FC, useState, useEffect } from 'react';
import Triangulo from './icons/Triangulo';
import DBDomain from '@/constants/dbDomain';
import Texto from './Texto';
import Add from './icons/Add';

interface Props {
    onClick: () => void;
    type: 'causa' | 'lugar';
}

const Dropdown: FC<Props> = ({onClick, type }) => {

    const [abierto, setAbierto] = useState(false);
    const titulo = type === 'lugar' ? 'Lugares' : 'Causas';

    

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