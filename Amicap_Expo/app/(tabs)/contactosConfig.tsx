import { StyleSheet, View, Dimensions, ActivityIndicator, Text } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { Colores } from '../../constants/Colors';
import {useUserContext} from '@/context/UserContext';
import Flecha from '@/components/Flecha';
import Texto from '@/components/Texto';
import AgregarContacto from '@/components/AgregarContacto';
import ContactoContacto from '@/components/ContactoContacto';
import DBDomain from '@/constants/dbDomain';

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

  const {usuario, setUsuario} = useUserContext();

  // Estados para contactos y carga
  const [contactos, setContactos] = useState<Contact[]>([]);
  // const [loading, setLoading] = useState(true);


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

  useEffect(() => {
    const fetchAndSetContactos = async () => {
      const data = await fetchContactos();
      if (data.length > 0) {
        setContactos(data);
      }
      else console.log('no hay contactos');
    };
    
    fetchAndSetContactos();
  }, []);

  const eliminarContacto = (id: number) => {
    setContactos(contactos.filter(contacto => contacto.id !== id)); // Filtrar y eliminar el contacto
  };

  return (
    <View style={styles.container}>
      <View style={styles.flechaContainer}>
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.blanco} />
      </View>
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text={"Contactos"} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} />
      </View>  

      <View style={styles.contactosContainer}>
      {/* Mostrar la lista de contactos usando ContactoContacto */}
       {contactos.map(contacto => (
        <ContactoContacto
          contacto={contacto}
          eliminarContacto={eliminarContacto} 
        />
      ))} 
      </View>
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
    paddingHorizontal: Dimensions.get('window').width / 405,
  },
  titleContainer: {
    alignItems: 'center',
  },
  contactosContainer:{
    marginTop:'10%',
    width: '120%',
    justifyContent: 'space-evenly',
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