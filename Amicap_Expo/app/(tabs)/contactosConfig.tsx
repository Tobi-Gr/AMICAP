// import { StyleSheet, View, Dimensions } from 'react-native';
// import React, { FC, useState, useEffect } from 'react';
// import { Colores } from '../../constants/Colors';
// import DBDomain from '../../constants/dbDomain';
// import Flecha from '@/components/Flecha';
// import Boton from '@/components/Boton';
// import Texto from '@/components/Texto';
// import ContactoContacto from '@/components/ContactoContacto';
// import AgregarContacto from '@/components/AgregarContacto';
// import ContactList from '@/components/ContactoContacto';


// interface Info {
//   id: number;
//   titulo: string;
//   informacion: string;
// }

// interface Props {
//   navigation: any;
// }

// const ContactosConfigScreen: React.FC<Props> = ({ navigation }) => {
//   const windowWidth = Dimensions.get('window').width;
//   const windowHeight = Dimensions.get('window').height;
//   const tamanoTitulo = windowWidth / 8;
//   const yTexto = windowHeight / 45;
//   const flechaTamano = windowWidth / 10;
//   const [fetchedInfos, setFetchedInfos] = useState<Info[]>([]);
//   const [selectedInfo, setSelectedInfo] = useState<Info | null>(null);
//   const [visible, setVisible] = useState(false);
  
  
//   return (
//     <View style={styles.container}>
      
//       <View style={styles.flechaContainer}>
//         <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.blanco} />
//       </View>
//       <View style={[styles.titleContainer, { marginTop: yTexto }]}>
//         <Texto text={"Contactos"} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} />
        
//       </View>
//       <View style={styles.agregar}>
//       <AgregarContacto navigation={navigation} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colores.turquesa,
//     alignItems: 'center',
//     paddingHorizontal: Dimensions.get('window').width / 25, 
//   },
//   titleContainer: {
//     alignItems: 'center',
//   },

//   flechaContainer: {
//     alignSelf: 'flex-start'
//   },
//   agregar:{
//     position: 'absolute',
//     right: '5%',
//     bottom: 20
//   }
// });

// export default ContactosConfigScreen;
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { Colores } from '../../constants/Colors';
import Flecha from '@/components/Flecha';
import Texto from '@/components/Texto';
import AgregarContacto from '@/components/AgregarContacto';
import ContactoContacto from '@/components/ContactoContacto';

interface Contact {
  id: number;
  nombre: string;
  numero: string;
}

interface Props {
  navigation: any;
}

const ContactosConfigScreen: React.FC<Props> = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoTitulo = windowWidth / 8;
  const yTexto = windowHeight / 45;
  const flechaTamano = windowWidth / 10;

  // Estados para contactos y carga
  const [contactos, setContactos] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Función para obtener contactos desde la base de datos
  const fetchContactos = async () => {
    try {
      const response = await fetch('TU_API_ENDPOINT'); // Reemplaza con tu endpoint
      const data = await response.json();
      setContactos(data); // Asegúrate de que `data` sea un array de contactos
    } catch (error) {
      console.error('Error fetching contactos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactos();
  }, []);

  const handleContactPress = (contact: Contact) => {
    setSelectedContact(prevSelected => (prevSelected === contact.id ? null : contact.id));
  };

  if (loading) {
    return <ActivityIndicator size="large" color={Colores.blanco} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.flechaContainer}>
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.blanco} />
      </View>
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text={"Contactos"} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} />
      </View>  
      {/* Mostrar la lista de contactos usando ContactoContacto */}
      {contactos.map(contacto => (
        <ContactoContacto
          key={contacto.id}
          contacto={contacto}
          seleccionado={selectedContact === contacto.id}
          onPress={handleContactPress}
          contactosArray={contactos} // Aunque no lo usas aquí, si lo necesitas puedes implementarlo
        />
      ))}
      <View style={styles.agregar}>
        <AgregarContacto navigation={navigation} />
      </View>

    
    </View>
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
  },
  flechaContainer: {
    alignSelf: 'flex-start',
  },
  agregar: {
    position: 'absolute',
    right: '5%',
    bottom: 20,
  },
});

export default ContactosConfigScreen;