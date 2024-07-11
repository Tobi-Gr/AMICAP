import {StyleSheet, View, Dimensions} from 'react-native';
import {Link} from 'expo-router'
import Navbar from '../../components/Navbar';
import BotonAyuda from '../../components/BotonAyuda'
import Add from '../../components/icons/Add'
import FondoAzul from '@/components/FondoAzul';
import Texto from '@/components/Texto'
import {Colores} from '../../constants/Colors';
import ListaContactos from '@/components/ListaContactos';
import BotonContacto from '@/components/BotonContacto';
import BotonInfo from '@/components/BotonInfo';


export default function HomeScreen() {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const tamanoFuente = windowWidth / 10;
  const yTexto = windowHeight / 10;
  const nombre = "nombre"; //debería pasarnoslo el back
  const saludo = "Hola, " + nombre;

  const yAyuda = windowHeight * 0.45;
  const xAyuda = windowWidth / 3.5;

  const yContacto = windowHeight / 3;
  const xContacto = windowWidth / 5.8

  const yInfo = windowHeight / 2.07;
  const xInfo = windowWidth / 12.8;
  
  // flex:1 es para que ocupe toda la pantalla

  const contactos =
  [
    {nombre: 'Luca', numero: '5491125119535'},
    {nombre: 'Lifschitz', numero: '9786543'}
  ]
  return (
      <View style={{flex: 1, backgroundColor: Colores.blanco}}>
        <View style={[styles.titleContainer, {marginTop: yTexto}]}>
          <Texto text={saludo} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }}/> 
        </View>
        <View style={{position:'relative'}}>
          <FondoAzul/>
        </View>
        <View style={{ marginTop: yContacto, marginLeft: xContacto, position: 'absolute'}}>
          <BotonContacto/>
        </View> 
        <View style={{ marginTop: yAyuda, marginLeft: xAyuda, position: 'absolute'}}>
          <Link href="/ayuda"></Link>
          <BotonAyuda/>
        </View>  
        <View style={{ marginTop: yInfo, marginLeft: xInfo, position: 'absolute'}}>
          <BotonInfo/>
        </View>  
        <Navbar tipo="home"/>
      </View>
        //<View style={{ marginTop: yAyuda, marginLeft: xAyuda, position: 'absolute'}}>
          //<ListaContactos contactos={contactos}/>
        //</View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  }
});
