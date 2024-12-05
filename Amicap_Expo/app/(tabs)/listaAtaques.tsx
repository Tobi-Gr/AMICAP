import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import DBDomain from '@/constants/dbDomain';
import {useUserContext} from '@/context/UserContext';
import Flecha from '@/components/Flecha';
import Triangulo from '@/components/icons/Triangulo';

interface Attack {
    id: number,
    fecha: Date; 
}
interface Props {
    navigation: any;
}

const ListaAtaques: React.FC<Props> = ({ navigation }) => {
    const {usuario} = useUserContext();
    const [ataques, setAtaques] = useState<Attack[]>([]);

    const windowWidth = Dimensions.get('window').width;
    const flechaTamano = windowWidth / 10;
    const tamanoIndice = windowWidth / 16;
    const tamanoTexto = windowWidth / 21;


    
    const fetchAtaques = async () => {
        if(usuario)
        {
            const urlApi = `${DBDomain}/api/ataque/${usuario.id}`;
            try {
                const response = await fetch(urlApi);
                if (!response.ok) {
                    throw new Error('Failed to fetch ataques');
                }
                const data = await response.json();
                if (!data) {
                    throw new Error('Data failed to response (fetch ataques)');
                }
                return data;
            } catch (error) {
                console.log('Hubo un error en el fetchAtaques', error);
            }
        }
    }

    const getDiaSemana = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
        const diaSemana = new Date(date).toLocaleDateString('es-ES', options);
        
        return diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    };
    
    useEffect( () =>{
        const fetchAndSetAtaques = async () => {
          const data = await fetchAtaques();
          if (data.length > 0) {
            setAtaques(data);
          }
        };
    
        fetchAndSetAtaques();
    }, []);

    return (
        <GestureHandlerRootView>
            <View style={styles.flechaContainer}>
                <Flecha
                    height={flechaTamano}
                    width={flechaTamano}
                    navigation={navigation}
                    screen={"registroData"}
                    color={Colores.blanco}
                />
                <Texto text="Tus ataques" estilo="textoBlanco" style={{fontSize: tamanoIndice}}/>
            </View>
            {/* Lista de ataques recientes */}
            <ScrollView style={styles.scroll}>
              {ataques.map((ataque, index) => (
                  <TouchableOpacity key={index} style={styles.ataqueItem} onPress={()=> {navigation.navigate('DetalleAtaque', {id_ataque: ataque.id})}}>
                    {/* Formateamos la fecha con día de la semana */}
                    <Texto
                      text={`${getDiaSemana(ataque.fecha)}, ${new Date(ataque.fecha).toLocaleDateString('es-ES')} ${new Date(ataque.fecha).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`}
                      estilo="textoBlanco"
                      style={{fontSize: tamanoTexto}}
                      />
                    <Triangulo color={Colores.blanco} style={{ transform: [{ rotate: '-90deg' }] }} />
                  </TouchableOpacity>
              ))}
            </ScrollView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colores.turquesa,
      alignItems: 'center',
      paddingHorizontal: Dimensions.get('window').width / 25,
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    flechaContainer: {
      alignSelf: 'flex-start',
    },
    counterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 20,
    },
    ataquesRecientesContainer: {
      width: '90%',
      marginTop: 20,
      display: 'flex'
    },
    ataqueItem: {
      paddingVertical: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    verMasButton: {
      marginTop: 10,
      width: '25%',
      left: '75%'
    },
    scroll: {
      minHeight: '35%',
      maxHeight: '40%',
    }
});

export default ListaAtaques;
