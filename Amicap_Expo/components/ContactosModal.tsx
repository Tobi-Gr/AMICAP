import Add from './icons/Add';
import BotonTexto from './BotonTexto';
import { Colores } from './../constants/Colors';
import Communications from 'react-native-communications';
import React, { FC, useEffect, useState, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Modal, Dimensions, ScrollView } from 'react-native';
import Texto from './Texto';
import NombreContacto from './NombreContacto';

interface Contact {
    id: number;
    nombre: string;
    numero: string;
}

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const ContactosModal: FC<Props> = ({ visible, setVisible }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 14;
    const contactosArray = useMemo(() => [
        { id: 1, nombre: "Luca", numero: "+5491125119535" },
        { id: 2, nombre: "Juli Lif", numero: "+549116245965" },
        { id: 3, nombre: "Juli Lav", numero: "+5491139435672" },
        { id: 4, nombre: "Tobi", numero: "+5491170033777" }
    ], []);
    const urlApi = "http://localhost:3000/api/contacto/:id_usuario=1";
    const [fetchedContactos, setFetchedContacts] = useState<Contact[]>([]);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    useEffect(() => {
        fetch(urlApi)
            .then(response => response.json())
            .then(data => {
                const mappedContacts: Contact[] = data.results.map((result: any) => ({
                    nombre: result.nombre,
                    numero: result.number,
                }));
                setFetchedContacts(mappedContacts);
            })
            .catch(error => console.log('Hubo un error ' + error));
    }, []);

    const handlePhoneCall = () => {
        if (selectedContact != null) {
            Communications.phonecall(selectedContact.numero, true);
        }
    };
    
    function cerrarModal() {
        setVisible(false);
        setSelectedContact(null);
    }

    const handleContactPress = (contact: Contact) => {
        setSelectedContact(prevSelectedContact =>
            prevSelectedContact?.id === contact.id ? null : contact
        );
    };

    const Contactos = () => {
        return (
            <ScrollView style={styles.contactList} contentContainerStyle={styles.contactListContent}>
                {contactosArray.map((contacto) => (
                    <View key={contacto.id} style={styles.contactContainer}>
                        <NombreContacto
                            contacto={contacto}
                            seleccionado={selectedContact?.id === contacto.id}
                            onPress={() => handleContactPress(contacto)}
                        />
                    </View>
                ))}
            </ScrollView>
        );
    }

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Texto text="Contactar" estilo="textoTurquesa" style={{ fontSize: tamanoFuente }} />
                    </View>
                    <Contactos />
                    <View style={styles.botonesContainer}>
                        <BotonTexto text="Cerrar" onPress={cerrarModal} />
                        <BotonTexto text="Llamada" onPress={handlePhoneCall} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '83%',
        height: '40%',
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
        marginBottom: 20,
    },
    botonesContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-around',
    },
});

export default ContactosModal;
