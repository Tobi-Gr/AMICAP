import React, { FC } from 'react';
import {View, TouchableOpacity} from 'react-native';
import Texto from './Texto';

interface Contact{
  nombre:string;
  numero:string;
}

interface Props {
  contact: Contact;
  onClick: () => void;
}

//icono + nombre
const Contacto: FC<Props> = ({contact, onClick}) => {
  const {nombre} = contact;
  const handlePress = () =>
  {
    onClick();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Texto text={nombre} />
    </TouchableOpacity>
  );
};

export default Contacto;