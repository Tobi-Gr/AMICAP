import { Image, StyleSheet, Platform, View, Text, Dimensions} from 'react-native';
import Texto from '@/components/Texto'
import {Colores} from './../../constants/Colors';


export default function HomeScreen() {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const tamanoFuente = windowWidth / 10;
  return (
      <View style={{flex: 1, backgroundColor: Colores.blanco}}>
          <Texto text={"Página de ayuda"} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }}/> 
      </View>
        
        );
      }    
      
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  }
});
