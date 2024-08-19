import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable, Touchable, TouchableOpacity, Text } from 'react-native';
import Navbar from '../../components/Navbar';
import FondoAzul from '@/components/FondoAzul';
import Texto from '@/components/Texto';
import { Colores } from '../../constants/Colors';
//import CrearActividadModal from '@/components/CrearActivdadModal';
import Boton from '@/components/Boton';
import { NativeScreen } from 'react-native-screens';


interface Props {
  navigation: any;
}

const ConfiguracionScreen: React.FC<Props> = ({ navigation }) => {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoFuente = windowWidth / 10;
  const yTexto = windowHeight / 10;
  const titulo="Configuracion";
  const botonesX = windowWidth / 5.5;
  const botonesY = windowHeight / 4.5;


const [visible, setVisible] = useState(false);
const abrirModal = () =>
{
  setVisible(true);
};

  return (
    <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
      {/* <CrearActividadModal visible={visible} setVisible={setVisible}/> */}
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text={titulo} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} /> 
      </View>
      <View style={{ position: 'relative' }}>
        <FondoAzul />
      </View>
      <View style={[styles.buttonsContainer, {top: botonesY, left:botonesX}]}>
        <Boton text={"Actividades que no me sirven"} tamanoFuenteProps={tamanoFuente} onPress={abrirModal} containerColor='gris' textStyle='textoNegro'/>
        <Boton text={"Crear actividad"} tamanoFuenteProps={tamanoFuente} onPress={abrirModal} containerColor='gris' textStyle='textoNegro'/>
      </View>  
      <Navbar tipo="configuration" navigation={navigation}/>
    </View>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer:{
    alignContent: 'center',
    marginHorizontal: 'auto'
  }
});
export default ConfiguracionScreen;
