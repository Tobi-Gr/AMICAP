import { StyleSheet, View, Dimensions } from 'react-native';
import { Colores } from '../../constants/Colors';
import Piso from './../../components/Piso';
import CuadroTexto from '@/components/CuadroTexto';
import Arrow from '@/components/icons/Arrow';
import BotonPrincipal from '@/components/BotonPrincipal';
interface Props {
  navigation: any;
}

const AyudaScreen: React.FC<Props> = ({ navigation }) => {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const tamanoFuente = windowWidth / 18;
  const botonesX = windowWidth / 5.5;
  const botonesY = windowHeight / 4.5;


  const dialogoY = windowHeight / 9.4;
  const dialogoX = windowWidth / 4.5;

  const flechaTamano = windowWidth / 10;

  const nombre = "Nombre"

  function handleOnPress(){

  }

  // <Arrow color={Colores.blanco} 
  //   height={flechaTamano} 
  //   width={flechaTamano} 
  //   style={styles.flecha}/>

  return (
    <View style={{ flex: 1, backgroundColor: Colores.turquesa }}>
      <CuadroTexto nombre={nombre} actividad="¿Qué querés hacer?" style={{top: dialogoY, left: dialogoX}}/>
      <View style={[styles.buttonsContainer, {top: botonesY, left:botonesX}]}>
        <BotonPrincipal texto={"Respiración"} styleText={{fontSize: tamanoFuente}}/>
        <BotonPrincipal texto={"Otra actividad"} styleText={{fontSize: tamanoFuente}}/>
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
  },
  buttonsContainer:{
    alignContent: 'center',
    marginHorizontal: 'auto'
  }
});

export default AyudaScreen;
