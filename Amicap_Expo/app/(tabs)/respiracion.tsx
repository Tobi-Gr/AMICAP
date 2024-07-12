import {StyleSheet, View, Dimensions} from 'react-native';
import {Colores} from '../../constants/Colors';
import Flecha from '@/components/Flecha';
import BotonPrincipal from '@/components/BotonPrincipal';
import Respirar from '@/components/Respirar';
interface Props {
  navigation: any;
}

const RespiracionScreen: React.FC<Props> = ({ navigation }) => {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  //esto hay que sacarlo de la base de datos
  const inhalar = 4;
  const exhalar = 4;
  const mantener = 4;

  const tamanoFuente = windowWidth / 20;

  const flechaTamano = windowWidth / 10;
 
  return (
    <View style={{ flex: 1, backgroundColor: Colores.turquesa }} >
      <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Ayuda"}/>
      <Respirar inhalar={inhalar} exhalar={exhalar} mantener={mantener}/>
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

export default RespiracionScreen;