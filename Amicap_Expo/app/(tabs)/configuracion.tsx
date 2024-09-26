import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import Navbar from '../../components/Navbar';
import FondoAzul from '@/components/FondoAzul';
import Texto from '@/components/Texto';
import { Colores } from '../../constants/Colors';
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
      <View style={[styles.titleContainer, { marginTop: yTexto }]}>
        <Texto text="Configuracion" estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} /> 
      </View>
      <FondoAzul/>
      <ScrollView style={[styles.scrollContainer, {top: botonesY}]} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.seccion, {left: '3%'}]}>
          <SliderVolumen value={pruebaVolumen} onValueChange={setPruebaVolumen}/>
        </View>
        <View style={styles.seccion}>
          <BotonTextoIcono text="Seleccionar actividades" icon="check" onPress={() => console.log('Botón Actividades presionado')}/>
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
      <Navbar tipo="configuration" navigation={navigation}/>
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
    bottom: 80,
    flexDirection: 'column', 
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'flex-start',
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

