import { StyleSheet, View, Dimensions } from 'react-native';
import { Colores } from '../../constants/Colors';
import Piso from './../../components/Piso';
import CuadroTexto from '@/components/CuadroTexto';
import Arrow from '@/components/icons/Arrow';
//import Boton from '@/components/Boton';

interface Props {
  navigation: any;
}

const AyudaScreen: React.FC<Props> = ({ navigation }) => {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const dialogoY = windowHeight / 9.4;
  const dialogoX = windowWidth / 4.5;

  const flechaTamano = windowWidth / 10;

  const nombre = "Nombre"

  function handleOnPress(){

  }


  return (
    <View style={{ flex: 1, backgroundColor: Colores.turquesa }}>
      <Arrow color={Colores.blanco} 
        height={flechaTamano} 
        width={flechaTamano} 
        style={styles.flecha}/>
      <CuadroTexto nombre={nombre} actividad="¿Qué querés hacer?" style={{top: dialogoY, left: dialogoX}}/>
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
    top: '50%'
  }
});

export default AyudaScreen;
