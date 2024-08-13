import {StyleSheet, Platform, View, Text, Dimensions} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {Colores} from '../../constants/Colors';
import Flecha from '@/components/Flecha';
import BotonPrincipal from '@/components/BotonPrincipal';
import Texto from '@/components/Texto';
import InfoModal from '@/components/InfoModal';

interface Info{
  id: number
  titulo:string
  informacion: string
}


interface Props {
  navigation: any;
  informacion?: Info[],
  key?: number,
  onPress?: () => void
}

const InfoGeneralScreen: React.FC<Props> = ({ navigation }) => {  
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const tamanoTitulo= windowWidth/10
    const tamanoFuente = windowWidth / 20;
    const yTexto = windowHeight / 10;
    const titulo = "Información";
    const flechaTamano = windowWidth / 10;
    const botonesX = windowWidth / 5.5;
    const botonesY = windowHeight / 4.5;


    const [visible, setVisible] = useState(false);
    const abrirModal = () =>
    {
      setVisible(true);
    };

    return(
     <View style={{ flex: 1, backgroundColor: Colores.turquesa }} >
      <InfoModal visible={visible} setVisible={setVisible}/>
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Home"}/>
        <View style={[styles.titleContainer, { marginTop: yTexto }]}>
            <Texto text={titulo} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} /> 
        </View>
        <View style={[styles.buttonsContainer, {top: botonesY, left:botonesX}]}>
        <BotonPrincipal texto={"¿Cómo usar la app?"} styleText={{fontSize: tamanoFuente}} onPress={((abrirModal))}/>
        <BotonPrincipal texto={"¿Qué es un ataque de pánico?"} styleText={{fontSize: tamanoFuente}} onPress={((abrirModal))}/>
        <BotonPrincipal texto={"¿Cómo detectar un ataque de pánico?"} styleText={{fontSize: tamanoFuente}} onPress={((abrirModal))}/>
        <BotonPrincipal texto={"¿Dónde puedo buscar ayuda?"} styleText={{fontSize: tamanoFuente}} onPress={((abrirModal))}/>
        <BotonPrincipal texto={"¿Cómo puedo ayudar a alguien que tiene ataques de pánico?"} styleText={{fontSize: tamanoFuente}} onPress={((abrirModal))}/>
        <BotonPrincipal texto={"¿Cómo puedo ayuda a alguien durante un ataque de pánico"} styleText={{fontSize: tamanoFuente}} onPress={((abrirModal))}/>
        </View>
     </View>
    );
    
} 



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