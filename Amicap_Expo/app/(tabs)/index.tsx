import { Image, StyleSheet, Platform, View, Text, Dimensions} from 'react-native';
import Navbar from './../../components/Navbar';
import BotonAyuda from './../../components/BotonAyuda'
import Icon from './../../components/Icon'
import FondoAzul from '@/components/FondoAzul';
import Texto from '@/components/Texto'
import {Colores} from './../../constants/Colors';
import ListaContactos from '@/components/ListaContactos';


export default function HomeScreen() {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const tamanoFuente = windowWidth / 10;
  const yTexto = windowHeight / 10;
  const nombre = "nombre"; //debería pasarnoslo el back
  const saludo = "Hola, " + nombre;

  const yAyuda = windowHeight * 0.45;
  const xAyuda = windowWidth / 3.5;
<<<<<<< HEAD
  
  // flex:1 es para que ocupe toda la pantalla
=======

  const contactos =
  [
    {nombre: 'Luca', numero: '5491125119535'},
    {nombre: 'Lifschitz', numero: '9786543'}
  ]
>>>>>>> 1b9b7011c843c4638a6ef4ccf330e562bd2a7fdb
  return (
    <View style={{flex: 1, backgroundColor: Colores.blanco}}>
      <Icon type='home' color={Colores.turquesa} height={36} width={36}/>
       <View style={[styles.titleContainer, {marginTop: yTexto}]}>
        <Texto text={saludo} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }}/> 
      </View>
      <View style={{position:'relative'}}>
        <FondoAzul/>
      </View>
      <View style={{ marginTop: yAyuda, marginLeft: xAyuda, position: 'absolute'}}>
        <BotonAyuda/>
<<<<<<< HEAD
      </View> 
=======
      </View>*/
      <View style={{ marginTop: yAyuda, marginLeft: xAyuda, position: 'absolute'}}>
        <ListaContactos contactos={contactos}/>
      </View>
>>>>>>> 1b9b7011c843c4638a6ef4ccf330e562bd2a7fdb
    </View>
   );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  }
});
