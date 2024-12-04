import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { FC, useState, useEffect } from 'react';
import { Colores } from '../../constants/Colors';
import DBDomain from '../../constants/dbDomain';
import Flecha from '@/components/Flecha';
import Boton from '@/components/Boton';
import Texto from '@/components/Texto';
import Ataque from '@/components/Ataque';
import Triangulo from '@/components/icons/Triangulo';
import { useUserContext } from '@/context/UserContext';

interface Attack {
  fecha: Date; 
}

interface Props {
  navigation: any;
}

const RegistroDataScreen: React.FC<Props> = ({navigation }) => {
  const {usuario} = useUserContext();

  const [visible, setVisible] = useState(false);
  const [ataques, setAtaques] = useState<Ataque[]>([]);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const tamanoTitulo = windowWidth / 8;
  const tamanoSubtitulo = windowWidth / 14;
  const tamanoTexto = windowWidth / 21;
  const yTexto = windowHeight / 45;
  const flechaTamano = windowWidth / 10;
  
  useEffect( () =>{
    const fetchAndSetAtaques = async () => {
      const data = await fetchAtaques();
      if (data.length > 0) {
        setAtaques(data);
      }
    };

    fetchAndSetAtaques();
  }, []);

  const fetchAtaques = async () => {
    if(usuario)
    {
      const urlApi = `${DBDomain}/api/ataque/${usuario.id}`;
      try {
        const response = await fetch(urlApi);
        if (!response.ok) {
          throw new Error('Failed to fetch ataques');
        }
        const data = await response.json();
        if (!data) {
          throw new Error('Data failed to response (fetch ataques)');
        }
        console.log("ataques: ", data);
        return data;
      } catch (error) {
        console.log('Hubo un error en el fetchAtaques', error);
      }
    }
  }

  const getDiaSemana = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    const diaSemana = new Date(date).toLocaleDateString('es-ES', options);
    
    return diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
  };
  

  return (
  <View style={styles.container}>
    <View style={styles.flechaContainer}>
      <Flecha
        height={flechaTamano}
        width={flechaTamano}
        navigation={navigation}
        screen={"Perfil"}
        color={Colores.blanco}
      />
    </View>

    {/* Título */}
    <View style={[styles.titleContainer, { marginTop: yTexto }]}>
      <Texto text={"Registros"} estilo="tituloBlanco" style={{ fontSize: tamanoTitulo }} />
    </View>

    {/* Contadores de ataques */}
    <View style={styles.counterContainer}>
      <Ataque ataques={ataques} tipo="mensual" />
      <Ataque ataques={ataques} tipo="semanal" />
    </View>

    {/* Lista de ataques recientes */}
    <View style={styles.ataquesRecientesContainer}>
        <Texto text="Tus últimos ataques" estilo="textoBlanco" style={{fontSize: tamanoSubtitulo}}/>
        {ataques.slice(0, 3).map((ataque, index) => (
          <TouchableOpacity key={index} style={styles.ataqueItem}>
            {/* Formateamos la fecha con día de la semana */}
            <Texto
              text={`${getDiaSemana(ataque.fecha)}, ${new Date(ataque.fecha).toLocaleDateString('es-ES')} ${new Date(ataque.fecha).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`}
              estilo="textoBlanco"
              style={{fontSize: tamanoTexto}}
            />
            <Triangulo color={Colores.blanco}/>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.verMasButton}>
          <Texto text="Ver más" estilo="textoTurquesa" />
        </TouchableOpacity>
      </View>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.turquesa,
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').width / 25,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  flechaContainer: {
    alignSelf: 'flex-start',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  ataquesRecientesContainer: {
    width: '90%',
    marginTop: 20,
  },
  ataqueItem: {
    paddingVertical: 10,
  },
  verMasButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default RegistroDataScreen;
