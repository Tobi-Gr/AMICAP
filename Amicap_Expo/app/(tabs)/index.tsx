import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import Navbar from './../../components/Navbar';
import BotonAyuda from './../../components/BotonAyuda'
import Piso from './../../components/Piso';
import Icon from './../../components/Icon';
import FondoAzul from '@/components/FondoAzul';
import Texto from '@/components/Texto'
import {Colores} from './../../constants/Colors';

export default function HomeScreen() {  
  return (
      // flex es para que ocupe toda la pantalla
    <View style={{flex: 1, backgroundColor: Colores.turquesa}}>
      <BotonAyuda/>
    </View>
   );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
