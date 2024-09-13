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
import SliderSegundos from '@/components/sliderSegundos';
import SliderVolumen from '@/components/SliderVolumen';
import TextArea from '@/components/TextArea';

interface Props {
  navigation: any;
}

const ConfiguracionScreen: React.FC<Props> = ({ navigation }) => {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoFuente = windowWidth / 10;
  const yTexto = windowHeight / 10;
  const botonesY = windowHeight / 4;


  const [visible, setVisible] = useState(false);

  //conectar con la base de datos
  const [inhalar, setInhalar] = useState(4);
  const [exhalar, setExhalar] = useState(4);
  const [mantener, setMantener] = useState(4);

  const [pruebaVolumen, setPruebaVolumen] = useState(0);
  const [pruebaMensaje, setPruebaMensaje] = useState("Estoy teniendo un ataque de pánico.");

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
      <View style={styles.fondo}>
        <FondoAzul />
      </View >
      <View style={[styles.scrollContainer, {top: botonesY}]}>

        <SliderVolumen value={pruebaVolumen} onValueChange={setPruebaVolumen}/>
        <BotonTextoIcono text="Seleccionar actividades" icon="check" onPress={() => console.log('Botón Actividades presionado')}/>
        <BotonTextoIcono text="Agregar actividad" icon="add" onPress={() => console.log('Botón AgregarActividad presionado')}/>
        <SliderSegundos value={inhalar} onValueChange={setInhalar} text={"Tiempo inhalando"}/>
        <SliderSegundos value={exhalar} onValueChange={setExhalar} text={"Tiempo exhalando"}/>
        <SliderSegundos value={mantener} onValueChange={setMantener} text={"Tiempo manteniendo"}/>
        <TextArea prompt="Mensaje por defecto" value={pruebaMensaje} onChange={setPruebaMensaje}/>
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
  scrollContainer:{
    position: 'absolute',
    bottom: 80, 
    left: '5%',
    right: '5%', 
    flexDirection: 'column', 
    alignItems: 'center', 
  },
  fondo:
  {
    position: 'absolute',
    top: '21%'
  }
});

export default ConfiguracionScreen;
