import { StyleSheet, View, Dimensions } from 'react-native';
import React, { FC, useState, useEffect } from 'react';
import { Colores } from '../../constants/Colors';
import DBDomain from '../../constants/dbDomain';
import Flecha from '@/components/Flecha';
import Boton from '@/components/Boton';
import Texto from '@/components/Texto';
import Ataque from '@/components/Ataque';



interface Props {
  navigation: any;
}

const RegistroDataScreen: React.FC<Props> = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoTitulo = windowWidth / 8;
  const yTexto = windowHeight / 45;
  const flechaTamano = windowWidth / 10;
  const [visible, setVisible] = useState(false);
  
  
  return (
    <View style={styles.container}>
      
      <View style={styles.flechaContainer}>
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.blanco} />
      </View>
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text={"Mis registros"} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} />
      </View>
        <Ataque ataques={Ataque} tipo='semanal'/>
        <Ataque ataques={Ataque} tipo='mensual'/>
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
 
});

export default RegistroDataScreen;
