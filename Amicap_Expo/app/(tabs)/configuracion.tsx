import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable, Touchable, TouchableOpacity, Text } from 'react-native';
import Navbar from '../../components/Navbar';
import FondoAzul from '@/components/FondoAzul';
import Texto from '@/components/Texto';
import { Colores } from '../../constants/Colors';
//import CrearActividadModal from '@/components/CrearActivdadModal';
import Boton from '@/components/Boton';
import { NativeScreen } from 'react-native-screens';
import BotonTextoIcono from '@/components/BotonTextoIcono';
import SliderNumeros from '@/components/sliderNumeros';

interface Props {
  navigation: any;
}

const ConfiguracionScreen: React.FC<Props> = ({ navigation }) => {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoFuente = windowWidth / 10;
  const yTexto = windowHeight / 10;
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
        <Texto text="Configuracion" estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} /> 
      </View>
      <View style={{ position: 'relative' }}>
        <FondoAzul />
      </View>
      <SliderNumeros/>
      <View style={[styles.buttonsContainer, {top: botonesY}]}>
      <BotonTextoIcono text="Seleccionar actividades" icon="check" onPress={() => console.log('Botón Actividades presionado')}/>
      <BotonTextoIcono text="Agregar actividad" icon="add" onPress={() => console.log('Botón AgregarActividad presionado')}/>
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
    position: 'absolute',
    bottom: 80, 
    left: '5%',
    right: '5%', 
    flexDirection: 'column', 
    alignItems: 'center', 
  },
});

export default ConfiguracionScreen;
