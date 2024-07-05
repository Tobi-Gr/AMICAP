import {View, StyleSheet, Dimensions} from 'react-native';
import {Colores} from './../constants/Colors';

const Piso = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    //const pisoWidth = windowWidth * 1.2;
    const pisoHeight = windowHeight / 3;
    return <View style={[styles.container, { width: windowWidth }]}>
                <View style={[styles.ovalo, {width: windowWidth/2, height:pisoHeight}]} />
            </View>;
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
    },
    ovalo: {
        borderRadius: 100,
        backgroundColor: Colores.blanco,
        transform: [{ scaleX: 3 }],
      },
});

export default Piso;
