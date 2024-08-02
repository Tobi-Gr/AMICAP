import React, { FC, useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions } from 'react-native';
import { Colores } from './../constants/Colors';
import Communications from 'react-native-communications';
import Add from './icons/Add';
import Texto from './Texto';
import NombreContacto from './NombreContacto';
import { tapHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';

interface Contact{
  nombre:string;
  numero:string;
}

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const ContactosModal: FC<Props> = ({visible, setVisible}) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 14;
    //TEMPORAL PARA PRUEBAS (Contactos)
    const contact = {"nombre": "Luca", "numero": "+5491125119535"};
    const contact2 = {"nombre": "Marciano", "numero": "1"}
    const urlApi = "http://localhost:3000/api/contacto/:id_usuario=1";
    const [fetchedContactos, setFetchedContacts] = useState<Contact[]>([]);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    useEffect(() => {
        fetch(urlApi)
            .then(response => response.json())
            .then(data => {
                // Mapear los resultados para adaptarlos al formato de Contacto que se espera
                const mappedContacts: Contact[] = data.results.map((result: any) => ({
                nombre: result.nombre,
                numero: result.number,
            }));
            setFetchedContacts(mappedContacts);})
            .catch(error => console.log('Hubo un error ' + error));
    }, []);

    const handleContactClick = (contact: Contact) => {
        setSelectedContact(contact);
    };

    const handlePhoneCall = () => {
        if(true)
        {
            Communications.phonecall(contact.numero, true);
            //El segundo parámetro (true) indica que la llamada debe iniciarse inmediatamente (no mostrar el diálogo de confirmación).
            //Si lo cambias a false, se mostrará un diálogo de confirmación antes de iniciar la llamada.
        }
    };

    const closeModal = () => {
        setSelectedContact(null);
    };
  //TERMINA LO TEMPORAL
    function cerrarModal(){
        setVisible(false);
    }

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                    <Texto text="Contactar" estilo="textoTurquesa" style={{fontSize: tamanoFuente}}/>
                    <NombreContacto nombre="Juli L"/>
                    <TouchableOpacity onPress={(cerrarModal)}>
                        <Text style={styles.boton}>cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </Modal>
  );
};

const styles = StyleSheet.create({
    card:{
        width: '83%',
        height: '46%',
        padding: 20,
        backgroundColor: Colores.blanco,
        borderRadius: 18,
        alignItems: 'center'
    },
    boton: {
        color: 'rgb(255, 0, 255)',
        fontSize: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }
});

export default ContactosModal;
