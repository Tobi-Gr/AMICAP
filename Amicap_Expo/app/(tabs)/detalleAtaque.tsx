import {StyleSheet, View, Dimensions, Keyboard, Platform} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useUserContext } from '@/context/UserContext';
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import DBDomain from '@/constants/dbDomain';
import Flecha from '@/components/Flecha';
import Dropdown from '@/components/Dropdown';

interface Attack {
    fecha: Date;
    lugar: string;
    causas: string[];
}

interface Props {
    navigation: any;
    route: any;
}

//¿Cómo hacemos para saber qué ataque es?
const DetalleAtaque: React.FC<Props> = ({ navigation, route }) => {
    const { id_ataque } = route.params;
    const [ataque, setAtaque] = useState<Attack | null>({
        fecha: new Date(),
        lugar: "",
        causas: []
    });
    const [lugares, setLugares] = useState([]);
    const [causas, setCausas] = useState([]);
    const {usuario} = useUserContext();
    const windowWidth = Dimensions.get('window').width;
    const flechaTamano = windowWidth / 10;
    const tamanoIndice = windowWidth / 16;

    const fetchDetallesAtaque = async () => {
        const urlApi = `${DBDomain}/api/ataque/detalles/${id_ataque}`;
        try {
        const response = await fetch(urlApi);
        if (!response.ok) {
            throw new Error('Failed to fetchDetallesAtaque');
        }
        const data = await response.json();
        if (!data) {
            throw new Error('Data failed to response (fetchDetallesAtaque)');
        }
        return data;
        } catch (error) {
            console.log('Hubo un error en el fetchDetallesAtaque', error);
        }
    }
    
    const fetchCausas = async () => {
        const urlApi = `${DBDomain}/api/causa/${usuario?.id}`;
        try {
            const response = await fetch(urlApi);
        if (!response.ok) {
            throw new Error('Failed to fetchCausas');
        }
        const data = await response.json();
        if (!data) {
            throw new Error('Data failed to response (fetchCausas)');
        }
        return data;
        } catch (error) {
            console.log('Hubo un error en el fetchCausas', error);
        }
    }

    const fetchLugares = async () => {
        const urlApi = `${DBDomain}/api/lugar/${usuario?.id}`;
        try {
            const response = await fetch(urlApi);
        if (!response.ok) {
            throw new Error('Failed to fetchLugares');
        }
        const data = await response.json();
        if (!data) {
            throw new Error('Data failed to response (fetchLugares)');
        }
        return data;
        } catch (error) {
            console.log('Hubo un error en el fetchLugares', error);
        }
    }
    
    const getDiaSemana = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
        const diaSemana = new Date(date).toLocaleDateString('es-ES', options);
        
        return diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    };

    useEffect( () =>{
        const fetchAndSetAtaque = async () => {
            const data = await fetchDetallesAtaque();
                if (data.length > 0) {
                    setAtaque(data);
                }
        };
        const fetchAndSetCausas = async () => {
            const data = await fetchCausas();
                if (data.length > 0) {
                    setCausas(data);
                }
        };
        const fetchAndSetLugares = async () => {
            const data = await fetchLugares();
                if (data.length > 0) {
                    setLugares(data);
                }
        };

        fetchAndSetAtaque();
        fetchAndSetLugares();
        fetchAndSetCausas();

    }, []);

    return (
        <View style={styles.background}>
            {ataque && ataque.fecha ? (
                <View>                
                    <View style={styles.flechaContainer}>
                        <Flecha
                            height={flechaTamano}
                            width={flechaTamano}
                            navigation={navigation}
                            screen={"ListaAtaques"}
                            color={Colores.blanco}
                        />
                        <Texto
                            text={`${getDiaSemana(ataque.fecha)}, ${new Date(ataque.fecha).toLocaleDateString('es-ES')} ${new Date(ataque.fecha).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`}
                            estilo="textoBlanco"
                            style={{fontSize: tamanoIndice, top: '40%'}}
                        />
                    </View>
                    <Dropdown type="causa" ataque={ataque} data={causas} />
                    <Dropdown type="lugar" ataque={ataque} data={lugares} />
                </View>
            ) : (
                <Texto text='Cargando...' estilo="textoBlanco" style={{fontSize: tamanoIndice}} />
            )}
        </View>
    );
    
};

const styles = StyleSheet.create({
    background:
    {
        backgroundColor: Colores.turquesa,
        height: '100%'
    },
    flechaContainer: {
        gap: 10,
        marginBottom: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '3%'
    },
});

export default DetalleAtaque;
