import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import Boton from '@/components/Boton';

interface Props {
  navigation: any;
}

const InicioScreen: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 10;
    const gifAmi = require('./../../assets/images/ami-saludando.gif');

  return (
    <View style={styles.background}>
        <Texto text="Hola, soy Ami!" estilo="tituloBlanco" style={{fontSize: tamanoFuente}}/>
        <Texto text="¿Qué necesitas?" estilo="tituloBlanco" style={{fontSize: tamanoFuente}}/>
        <Image source={gifAmi} style={styles.ami} resizeMode='contain'/>
        <View style={styles.orangeBttnContainer}>
            <Boton 
                text="Ayuda" 
                textStyle='textoTurquesa' 
                containerColor='naranja' 
                fullWidth={true}
                onPress={() => navigation.navigate('Ayuda')}/>
        </View>
        <View style={styles.whiteBttnsContainer}>
            <Boton 
                text="Iniciar sesión" 
                textStyle='textoTurquesa' 
                containerColor='blanco'
                onPress={() => navigation.navigate('InicioSesion')}/>
            <Boton 
                text="Registrarme" 
                textStyle='textoTurquesa' 
                containerColor='blanco'
                onPress={() => navigation.navigate('Registro')}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    background:{
        flex: 1,
        flexDirection: 'column', 
        backgroundColor: Colores.turquesa,
        alignItems: 'center',
        paddingTop: '20%'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    flecha: {
        position: 'absolute',
        left: '5%',
        top: 20
    },
    whiteBttnsContainer:{
        justifyContent: 'center',
        marginHorizontal: 'auto',
        flexDirection: 'row',
        marginTop: '5%'
    },
    orangeBttnContainer: {
        width: '80%',
        alignItems: 'center',
    },
    ami: {
        width: '90%',
        height: '40%',
        marginTop: '10%',
        marginBottom: '12%',
        left: '-6.5%'
    }
});

export default InicioScreen;