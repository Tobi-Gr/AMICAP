import { StyleSheet, View, Dimensions } from 'react-native';
import Texto from '@/components/Texto';
import { Colores } from '../../constants/Colors';

interface Props {
  navigation: any;
}

const AyudaScreen: React.FC<Props> = ({ navigation }) => {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{ flex: 1, backgroundColor: Colores.blanco }}>
      <View style={[styles.titleContainer]}>
        <Texto text={"Página de ayuda"} estilo="tituloTurquesa" /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  }
});

export default AyudaScreen;
