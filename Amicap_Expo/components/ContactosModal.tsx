import Add from './icons/Add';
import Boton from './Boton';
import { Colores } from './../constants/Colors';
import Communications from 'react-native-communications';
import React, { FC, useState, useMemo } from 'react';
import { StyleSheet, View, Modal, Dimensions, ScrollView, Linking } from 'react-native';
import Texto from './Texto';
import NombreContacto from './NombreContacto';
import DBDomain from '@/constants/dbDomain';

interface Contacto {
    id: number;
    nombre: string;
    numero: string;
}

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    contactosArray: Contacto[];
    mensaje: string;
}

const ContactosModal: FC<Props> = ({ visible, setVisible, contactosArray, mensaje }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 14;
    // const contactosArray = useMemo(() => [
    //     { id: 1, nombre: "Luca", numero: "+5491125119535" },
    //     { id: 2, nombre: "Juli Lif", numero: "+549116245965" },
    //     { id: 3, nombre: "Juli Lav", numero: "+5491139435672" },
    //     { id: 4, nombre: "Tobi", numero: "+5491170033777" }
    // ], []);

    const [selectedContact, setSelectedContact] = useState<Contacto | null>(null);

    const handlePhoneCall = () => {
        if (selectedContact != null) {
            Communications.phonecall(selectedContact.numero, true);
        }
    };
    
    function cerrarModal() {
        setVisible(false);
        setSelectedContact(null);
    }
    
    function mandarMensaje() {
        let api_whatsapp;
        if (selectedContact != null) {
            api_whatsapp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(selectedContact.numero)}&text=${encodeURIComponent(mensaje + ' yo ')}`;
            Linking.openURL(api_whatsapp).catch(err => console.error("Error al abrir WhatsApp: ", err));
        }
        cerrarModal();
    }

    const handleContactPress = (contact: Contacto) => {
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
                        <Boton text="Cerrar" onPress={mandarMensaje} textStyle='textoBlanco' containerColor='turquesa'/>
                        <Boton text="Llamada" onPress={handlePhoneCall} textStyle='textoBlanco' containerColor='turquesa'/>
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
