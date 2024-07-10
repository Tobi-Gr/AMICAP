//hay q arreglarlo
import React, {FC} from 'react';
import { View, Button, Text} from 'react-native';
import Communications from 'react-native-communications';
import Contacto from './Contacto';

interface Contacto{
  nombre:string;
  numero:string;
}
interface Props{
  contactos: Contacto[];
}

const ListaContactos: FC<Props> = ({contactos}) => {
  const handlePhoneCall = () => {
    //Número de teléfono al que quieres llamar
    const phoneNumber = '+5491125119535';
    //Llamar a la función para realizar la llamada
    Communications.phonecall(phoneNumber, true);
    //El segundo parámetro (true) indica que la llamada debe iniciarse inmediatamente (no mostrar el diálogo de confirmación).
    //Si lo cambias a false, se mostrará un diálogo de confirmación antes de iniciar la llamada.
    // {contactos.map((contacto: Contacto) => (
    //   <Contacto nombre={contacto.nombre}/>
    // ))}
  };
  return (
    <View>
      <Text> Administra tus citas </Text>
      <Button title="Llamar" onPress={handlePhoneCall} />
    </View>
  );
};
export default ListaContactos;