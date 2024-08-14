import { StyleSheet, View, Dimensions, Pressable} from 'react-native';
import { Colores } from '../../constants/Colors';
import Piso from './../../components/Piso';
import CuadroTexto from '@/components/CuadroTexto';
import Flecha from '@/components/Flecha';
import BotonPrincipal from '@/components/BotonPrincipal';
import Add from '@/components/icons/Add';

interface Props {
  navigation: any;
}

const AyudaScreen: React.FC<Props> = ({ navigation }) => {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const tamanoFuente = windowWidth / 20;
  const botonesX = windowWidth / 5.5;
  const botonesY = windowHeight / 4.5;


  const dialogoY = windowHeight / 9.4;
  const dialogoX = windowWidth / 4.5;

  const flechaTamano = windowWidth / 10;

  const nombre = "Nombre"

  function handleOnPressRespiracion(){
    navigation.navigate('Respiracion');
  }
  function handleOnPressActividad(){
    navigation.navigate('Actividad');
  }

  // <Arrow color={Colores.blanco} 
  //   height={flechaTamano} 
  //   width={flechaTamano} 
  //   style={styles.flecha}/>

  return (
    <View style={{ flex: 1, backgroundColor: Colores.turquesa }} >
      <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Home"}/>
      <CuadroTexto 
        nombre={nombre} 
        actividad="¿Qué querés hacer?" 
        style={{top: dialogoY, left: dialogoX}}
        textStyle={{fontSize: tamanoFuente}}/>
      <View style={[styles.buttonsContainer, {top: botonesY, left:botonesX}]}>
        <BotonPrincipal texto={"Respiración"} styleText={{fontSize: tamanoFuente}} onPress={handleOnPressRespiracion}/>
        <BotonPrincipal texto={"Otra actividad"} styleText={{fontSize: tamanoFuente}} onPress={handleOnPressActividad}/>
      </View>
      
      <Piso/>
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

export default AyudaScreen;
