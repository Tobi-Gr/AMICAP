import { StyleSheet, View, Dimensions } from 'react-native';
import React, { FC, useState, useEffect } from 'react';
import { Colores } from '../../constants/Colors';
import DBDomain from '../../constants/dbDomain';
import Flecha from '@/components/Flecha';
import Boton from '@/components/Boton';
import Texto from '@/components/Texto';
import InfoModal from '@/components/InfoModal';

interface Info {
  id: number;
  titulo: string;
  informacion: string;
}

interface Props {
  navigation: any;
}

const InfoGeneralScreen: React.FC<Props> = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoTitulo = windowWidth / 8;
  const yTexto = windowHeight / 45;
  const flechaTamano = windowWidth / 10;
  const [fetchedInfos, setFetchedInfos] = useState<Info[]>([]);
  const [selectedInfo, setSelectedInfo] = useState<Info | null>(null);
  const [visible, setVisible] = useState(false);
  
  const abrirModal = (id: number) => {
    selectInfo(id);
    setVisible(true);
  }
  
  const fetchInfo = async () => {
    const urlApi = `${DBDomain}/api/informacion`;
    try {
      const response = await fetch(urlApi);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (!data) {
        throw new Error('Data failed to response');
      }
      console.log('data: ', data);
      return data;
    } catch (error) {
      console.log('Hubo un error en el fetchInfo ', error);
    }
  }

  const selectInfo = (id: number) => {
    try {
      const info = fetchedInfos.find((info) => info.id == id);
      if (info === undefined) console.log('Hubo un error en el fetchedInfos.find: ', info);
      else setSelectedInfo(info);
    } catch (error) {
      console.log('Hubo un error en el selectInfo ', error);
    }
  }

  useEffect(() => {
    const fetchAndSetInfo = async () => {
      const data = await fetchInfo();
      if (data.length > 0) {
        setFetchedInfos(data);
      }
    };
    fetchAndSetInfo();
  }, []);

  return (
    <View style={styles.container}>
      <InfoModal visible={visible} setVisible={setVisible} selectedInfo={selectedInfo} />
      <View style={styles.flechaContainer}>
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Home"} color={Colores.blanco} />
      </View>
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text={"Información"} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} />
      </View>
      <View style={styles.buttonsContainer}>
        <Boton text={"¿Cómo usar la app?"} textStyle='textoNegro' containerColor='gris' fullWidth onPress={() => abrirModal(1)} />
        <Boton text="¿Qué es un ataque de pánico?" textStyle='textoNegro' containerColor='gris' fullWidth onPress={() => abrirModal(2)} />
        <Boton text={"¿Cómo detectar un ataque de pánico?"} textStyle='textoNegro' containerColor='gris' fullWidth onPress={() => abrirModal(3)} />
        <Boton text={"¿Dónde puedo buscar ayuda?"} textStyle='textoNegro' containerColor='gris' fullWidth onPress={() => abrirModal(4)} />
        <Boton text={"¿Cómo puedo ayudar a alguien que tiene ataques de pánico?"} textStyle='textoNegro' containerColor='gris' fullWidth onPress={() => abrirModal(5)} />
        <Boton text={"¿Cómo puedo ayudar a alguien durante un ataque de pánico?"} textStyle='textoNegro' containerColor='gris' fullWidth onPress={() => abrirModal(6)} />
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
  buttonsContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flechaContainer: {
    alignSelf: 'flex-start'
  },
});

export default InfoGeneralScreen;