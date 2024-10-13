import React, { FC } from "react";
import { TouchableOpacity, Text, TextStyle, ViewStyle, StyleSheet, View, Dimensions} from 'react-native';
import { Colores } from '../constants/Colors';
import Texto from "./Texto";

interface Props{
  email:string,
}

const RecEmail: FC<Props> = ({email}) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth * 0.05;
    
    //Hay que ver cómo hacemos para que el email quede bien si es muy largo!!!!
    return (
        <View style={styles.container}>
          <Texto text={"Email:"} estilo={'textoTurquesa'} style={{fontSize: tamanoFuente}}/>
          <View style={styles.email}>  
              <Texto text={email} estilo={'textoNegro'} style={{fontSize: tamanoFuente}}/>
          </View>     
        </View> 
    );
    }
    
  const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 16,
    padding: "3%",
    borderRadius: 12,
    width: '88%',
    backgroundColor: Colores.gris,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%',
    height:50,
  },
  email: {
    position: 'absolute',
    right: '5%',
  }
  });
  export default RecEmail;