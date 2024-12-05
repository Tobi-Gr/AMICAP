import {StyleSheet, View, Dimensions} from 'react-native';
import { useEffect, useState } from 'react';
import {Colores} from '../../constants/Colors';
import DBDomain from '../../constants/dbDomain';
import Flecha from '@/components/Flecha';
import Boton from '@/components/Boton';
import Respirar from '@/components/Respirar';
import Texto from '@/components/Texto';
import { useUserContext } from '@/context/UserContext';

interface Props {
  navigation: any;
}

const RespiracionScreen: React.FC<Props> = ({ navigation }) => {  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const tamanoFuente = windowWidth / 15;
  const flechaTamano = windowWidth / 10;
  const margenSuperiorCuadrado = windowHeight / 6;
  const margenSuperiorBoton = margenSuperiorCuadrado / 3;

  const {usuario} = useUserContext();
  const [inhalar, setInhalar] = useState<number>(0);
  const [exhalar, setExhalar] = useState<number>(0);
  const [mantener, setMantener] = useState<number>(0);
  
  const fetchRespiracion = async () => {
    if(usuario)
    {
      const urlApi = `${DBDomain}/api/respiracion/${usuario.id}`;
      try {
        const response = await fetch(urlApi);
        if (!response.ok) {
          throw new Error('Failed to fetch respiracion');
        }
        const data = await response.json();
        if (!data) {
          throw new Error('data failed to response');
        }
        return data;
      } catch (error) {
        console.log('Hubo un error en el fetchRespiracion ', error);
      }
    }
  }

  function handleOnPressInicio(){
    navigation.navigate('Home');
  }
 
  useEffect(() => {
    const fetchAndSetRespiracion = async () => {
      const data = await fetchRespiracion();
      if (data != null) {
        setInhalar(Number(data.tinhalando));
        setExhalar(Number(data.texhalando));
        setMantener(Number(data.tmanteniendo));
      }
    };

    fetchAndSetRespiracion();
    console.log('respiracion: ', inhalar, exhalar, mantener)
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colores.turquesa }} >
      {inhalar === 0 && exhalar === 0 && mantener === 0 ? (
        <View>
          <Texto text="Cargando..." estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} /> 
        </View>
      ) : (
        <View>
          <Flecha height={flechaTamano} width={flechaTamano} navigation={navigation} screen={"Ayuda"} color={Colores.blanco}/>
          <View style={{height: margenSuperiorCuadrado}} ></View>
          <Respirar inhalar={inhalar} exhalar={exhalar} mantener={mantener}/>
          <View style={{height: margenSuperiorBoton}} ></View>
          <Boton text={"Volver a inicio"} onPress={handleOnPressInicio} tamanoFuenteProps={tamanoFuente} containerColor={'blanco'} textStyle={'textoTurquesa'}/>
        </View>
      )}
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