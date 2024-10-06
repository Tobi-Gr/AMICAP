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
    

    return (
        <View style={styles.email}>
            <Texto text={"Email:"} estilo={'textoNegro'} style={{fontSize: tamanoFuente}}/>
        <View style={styles.coso}>  
            <Texto text={email} estilo={'textoNegro'} style={{fontSize: tamanoFuente}}/>
        </View>     
         </View> 
    );
    }
    
  const styles = StyleSheet.create({
  email: {
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
  coso: {
    position: 'absolute',
    right: '5%',
    top: 15
  }
  });
  export default RecEmail;