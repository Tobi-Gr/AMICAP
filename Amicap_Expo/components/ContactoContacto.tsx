

//ACORADTE DE CAMBIAR EL NAVIGATION PARA QUE VAYA AL MODAL DE EDITARCONTACTO (QUE TODAVÍA NO ESTÁ HECHO)

// import React, { FC, useState } from "react";
// import { TouchableOpacity, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
// import Contact from './icons/Contact';
// import { Colores } from './../constants/Colors';
// import Texto from "./Texto";
// import Edit from "./icons/Edit";
// import Add from "./icons/Add";
// import NombreContacto from "./NombreContacto";

// interface Contact {
//     id: number;
//     nombre: string;
//     numero: string;
// }

// interface Props {
//     contacto: Contact;
//     seleccionado: boolean;
//     onPress: (contacto: Contact) => void;
//     contactosArray: Contact[];
// }

// const ContactoContacto: FC<Props> = ({ contacto, seleccionado, onPress }) => {
//     const windowHeight = Dimensions.get('window').height;
//     const windowWidth = Dimensions.get('window').width;
//     const tamanoFuente = windowWidth / 18;
//     const heightIcon = windowHeight / 25;
//     const widthIcon = heightIcon * 0.9;

//     const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    
//     const handleOnPress = () => {
//         onPress(contacto);
//     }

//     const handleContactPress = (contact: Contact) => {
//         setSelectedContact(prevSelectedContact =>
//             prevSelectedContact?.id === contact.id ? null : contact
//         );
//     };

//     const Contactos = () => {
//         return (
//             <ScrollView style={styles.contactList} contentContainerStyle={styles.contactListContent}>
//                 {contactosArray.map((contacto) => (
//                     <View key={contacto.id} style={styles.contactContainer}>
//                         <NombreContacto
//                             contacto={contacto}
//                             seleccionado={selectedContact?.id === contacto.id}
//                             onPress={() => handleContactPress(contacto)}
//                         />
//                     </View>
//                 ))}
//             </ScrollView>
//         );
//     }


//     return (
//         <TouchableOpacity onPress={handleOnPress} style={[styles.container, seleccionado ? styles.selected : styles.unselected]}>
//             <View style={styles.innerContainer}>
//                 <Contact height={heightIcon} width={widthIcon} color={seleccionado ? Colores.blanco : Colores.turquesa} />
//                 <Texto text={contacto.nombre} estilo={seleccionado ? "textoBlanco" : "textoTurquesa"} style={{ fontSize: tamanoFuente, marginLeft: 10 }} />
//                 <Edit height={heightIcon} width={widthIcon} color={Colores.blanco} /> 
//                 <Add height={heightIcon} width={widthIcon} color={Colores.blanco} />
                
//             </View>
//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         width: '75%',
//         padding: '2%',
//         marginTop: '2%',
//         borderRadius: 12,
//         // Adding a margin to align the border with the content
//         marginBottom: '2%'
//     },
//     innerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: '100%'
//     },
//     selected: {
//         backgroundColor: Colores.turquesa,
//         // Adding padding to adjust the border position
//         paddingBottom: 2
//     },
//     unselected: {
//         borderBottomColor: Colores.turquesa,
//         borderBottomWidth: 2,
//         backgroundColor: Colores.blanco,
//         // Adding padding to adjust the border position
//         paddingBottom: 2
//     },
//     contactList: {
//         width: '100%',
//         flex: 1,
//     },
//     contactListContent: {
//         alignItems: 'center',
//     },
//     contactContainer: {
//         width: '100%',
//         alignItems: 'center',
// }
// });

// export default ContactoContacto;
import React, { FC, useState } from "react";
import { TouchableOpacity, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Contact from './icons/Contact';
import { Colores } from './../constants/Colors';
import Texto from "./Texto";
import Edit from "./icons/Edit";
import Add from "./icons/Add";

interface Contact {
    id: number;
    nombre: string;
    numero: string;
}

interface Props {
    contacto: Contact;
}

const ContactoContacto: FC<Props> = ({ contacto }) => {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 18;
    const heightIcon = windowHeight / 25;
    const widthIcon = heightIcon * 0.9;

    const handleOnPress = () => {
        
    };

    // const handleContactPress = (contact: Contact) => {
    //     setSelectedContact(prevSelectedContact =>
    //         prevSelectedContact?.id === contact.id ? null : contact
    //     );
    // };

    return (
        <TouchableOpacity onPress={handleOnPress} style={[styles.container]}>
            <View style={styles.innerContainer}>
                <Contact height={heightIcon} width={widthIcon} color={ Colores.blanco } />
                <Texto text={contacto.nombre} estilo={"textoBlanco" } style={{ fontSize: tamanoFuente, marginLeft: 10 }} />
                <Edit height={heightIcon} width={widthIcon} color={Colores.blanco} />
                <Add height={heightIcon} width={widthIcon} color={Colores.blanco} />
            </View>
        </TouchableOpacity>
    );
};

// const ContactList: FC<{ contactosArray: Contact[]; onContactPress: (contact: Contact) => void; selectedContact: Contact | null }> = ({ contactosArray, onContactPress, selectedContact }) => {
//     return (
//         <ScrollView style={styles.contactList} contentContainerStyle={styles.contactListContent}>
//             {contactosArray.map((contacto) => (
//                 <View key={contacto.id} style={styles.contactContainer}>
//                     <NombreContacto
//                         contacto={contacto}
//                         seleccionado={selectedContact?.id === contacto.id}
//                         onPress={() => onContactPress(contacto)}
//                     />
//                 </View>
//             ))}
//         </ScrollView>
//     );
// };

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
        width: '100%'
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
    }
});

export default ContactoContacto ;
