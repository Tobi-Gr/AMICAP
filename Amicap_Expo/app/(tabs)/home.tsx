import DBDomain from '../../constants/dbDomain';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable, Touchable, TouchableOpacity, Text } from 'react-native';
import {useUserContext} from '@/context/UserContext';
import Navbar from '../../components/Navbar';
import BotonAyuda from '../../components/BotonAyuda';
import FondoAzul from '@/components/FondoAzul';
import Texto from '@/components/Texto';
import { Colores } from '../../constants/Colors';
import BotonContacto from '@/components/BotonContacto';
import BotonInfo from '@/components/BotonInfo';
import ContactosModal from '@/components/ContactosModal';

interface Contacto {
  id: number;
  nombre: string;
  numero: string;
}

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {  
  
  const {token, usuario, setMensaje, contactos, setContactos} = useUserContext();
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoFuente = windowWidth / 10;
  const yTexto = windowHeight / 10;
  const nombre = usuario?.username; //debería pasarnoslo el back
  const saludo = nombre? 'Hola, ' + nombre : 'Hola, usuario';
  const yAyuda = windowHeight * 0.45;
  const xAyuda = windowWidth / 3.5;
  const yContacto = windowHeight / 3;
  const xContacto = windowWidth / 5.8;
  const yInfo = windowHeight / 2.07;
  const xInfo = windowWidth / 12.8;
  
  const [visible, setVisible] = useState(false);
  const abrirModal = () =>
  {
    setVisible(true);
  };
  
  //toma los contactos del usuario
  const fetchContactos = async () => {
    const urlApi = `${DBDomain}/api/contacto/${usuario?.id}`;
    try {
      const response = await fetch(urlApi);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (!data) {
        throw new Error('data failed to response');
      }
      return data;
    } catch (error) {
      console.log('Hubo un error en el fetchContactos ', error);
    }
  }

  const fetchMensaje = async () => {
    if(usuario)
    {
      const urlApi = `${DBDomain}/api/mensaje/${usuario.id}`;
      try {
        const response = await fetch(urlApi);
        if (!response.ok) {
          throw new Error('Failed to fetch mensaje');
        }
        const data = await response.json();
        if (!data) {
          throw new Error('Data failed to response');
        }
        return data;
      } catch (error) {
        console.log('Hubo un error en el fetchMensaje: ', error);
      }
    }
  }

  useEffect(() => {
    const fetchAndSetContactos = async () => {
      const data = await fetchContactos();
      if (data != null) {
        setContactos(data);
      }
    };
    const fetchAndSetMensaje = async () => {
      const data = await fetchMensaje();
      if (data != null) {
        setMensaje(data.mensaje);
      }
    };
    
    fetchAndSetContactos();
    fetchAndSetMensaje();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
      <ContactosModal visible={visible} setVisible={setVisible}/>
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text={saludo} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} />
      </View>
        <FondoAzul/>
        <View style={{ marginTop: yContacto, marginLeft: xContacto, position: 'absolute' }} >
          <BotonContacto  onPress={((abrirModal))}/>
          {/*contactos={[contact, contact2]} key={0} */}
        </View> 
        <View style={{ marginTop: yAyuda, marginLeft: xAyuda, position: 'absolute' }}>
          <BotonAyuda navigation={navigation} /> 
        </View>  
        <View style={{ marginTop: yInfo, marginLeft: xInfo, position: 'absolute' }}>
          <BotonInfo navigation={navigation}/>
      </View>
      <Navbar tipo="home" navigation={navigation}/>
    </View>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  fondo:
  {
    position: 'absolute',
    top: '21%',
  }
});
export default HomeScreen;
