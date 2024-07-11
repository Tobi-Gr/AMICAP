//hay q arreglarlo
import React, {FC, useState, useEffect} from 'react';
import { View, Button, Text} from 'react-native';
import Communications from 'react-native-communications';
import Contacto from './Contacto';

interface Contact{
  nombre:string;
  numero:string;
}
interface Props{
  contactos: Contact[];
}

<<<<<<< HEAD
const ListaContactos: FC<Props> = ({contactos}) => {
  const urlApi = "http://localhost:3000/api/contacto/1";
=======
const ListaContactos: FC<Props> = () => {
  const urlApi = "http://localhost:3000/api/contacto/:id_usuario=1";
>>>>>>> f8ea2935251b343c2f858fe557875eb789df92e6
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
    if(selectedContact)
    {
      Communications.phonecall(selectedContact.numero, true);
      //El segundo parámetro (true) indica que la llamada debe iniciarse inmediatamente (no mostrar el diálogo de confirmación).
      //Si lo cambias a false, se mostrará un diálogo de confirmación antes de iniciar la llamada.
    }
  };

  const closeModal = () => {
    setSelectedContact(null);
  };

  return (
    <View>
      <Text> Contactos </Text>
      <View>
        {fetchedContactos.map((contact, index) => (
          <Contacto key={index} contact={contact} onClick={() => handleContactClick(contact)}/>
        ))}
      </View>
      {selectedContact && <Button title="Llamar" onPress={handlePhoneCall} />}
    </View>
  );
};

// { <UserDetailsModal  onClose={closeModal} />}
//       <div className="users-list-container">
//           <h1>Listado: </h1>
//           <div className="user-cards-container">
//               {users.map((user, index) => (
//                   <UserCard key={index} user={user} onClick={() => handleUserClick(user)} />
//               ))}
//           </div>
//       </div>

export default ListaContactos;