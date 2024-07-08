import React, { FC } from 'react';
import { View } from 'react-native';
import Texto from './Texto';
import Icon from './Icon';

interface Props {
  nombre: string;
}

//icono + nombre
//ver en donde pasamos el valor de id
//falta línea de abajo
const Contacto: FC<Props> = ({ nombre}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icon name={'contact'} />
      <Texto text={nombre} />
    </View>
  );
};

export default Contacto;
