import {StyleSheet, Platform, View, Text, Dimensions} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {Colores} from '../../constants/Colors';
import Flecha from '@/components/Flecha';
import BotonTexto from '@/components/BotonTexto';
import Texto from '@/components/Texto';
import InfoModal from '@/components/InfoModal';

interface Info{
  id: number;
  titulo:string;
  informacion: string;
}

interface Props {
  navigation: any;
}

const InfoGeneralScreen: React.FC<Props> = ({navigation}) => {  
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const tamanoTitulo= windowWidth/10
    const tamanoFuente = windowWidth / 20;
    const yTexto = windowHeight / 10;
    const flechaTamano = windowWidth / 10;
    const botonesX = windowWidth / 5.5;
    const botonesY = windowHeight / 4.5;

    //TEMPORAL PARA PRUEBAS (Contactos)
    const info1 = {id: 1, titulo: "¿Que es amicap?", informacion: "amicap es esto"};
    const urlApi = "http://localhost:3000/api/information";
    const [fetchedInfos, setFetchedInfos] = useState<Info[]>([]);
    let [selectedInfo, setSelectedInfo] = useState<Info | null>(null);
    const [visible, setVisible] = useState(false);

     const abrirModal = (id: number) =>
    {
       selectInfo(id);
      setVisible(true);
    }

    const fetchInfo = async () => {
      try {
        const response = await fetch(urlApi);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (!data) {
          throw new Error('data failed to response');
        }
        console.log('data: ', data);
        return data;
      } catch (error) {
        console.log('Hubo un error en el fetchInfo ', error);
      }
    }

    const selectInfo = (id: number) => {
      try {
        console.log('select: ', fetchedInfos);
        //selecciona una informacion
        let info = fetchedInfos.find(info => info.id === id)
        if (info === undefined) console.log('Hubo un error en el fetchedInfos.find');
        else setSelectedInfo(info);
      } catch (error) {
        console.log('Hubo un error en el selectInfo ', error);
      }
    }

    useEffect( () =>{
      const fetchAndSetInfo = async () => {
        const data = await fetchInfo();
        if (data.length > 0) {
          setFetchedInfos(data);
        }
      };
      fetchAndSetInfo();
      console.log('effect: ', fetchedInfos);
    }, []);

    return (
      <View style={{ flex: 1, backgroundColor: Colores.turquesa }}>
        <InfoModal visible={visible} setVisible={setVisible} selectedInfo={selectedInfo} />
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Home"} />
        <View style={[styles.titleContainer, { marginTop: yTexto }]}>
          <Texto text={"Información"} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} />
        </View>
        <View style={[styles.buttonsContainer, { top: botonesY, left: botonesX }]}>
          <BotonTexto texto={"¿Cómo usar la app?"} styleText={{ fontSize: tamanoFuente }} onPress={() => abrirModal(1)} />
          <BotonTexto texto={"¿Qué es un ataque de pánico?"} styleText={{ fontSize: tamanoFuente }} onPress={() => abrirModal(2)} />
          <BotonTexto texto={"¿Cómo detectar un ataque de pánico?"} styleText={{ fontSize: tamanoFuente }} onPress={() => abrirModal(3)} />
          <BotonTexto texto={"¿Dónde puedo buscar ayuda?"} styleText={{ fontSize: tamanoFuente }} onPress={() => abrirModal(4)} />
          <BotonTexto texto={"¿Cómo puedo ayudar a alguien que tiene ataques de pánico?"} styleText={{ fontSize: tamanoFuente }} onPress={() => abrirModal(5)} />
          <BotonTexto texto={"¿Cómo puedo ayudar a alguien durante un ataque de pánico?"} styleText={{ fontSize: tamanoFuente }} onPress={() => abrirModal(6)} />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      alignItems: 'center',
    },
    flecha: {
      position: 'absolute',
      left: '5%',
      top: 20
    },
    buttonsContainer:{
      alignContent: 'center',
      marginHorizontal: 'auto'
    }
  });
  export default InfoGeneralScreen;