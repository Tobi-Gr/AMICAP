import React, { FC, useEffect, useState, useMemo } from 'react';
import { Colores } from '../constants/Colors';
import { StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions, ScrollView } from 'react-native';
import DBDomain from '@/constants/dbDomain';
import Boton from './Boton';
import {useUserContext} from '@/context/UserContext';
import InputTexto from './inputTexto';
import Texto from './Texto';

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    nuevoNombre: string;
    nuevoEmail: string;
    nuevaContrasena: string;
}

const ConfirmarContrasenaModal: FC<Props> = ({ visible, setVisible, nuevoNombre, nuevoEmail, nuevaContrasena }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 15;

    const {usuario, setUsuario} = useUserContext();
    const [confirmacion, setConfirmacion] = useState<string>('');
    
    function cerrarModal()
    {
        setVisible(false);
        setConfirmacion('');
    }

    //corrobora que la contraseña sea correcta
    const fetchToken = async () => {
        const urlApi = `${DBDomain}/api/usuario/login`;

        try {
            const response = await fetch(urlApi, {
                //metodo POST para mandarle un json
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: usuario?.email,
                    contrasena: confirmacion,
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
            console.log('Hubo un error en el fetchToken ', error);
        }
    }

    //modifica usuario
    const putUsuario = async () => {
        const urlApi = `${DBDomain}/api/usuario/update`;
    
        try {
            const response = await fetch(urlApi, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: usuario?.id,
                    username: nuevoNombre,
                    email: nuevoEmail,
                    contrasena: nuevaContrasena,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
      
              const data = await response.json();
              if (!data) {
                throw new Error('Data failed to response');
              } 
              return data;
            } catch (error) {
              console.log('Hubo un error en el updateUsuario ', error);
            }
    };


const updateUsuario = async () => {
    const token = await fetchToken();
    if (token !== null) {
        const data = await putUsuario();
        if (data) {
            cerrarModal();
            setUsuario(data);
            alert('Usuario editado.');
        } else {
            alert('Algo salió mal, intenta de nuevo');
        }
    } else {
        cerrarModal();
        alert('La contraseña es incorrecta.');
    }
}


    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                    <Texto text='Ingresa tu contraseña' estilo='textoTurquesa' style={{fontSize: tamanoFuente}}/>                    
                    <InputTexto placeholder="Contraseña" onChange={setConfirmacion} esContrasena={true} colorBorde={Colores.negro} colorPlaceholder={Colores.turquesa} colorTexto={Colores.negro}/>
                    <View style={styles.botonesContainer}>
                        <Boton text="Cancelar" onPress={cerrarModal} textStyle='textoBlanco' containerColor='turquesa'/>
                        <Boton text="Confirmar" onPress={updateUsuario} textStyle='textoBlanco' containerColor='turquesa'/>  
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '83%',
        height: '30%',
        padding: 20,
        backgroundColor: Colores.blanco,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    contactList: {
        width: '100%',
        flex: 1,
    },
    contactListContent: {
        alignItems: 'center',
    },
    contactContainer: {
        width: '100%',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        marginBottom: 20,
    },
    botonesContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-around',
    },
});

export default ConfirmarContrasenaModal;
