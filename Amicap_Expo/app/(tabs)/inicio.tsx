import {StyleSheet, View, Dimensions} from 'react-native';
import {Colores} from '../../constants/Colors';
import Texto from '@/components/Texto';
import BotonTexto from '@/components/BotonTexto';

interface Props {
  navigation: any;
}

const InicioScreen: React.FC<Props> = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const tamanoFuente = windowWidth / 10;

    {/*finjamos que el view vacío es ami saludando*/} 
  return (
    <View style={styles.background}>
        <Texto text="Hola, soy Ami!" estilo="tituloBlanco" style={{fontSize: tamanoFuente}}/>
        <Texto text="¿Qué necesitas?" estilo="tituloBlanco" style={{fontSize: tamanoFuente}}/>
        <View style={styles.ami}></View>
        <View style={styles.orangeBttnContainer}>
            <BotonTexto 
                text="Ayuda" 
                textStyle='textoTurquesa' 
                containerColor='naranja' 
                fullWidth={true}
                onPress={() => navigation.navigate('Ayuda')}/>
        </View>
        <View style={styles.whiteBttnsContainer}>
            <BotonTexto 
                text="Iniciar sesión" 
                textStyle='textoTurquesa' 
                containerColor='blanco'
                onPress={() => navigation.navigate('InicioSesion')}/>
            <BotonTexto 
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
        backgroundColor: Colores.gris,
        width: '50%',
        height: '40%',
        marginTop: '10%',
        marginBottom: '12%',
    }
});

export default InicioScreen;