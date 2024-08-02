import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import AyudaScreen from './ayuda';
import RespiracionScreen from './respiracion';
import ActividadScreen from './actividad';
import ContactosModal from '../../components/ContactosModal';

import contactoModal from '@/components/ContactosModal';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} />
        <ContactosModal/>
        <Stack.Screen name="Ayuda" 
        component={AyudaScreen} 
        options={{ headerShown: false }} />
        <Stack.Screen name="Respiracion" 
        component={RespiracionScreen}
        options={{ headerShown: false }} />
        <Stack.Screen name="Actividad" 
        component={ActividadScreen} 
        options={{ headerShown: false }} />
      </Stack.Navigator>
  );
};

export default App;
