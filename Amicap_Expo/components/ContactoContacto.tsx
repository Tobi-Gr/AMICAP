import React, { FC, useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Dimensions, View, ScrollView, Keyboard } from 'react-native';
import DBDomain from '@/constants/dbDomain';
import Contact from './icons/Contact';
import { Colores } from './../constants/Colors';
import Texto from "./Texto";
import Edit from "./icons/Edit";
import Add from "./icons/Add";
import ConfirmarModal from '@/components/ConfirmarModal';
import AgregarXeditarContactoModal from "./AgregarXeditarContactoModal";
import {useUserContext} from '@/context/UserContext';

interface Contact {
    id: number;
    nombre: string;
    numero: string;
}

interface Props {
    contacto: Contact;
    eliminarContacto: (id: number) => void; 
}

const ContactoContacto: FC<Props> = ({ contacto, eliminarContacto }) => {
    const [visibleEditar, setVisibleEditar] = useState(false);
    const [visibleEliminar, setVisibleEliminar] = useState(false);
    const nombre=contacto?.nombre
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const {usuario, contactos, setContactos} = useUserContext();
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 18;
    const heightIcon = windowHeight / 25;
    const widthIcon = heightIcon * 0.9;

    const fetchContactos = async () => {
        const urlApi=`${DBDomain}/api/contacto/${usuario?.id}`;
        try {
            const response = await fetch(urlApi);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            if (!data) {
                throw new Error('Data failed to response');
            }
            return data;
        } catch (error) {
            console.log('Hubo un error en el fetchContacto ', error);
        }
    }
    
    const fetchAndSetContactos = async () => {
        const data = await fetchContactos();
        if (data.length > 0) {
            setContactos(data);
        }
        else console.log('no hay contactos');
    };

    const keyboardDidShowListener = Keyboard.addListener( 'keyboardDidShow',
        () => {
            setKeyboardVisible(true); // Muestra elementos si el teclado está visible
        }
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
        () => {
            setKeyboardVisible(false); // Oculta elementos si el teclado no está visible
        }
    );

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener( 'keyboardDidShow',
        () => {
                setKeyboardVisible(true); // Muestra elementos si el teclado está visible
            }
        );
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
        () => {
                setKeyboardVisible(false); // Oculta elementos si el teclado no está visible
            }
        );
    }, []);

    const handleOnPressEliminarContacto = () => {
        setVisibleEliminar(true);
    };
    const handleOnPressEditarContacto = () => {
        setVisibleEditar(true);

    };
    const handleConfirmarEliminar = async () => {
        try {
            const response = await fetch(`${DBDomain}/api/contacto/${contacto.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                eliminarContacto(contacto.id);
                alert('Contacto eliminado');
            } else {
                const errorMessage = await response.text();
                alert(`Error: ${errorMessage}`);
            }
        } catch (error) {
            console.log('Error al eliminar contacto:', error);
            alert('Hubo un error al eliminar el contacto');
        }
    }
    const handleEditarContacto = async (nombre: string, numero: string) => {
        try {
            const response = await fetch(`${DBDomain}/api/contacto/${contacto.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: contacto.id,
                nombre: nombre,
                numero: numero,
            }),
        });
    
        if (response.ok) {
            alert('Contacto editado');
            fetchAndSetContactos();
            setVisibleEditar(false);
        } 
        } catch (error) {
            console.log('Error al editar contacto:', error);
            alert('Hubo un error al editar el contacto');
        }
    };

    return (
        <View style={[styles.container]}>
            <AgregarXeditarContactoModal visible={visibleEditar} setVisible={setVisibleEditar} prompt='Editar contacto' confirmado={handleEditarContacto} aclaracion ='Editar' isKeyboardVisible={isKeyboardVisible}/>
            <ConfirmarModal visible={visibleEliminar} setVisible={setVisibleEliminar} prompt={`¿Querés eliminar a ${nombre}?`} confirmado={handleConfirmarEliminar}/>
            <View style={styles.innerContainer}>
                <View style={styles.columna1}>
                <Contact height={heightIcon} width={widthIcon} color={ Colores.blanco } />
                <Texto text={contacto.nombre} estilo={"textoBlanco" } style={{ fontSize: tamanoFuente, marginLeft: 10 }} />
                </View>
                <View style={styles.columna2}>
                    <Edit height={heightIcon} width={widthIcon} color={Colores.blanco} onPress={handleOnPressEditarContacto}/>
                    <View style={styles.x}>
                    <Add height={heightIcon} width={widthIcon} color={Colores.blanco} onPress={handleOnPressEliminarContacto}/>
                </View>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '75%',
        padding: '2%',
        marginTop: '2%',
        borderRadius: 12,
        marginBottom: '2%'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomWidth:2,
        borderColor: Colores.blanco
    },
    selected: {
        backgroundColor: Colores.turquesa,
        paddingBottom: 2
    },
    unselected: {
        borderBottomColor: Colores.turquesa,
        borderBottomWidth: 2,
        backgroundColor: Colores.blanco,
        paddingBottom: 2
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
    columna1:{
        flexDirection: 'row',
        alignItems: 'flex-start',
       flex:8
    },
    columna2:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'space-between',   
        flex:2
    },
    x:{
        transform: [{ rotate: '45deg' }]
    }
});

export default ContactoContacto ;
