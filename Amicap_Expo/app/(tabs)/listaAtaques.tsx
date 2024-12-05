import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colores } from '../../constants/Colors';
import Texto from '@/components/Texto';
import DBDomain from '@/constants/dbDomain';
import { useUserContext } from '@/context/UserContext';
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
    const { usuario } = useUserContext();
    const [ataques, setAtaques] = useState<Attack[]>([]);

    const windowWidth = Dimensions.get('window').width;
    const flechaTamano = windowWidth / 10;
    const tamanoIndice = windowWidth / 16;
    const tamanoTexto = windowWidth / 21;

    const fetchAtaques = async () => {
        if (usuario) {
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
    };

    const getDiaSemana = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
        const diaSemana = new Date(date).toLocaleDateString('es-ES', options);
        return diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    };

    // Agrupar ataques por mes y año
    const agruparPorMes = (ataques: Attack[]) => {
        const grupos: { [key: string]: Attack[] } = {};

        ataques.forEach((ataque) => {
            const fecha = new Date(ataque.fecha);
            const mes = `${fecha.toLocaleString('es-ES', { month: 'long' }).charAt(0).toUpperCase() + fecha.toLocaleString('es-ES', { month: 'long' }).slice(1)} ${fecha.getFullYear()}`;

            if (!grupos[mes]) {
                grupos[mes] = [];
            }

            grupos[mes].push(ataque);
        });

        return grupos;
    };

    useEffect(() => {
        const fetchAndSetAtaques = async () => {
            const data = await fetchAtaques();
            if (data.length > 0) {
                setAtaques(data);
            }
        };

        fetchAndSetAtaques();
    }, []);

    const ataquesAgrupados = agruparPorMes(ataques);

    return (
      <GestureHandlerRootView style={styles.background}>
        <View style={styles.flechaContainer}>
            <Flecha
                height={flechaTamano}
                width={flechaTamano}
                navigation={navigation}
                screen={"registroData"}
                color={Colores.blanco}
            />
            <Texto text="Tus ataques" estilo="textoBlanco" style={{ fontSize: tamanoIndice, top: '50%' }} />
        </View>
        {/* Lista de ataques recientes */}
        <ScrollView style={styles.scroll}>
          {Object.keys(ataquesAgrupados).map((mesAnio, index) => {
              const [mes] = mesAnio.split(' '); // Extraer solo el mes sin el año
              return (
                <View key={index}>
                    {/* Titulo por mes sin el año */}
                    <Texto
                        text={mes}
                        estilo="textoBlanco"
                        style={{ fontSize: tamanoIndice, marginVertical: 10 }}
                    />
                    {/* Lista de ataques para ese mes */}
                    {ataquesAgrupados[mesAnio].map((ataque, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={styles.ataqueItem}
                            onPress={() => { navigation.navigate('DetalleAtaque', { id_ataque: ataque.id }) }}>
                            {/* Formateo con día de la semana */}
                            <Texto
                                text={`${getDiaSemana(ataque.fecha)}, ${new Date(ataque.fecha).toLocaleDateString('es-ES')} ${new Date(ataque.fecha).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`}
                                estilo="textoBlanco"
                                style={{ fontSize: tamanoTexto }}
                            />
                            <Triangulo color={Colores.blanco} style={{ transform: [{ rotate: '-90deg' }] }} />
                        </TouchableOpacity>
                    ))}
                </View>
              );
            })}
        </ScrollView>
      </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
  background:
  {
    backgroundColor: Colores.turquesa,
    flex: 1,
  },
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
    alignContent: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    marginBottom: '5%',
    top: '-3%'
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
    margin: '4%',
    maxHeight: '80%'
  }
});

export default ListaAtaques;
