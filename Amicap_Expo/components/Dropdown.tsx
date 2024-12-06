import { StyleSheet, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Colores } from '@/constants/Colors';
import React, { FC, useState, useEffect } from 'react';
import {useUserContext} from '@/context/UserContext';
import Triangulo from './icons/Triangulo';
import DBDomain from '@/constants/dbDomain';
import Texto from './Texto';
import Add from './icons/Add';
import BotonRadio from './BotonRadio';
import AgregarModal from './AgregarModal';

interface AtaqueDetalles {
    causas: string[];  // Causas seleccionadas
    lugar: string;     // Lugar seleccionado
}

interface Item {
    id: number;
    id_usuario: number;
    nombre: string;
}

interface Props {
    type: 'causa' | 'lugar';
    ataque: AtaqueDetalles;
    data: Item[]; // aca mandan o todas las causas o todos los lugares
}

const Dropdown: FC<Props> = ({type, ataque, data }) => {
    const {usuario} = useUserContext();
    const screen_width = Dimensions.get("screen").width;
    const [abierto, setAbierto] = useState(false);
    const [causas, setCausas] = useState<string[]>([]);
    const [lugares, setLugares] = useState<string[]>([]);
    const [causasSeleccionadas, setCausasSeleccionadas] = useState<string[]>([]);
    const [lugarSeleccionado, setLugarSeleccionado] = useState<string>('');
    const [visibleAgregar, setVisibleAgregar] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [nombre, setCausa] = useState('');
    const titulo = type === 'lugar' ? 'Lugares' : 'Causas';

    const tamanoTitulos = screen_width / 15;
    const tamanoFuente = screen_width / 20;
    useEffect(() => {
        // Inicializa las causas y lugares al cargar el componente
        if (type === 'causa') {
            setCausas(ataque.causas);
            setCausasSeleccionadas(ataque.causas); // Causas seleccionadas por defecto
        } else if (type === 'lugar') {
            setLugares([ataque.lugar]); // Solo un lugar por vez
            setLugarSeleccionado(ataque.lugar); // Lugar seleccionado por defecto
        }
    }, [ataque, type]);

    const handleCheck = (item: Item, check: boolean) => {
        if (type === 'causa') {
            if (check) {
                setCausasSeleccionadas([...causasSeleccionadas, item.nombre]);
            } else {
                setCausasSeleccionadas(causasSeleccionadas.filter(causa => causa !== item.nombre));
            }
        } else if (type === 'lugar') {
            setLugarSeleccionado(item.nombre);
        }
    };

    const handleOnPressAgregarCausa= () => {
        setVisibleAgregar(true);
    };
    const handleCausaChange = (nuevaCausa: string) => {
        setCausa(nuevaCausa);
        const handleAgregarCausa = async () => {
            try {
                const response = await fetch(`${DBDomain}/api/causa`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
            
                    body: JSON.stringify({
                        id_usuario: usuario?.id,
                        nombre: nombre,
                    }),
                });
        
                if (response.ok) {
                    alert('causa agregada');
                    setVisibleAgregar(false);
                } 
                else {
                    const errorMessage = await response.text();
                    alert(`Error: ${errorMessage}`);
                }
            } catch (error) {
                console.log('Error al agregar causa:', error);
                alert('Hubo un error al agregar la causa');
            }
            };
        handleAgregarCausa();
    }; 


    const ListaItems = () => {
        const isCuadrado = type === 'causa'; // Es cuadrado si el tipo es causa
        return (
            <ScrollView style={styles.scroll}>
                {data.map((item) => {
                    // Verifica si el item está en las causas o lugares
                    const check = type === 'causa' 
                        ? causasSeleccionadas.includes(item.nombre) 
                        : lugarSeleccionado === item.nombre;

                    return (
                        <BotonRadio
                            key={item.id}
                            text={item.nombre}
                            tamanoFuente={tamanoFuente}
                            check={check}
                            onChange={(checked) => handleCheck(item, !checked)}
                            cuadrado={isCuadrado}
                            fondoOscuro={true}
                        />
                    );
                })}
            </ScrollView>
        );
    };

    return (
        <View style={styles.container}>
            <AgregarModal visible={visibleAgregar} setVisible={setVisibleAgregar} prompt='Agregar' aclaracion='Agregar' confirmado={handleCausaChange} isKeyboardVisible={isKeyboardVisible}/>
            <View style={styles.header}>
                <Texto text={titulo} estilo={"textoBlanco"} style={{fontSize: tamanoTitulos}}/>
                <View style={styles.iconosContainer}>
                    <Add color={Colores.blanco} width={27} onPress={handleOnPressAgregarCausa}/>
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
        alignSelf: 'center',
        marginBottom: '5%'
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
    },
    scroll: 
    {
        maxHeight: '80%'
    }
});

export default Dropdown;
