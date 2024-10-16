import { StyleSheet, View, Dimensions } from 'react-native';
import React, { FC, useState, useEffect } from 'react';
import { Colores } from '../../constants/Colors';
import DBDomain from '../../constants/dbDomain';
import Flecha from '@/components/Flecha';
import Boton from '@/components/Boton';
import Texto from '@/components/Texto';
import ContactoContacto from '@/components/ContactoContacto';
import AgregarContacto from '@/components/AgregarContacto';

interface Info {
  id: number;
  titulo: string;
  informacion: string;
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
  const [fetchedInfos, setFetchedInfos] = useState<Info[]>([]);
  const [selectedInfo, setSelectedInfo] = useState<Info | null>(null);
  const [visible, setVisible] = useState(false);
  
  
  return (
    <View style={styles.container}>
      
      <View style={styles.flechaContainer}>
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.blanco} />
      </View>
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text={"Contactos"} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} />
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
    paddingHorizontal: Dimensions.get('window').width / 25, 
  },
  titleContainer: {
    alignItems: 'center',
  },

  flechaContainer: {
    alignSelf: 'flex-start'
  },
  agregar:{
    position: 'absolute',
    right: '5%',
    bottom: 20
  }
});

export default ContactosConfigScreen;
