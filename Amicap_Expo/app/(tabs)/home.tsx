 import { StyleSheet, View, Dimensions} from 'react-native';
 import Navbar from '../../components/Navbar';
 import BotonAyuda from '../../components/BotonAyuda';
 import FondoAzul from '@/components/FondoAzul';
 import Texto from '@/components/Texto';
 import { Colores } from '../../constants/Colors';
 import BotonContacto from '@/components/BotonContacto';
 import BotonInfo from '@/components/BotonInfo';

 interface Props {
   navigation: any;
 }

//temporal para pruebas
import Communications from 'react-native-communications';
import { useEffect, useState } from 'react';
 interface Contact{
  nombre:string;
  numero:string;
}
//termina acá

 const HomeScreen: React.FC<Props> = ({ navigation }) => {  
   const windowWidth = Dimensions.get('window').width;
   const windowHeight = Dimensions.get('window').height;
   const tamanoFuente = windowWidth / 10;
   const yTexto = windowHeight / 10;
   const nombre = "nombre"; //debería pasarnoslo el back
   const saludo = "Hola, " + nombre;
   const yAyuda = windowHeight * 0.45;
   const xAyuda = windowWidth / 3.5;
   const yContacto = windowHeight / 3;
   const xContacto = windowWidth / 5.8;
   const yInfo = windowHeight / 2.07;
   const xInfo = windowWidth / 12.8;


  //TEMPORAL PARA PRUEBAS (Contactos)
  const contact = {"nombre": "Luca", "numero": "+5491125119535"};
  const contact2 = {"nombre": "Marciano", "numero": "1"}
  const urlApi = "http://localhost:3000/api/contacto/:id_usuario=1";
  const [fetchedContactos, setFetchedContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
      fetch(urlApi)
          .then(response => response.json())
          .then(data => {
            // Mapear los resultados para adaptarlos al formato de Contacto que se espera
            const mappedContacts: Contact[] = data.results.map((result: any) => ({
              nombre: result.nombre,
              numero: result.number,
          }));
          setFetchedContacts(mappedContacts);})
          .catch(error => console.log('Hubo un error ' + error));
  }, []);

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handlePhoneCall = () => {
    if(true)
    {
      Communications.phonecall(contact.numero, true);
      //El segundo parámetro (true) indica que la llamada debe iniciarse inmediatamente (no mostrar el diálogo de confirmación).
      //Si lo cambias a false, se mostrará un diálogo de confirmación antes de iniciar la llamada.
    }
  };

  const closeModal = () => {
    setSelectedContact(null);
  };
  //TERMINA LO TEMPORAL

  
  //<BotonContacto contactos={[contact, contact2]} key={0} onPress={() => handlePhoneCall()}/>
   return (
     <View style={{ flex: 1, backgroundColor: Colores.blanco }}>
       <View style={[styles.titleContainer, { marginTop: yTexto }]}>
         <Texto text={saludo} estilo="tituloTurquesa" style={{ fontSize: tamanoFuente }} /> 
       </View>
       <View style={{ position: 'relative' }}>
         <FondoAzul />
       </View>
       <View style={{ marginTop: yContacto, marginLeft: xContacto, position: 'absolute' }} >
       </View> 
       <View style={{ marginTop: yAyuda, marginLeft: xAyuda, position: 'absolute' }}>
         <BotonAyuda navigation={navigation} /> 
       </View>  
       <View style={{ marginTop: yInfo, marginLeft: xInfo, position: 'absolute' }}>
         <BotonInfo />
       </View>  
       <Navbar tipo="home" />
     </View>
   );
 };
 const styles = StyleSheet.create({
   titleContainer: {
     flex: 1,
     alignItems: 'center',
   }
 });
 export default HomeScreen;
