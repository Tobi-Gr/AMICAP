import {StyleSheet, View, Dimensions, Keyboard, Platform} from 'react-native';
import React, { useState, useEffect } from 'react';
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import DBDomain from '@/constants/dbDomain';
import Flecha from '@/components/Flecha';

interface Attack {
    fecha: Date;
    nombre: string;
    causas: string[];
}

interface Props {
    navigation: any;
    route: any;
}

//¿Cómo hacemos para saber qué ataque es?
const DetalleAtaque: React.FC<Props> = ({ navigation, route }) => {
    const { id_ataque } = route.params;
    const [ataque, setAtaque] = useState<Attack>();

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

        fetchAndSetAtaque();
    }, []);

    return (
        <View>
            <View style={styles.flechaContainer}>
             <Flecha
                        height={flechaTamano}
                        width={flechaTamano}
                        navigation={navigation}
                        screen={"ListaAtaques"}
                        color={Colores.blanco}
                    />
            {ataque != undefined ? (
                
                   
                    <Texto
                        text={`${getDiaSemana(ataque.fecha)}, ${new Date(ataque.fecha).toLocaleDateString('es-ES')} ${new Date(ataque.fecha).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`}
                        estilo="textoBlanco"
                        style={{fontSize: tamanoIndice}}/>

                ) : 
                <Texto text='Cargando...' estilo="textoBlanco" style={{fontSize: tamanoIndice}}/>
            }
              </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flechaContainer: {
        alignSelf: 'flex-start',
        gap: 10,
        marginBottom: '8%'
    },
});

export default DetalleAtaque;
