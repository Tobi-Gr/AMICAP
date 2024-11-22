import Boton from './Boton';
import { Colores } from './../constants/Colors';
import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, View, Modal, Dimensions, ScrollView, Pressable, TextInput } from 'react-native';
import Texto from './Texto';
import DBDomain from '@/constants/dbDomain';
import Ex from './icons/Ex';
import BotonRadio from './BotonRadio';
import Search from './icons/Search';
import {useUserContext} from '@/context/UserContext';

interface Actividad {
    id: number;
    nombre: string;
}

interface ActPref{
    id: number;
    id_usuario: number;
    id_actividad: number;
}

interface actividadUser{
    actividad: Actividad;
    preferida: boolean;
}

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    actividades: Actividad[];
    actsPref: ActPref[];
}

const SeleccionarActsModal: FC<Props> = ({ visible, setVisible, actividades, actsPref }) => {
    const [busqueda, setBusqueda] = React.useState('');
    const [actsSeleccionadas, setActsSeleccionadas] = useState<number[]>([]);
    const [actsUser, setActsUser] = useState<actividadUser[]>([]);
    const { usuario } = useUserContext();

    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth * 0.05;
    const tamanoTitulo = windowWidth * 0.06;
        
    function cerrarModal() {
        setVisible(false);
    }

    const inicializarActsUser = () => {    
        const acts = actividades.map((actividad) => {
            const isPreferida = actsPref.some((pref) => pref.id_actividad === actividad.id && pref.id_usuario === usuario?.id);
            return {
                actividad,
                preferida: isPreferida
            };
        });
        setActsUser(acts);
    };

    useEffect(() => {
        if (usuario) {
            inicializarActsUser();
        }
    }, []);

    useEffect(() => {
        if (usuario) {
            inicializarActsUser();
        }
    }, [visible, usuario]);

    async function guardarCambios() {
        if(usuario)
        {
            try {
                //Si está seleccionada y no existe, la crea
                for (const actividadId of actsSeleccionadas) {
                    const actUser = actsUser.find(act => act.actividad.id === actividadId);
                    const esPreferida = actsPref.find(act => act.id_actividad === actividadId);
                    if (actUser && esPreferida === undefined) { //YA LA IDENTIFICA CORRECTAMENTE!   
                        await crearActUser(actUser.actividad, usuario.id);
                    }
                }
                
            } catch (error) {
                console.error('Error guardando nuevas actividades preferidas:', error);
            }
            
            try {
                // Si no está seleccionada pero existe, la elimina
                for (const actUser of actsUser) {
                    if (!actsSeleccionadas.includes(actUser.actividad.id) && actUser.preferida) {
                        console.log("Actividad a eliminar: ", actUser);
                        await eliminarActUser(actUser.actividad, usuario.id);
                    }
                }                
            }
            catch (error) {
                console.error('Error eliminando actividades preferidas:', error);
            }
        }
        cerrarModal();
    }

    async function crearActUser(act: Actividad, user_id: number) {
        const urlApi = `${DBDomain}/api/actPreferida`;
        try {
            const response = await fetch(urlApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_usuario: user_id,
                    id_actividad: act.id,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            if (!data || data === null) {
                throw new Error('data failed to response');
            }
            return data;
        } catch (error) {
            console.log('Hubo un error en el crearActUser', error); 
            //Tira error pero igual se crea en la base de datos, no entiendo por qué
            //funciona!
        }
    }

    async function eliminarActUser(act: Actividad, user_id: number) {
        const urlApi = `${DBDomain}/api/actPreferida?idAct=${act.id}&idUsuario=${user_id}`;
        
        try {
            const response = await fetch(urlApi, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Error al eliminar la actividad preferida');
            }
    
            const data = await response.json();
            if (!data) {
                throw new Error('No se recibió respuesta al eliminar la actividad preferida');
            }

        } catch (error) {
            console.error('Hubo un error al eliminar la actividad preferida:', error);
        }
    }

    const Busqueda = () => {
        return (
            <View style={styles.busquedaContainer}>
                <TextInput
                    style={{fontSize: tamanoFuente, width: '90%' }}
                    onChangeText={(nuevaBusqueda) => {
                        setBusqueda(nuevaBusqueda);
                        //onChange(nuevaBusqueda);
                    }}
                    value={busqueda}
                    placeholder='Buscar'
                    placeholderTextColor={Colores.negro}
                />
                <Search color={Colores.turquesa}/>
            </View>
        );
    };

    const ListaActs = () => {
        // cambio en el estado de las actividades
        const handleCheck = (actividadId: number, checked: boolean) => {
            if (checked) {
                setActsSeleccionadas((prevSeleccionada) => [...prevSeleccionada, actividadId]);
            } else {
                setActsSeleccionadas((prevSeleccionada) =>
                    prevSeleccionada.filter((id) => id !== actividadId)
                );
            }
    
            setActsUser((prevActsUser) =>
                prevActsUser.map((actUser) =>
                    actUser.actividad.id === actividadId
                        ? { ...actUser, preferida: checked }
                        : actUser
                )
            );
        };
    
        // guardar las actividades seleccionadas cuando carga el componente
        useEffect(() => {
            const actividadesSeleccionadas = actsUser
                .filter((actUser) => actUser.preferida)  // filtra las acts que están seleccionadas
                .map((actUser) => actUser.actividad.id); // extrae solo los id's de las acts seleccionadas
    
            setActsSeleccionadas(actividadesSeleccionadas);
        }, [actsUser]);
    
        return (
            <ScrollView>
                {actsUser.map((actUser) => (
                    <BotonRadio
                        key={actUser.actividad.id}
                        text={actUser.actividad.nombre}
                        id={actUser.actividad.id}
                        tamanoFuente={tamanoFuente}
                        check={actUser.preferida}
                        onChange={(checked) => handleCheck(actUser.actividad.id, !checked)}
                    />
                ))}
            </ScrollView>
        );
    };

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Texto text='Actividades que me sirven' estilo="textoTurquesa" style={{fontSize: tamanoTitulo}}/>
                        <Pressable onPress={cerrarModal}>
                            <Ex color={Colores.turquesa}/>
                        </Pressable>
                    </View>
                    <Busqueda/>
                    {ListaActs()}
                    <View style={styles.buttonContainer}>
                        <Boton onPress={cerrarModal} text="Cancelar" containerColor='blanco' textStyle='textoTurquesa'/>
                        <Boton  onPress={guardarCambios} text="Guardar" containerColor='turquesa' textStyle='textoBlanco'/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '91.6%',
        height: '70.5%',
        padding: 20,
        backgroundColor: Colores.blanco,
        borderRadius: 18,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonContainer:
    {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '5%'
    },
    header:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    busquedaContainer:
    {
        borderBottomColor: Colores.celeste,
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    }
});

export default SeleccionarActsModal;