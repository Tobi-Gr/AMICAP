import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Keyboard } from 'react-native';
import Navbar from '../../components/Navbar';
import FondoAzul from '@/components/FondoAzul';
import Texto from '@/components/Texto';
import { Colores } from '../../constants/Colors';
import BotonTextoIcono from '@/components/BotonTextoIcono';
import SliderSegundos from '@/components/sliderSegundos';
import SliderVolumen from '@/components/SliderVolumen';
import TextArea from '@/components/TextArea';
import SeleccionarActsModal from '@/components/SeleccionarActsModal';
import CrearActividadModal from '@/components/CrearActivdadModal';

interface Props {
  navigation: any;
}

const ConfiguracionScreen: React.FC<Props> = ({ navigation }) => {  

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoFuente = windowWidth / 10;
  const yTexto = windowHeight / 10;
  const botonesY = windowHeight / 4;
  const [visibleSeleccionar, setVisibleSeleccionar] = useState(false);
  const [visibleCrear, setVisibleCrear] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false); // Estado para controlar la visibilidad del teclado
  
  //conectar con la base de datos
  const [inhalar, setInhalar] = useState(4);
  const [exhalar, setExhalar] = useState(4);
  const [mantener, setMantener] = useState(4);
  const [pruebaVolumen, setPruebaVolumen] = useState(0);
  const [pruebaMensaje, setPruebaMensaje] = useState("Estoy teniendo un ataque de pánico.");

  const abrirModalSeleccionar = () =>
  {
    setVisibleSeleccionar(true);
  };

  const abrirModalCrear = () =>
  {
    setVisibleCrear(true);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // Muestra elementos si el teclado está visible
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // Oculta elementos si el teclado no está visible
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  //Acá hay que hacer el fetch de todas las acts, pero mientras tanto:
  const actividades_prueba = [
    {'id': 0, 'nombre': 'a'},
    {'id': 1, 'nombre': 'b'},
    {'id': 2, 'nombre': 'c'},
    {'id': 3, 'nombre': 'd'},
  ]

  return (
    <View style={{ flex: 1, backgroundColor: Colores.blanco }}> 
      <SeleccionarActsModal visible={visibleSeleccionar} setVisible={setVisibleSeleccionar} actividades={actividades_prueba}/>
      <CrearActividadModal visible={visibleCrear} setVisible={setVisibleCrear}/>
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text="Configuracion" estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} /> 
      </View>
      <FondoAzul/>
      <ScrollView style={[styles.scrollContainer, {top: botonesY}]} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.seccion, {left: '3%'}]}>
          <SliderVolumen value={pruebaVolumen} onValueChange={setPruebaVolumen}/>
        </View>
        <View style={styles.seccion}>
          <BotonTextoIcono text="Seleccionar actividades" icon="check" onPress={abrirModalSeleccionar}/>
          <BotonTextoIcono text="Agregar actividad" icon="add" onPress={() => console.log('Botón AgregarActividad presionado')}/>
        </View>
        <View style={styles.seccion}>
          <SliderSegundos value={inhalar} onValueChange={setInhalar} text={"Tiempo inhalando"}/>
          <SliderSegundos value={exhalar} onValueChange={setExhalar} text={"Tiempo exhalando"}/>
          <SliderSegundos value={mantener} onValueChange={setMantener} text={"Tiempo manteniendo"}/>
        </View>        
        <View style={styles.seccion}>
          <TextArea prompt="Mensaje por defecto" value={pruebaMensaje} onChange={setPruebaMensaje}/>
        </View>        
      </ScrollView>
      {!isKeyboardVisible && (<Navbar tipo="configuration" navigation={navigation}/>)}
      {/*Navbar solo aparece si el teclado no es visible*/}     
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center'
  },
  scrollContainer: {
    position: 'absolute',
    bottom: 100,
    flexDirection: 'column', 
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '1.5%'
  },
  fondo:
  {
    position: 'absolute',
    top: '21%'
  },
  seccion:{
    marginBottom: 25,
    width: '100%',
    alignItems: 'center'
  }
});

export default ConfiguracionScreen;

