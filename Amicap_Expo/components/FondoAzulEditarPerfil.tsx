import {View, StyleSheet, Dimensions} from 'react-native';
 import {Colores} from './../constants/Colors';
 const FondoAzulEditarPerfil  = () => {
     const windowWidth = Dimensions.get('window').width;
     const windowHeight = Dimensions.get('window').height;
      const rectangleHeight = windowHeight * 0.9;
     return <View style={[styles.container, { width: windowWidth }]}>
                 <View style={[styles.rectangle,{ height: rectangleHeight } ]} />
             </View>;
 };
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'flex-end', 
         alignItems: 'center'
     },
     rectangle: {
         width: '100%', 
         backgroundColor: Colores.turquesa,
         borderTopLeftRadius: 80,
         borderTopRightRadius: 80,
     },
 });
 export default FondoAzulEditarPerfil;