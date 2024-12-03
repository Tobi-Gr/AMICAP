import { StyleSheet, View, Dimensions } from 'react-native';
import React, { FC, useState, useEffect } from 'react';
import { Colores } from '../../constants/Colors';
import DBDomain from '../../constants/dbDomain';
import Flecha from '@/components/Flecha';
import Boton from '@/components/Boton';
import Texto from '@/components/Texto';
import Ataque from '@/components/Ataque';
import { useUserContext } from '@/context/UserContext';

interface Props {
  navigation: any;
}

const RegistroDataScreen: React.FC<Props> = ({ navigation }) => {
  const {usuario} = useUserContext();

  const [visible, setVisible] = useState(false);
  const [ataques, setAtaques] = useState([]);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const tamanoTitulo = windowWidth / 8;
  const yTexto = windowHeight / 45;
  const flechaTamano = windowWidth / 10;
  
  useEffect( () =>{
    const fetchAndSetAtaques = async () => {
      const data = await fetchAtaques();
      if (data.length > 0) {
        setAtaques(data);
      }
    };

    fetchAndSetAtaques();
  }, []);

  const fetchAtaques = async () => {
    if(usuario)
    {
      const urlApi = `${DBDomain}/api/ataque/${usuario.id}`;
      try {
        const response = await fetch(urlApi);
        if (!response.ok) {
          throw new Error('Failed to fetch ataques');
        }
        const data = await response.json();
        if (!data) {
          throw new Error('Data failed to response (fetch ataques)');
        }
        return data;
      } catch (error) {
        console.log('Hubo un error en el fetchAtaques', error);
      }
    }
  }
  
  return (
    <View style={styles.container}>
      
      <View style={styles.flechaContainer}>
        <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Perfil"} color={Colores.blanco} />
      </View>
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text={"Mis registros"} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} />
      </View>
        <Ataque ataques={ataques} tipo='semanal'/> {/*acá tiene que recibir un array con todos los ataques, no? */}
        <Ataque ataques={ataques} tipo='mensual'/>
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
