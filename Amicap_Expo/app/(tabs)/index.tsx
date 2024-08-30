import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import AyudaScreen from './ayuda';
import RespiracionScreen from './respiracion';
import ActividadScreen from './actividad';
import infoGeneralScreen from './infoGeneral';
import InicioScreen from './inicio';
import ConfiguracionScreen from './configuracion';
import RegistroScreen from './registro';
import InicioSesionScreen from './inicioSesion';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" 
          component={InicioScreen} 
          options={{ headerShown: false }} />
          <Stack.Screen name="InicioSesion" component={InicioSesionScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Registro" 
          component={RegistroScreen} 
          options={{ headerShown: false }} />
          <Stack.Screen name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} />
          <Stack.Screen name="Ayuda" 
          component={AyudaScreen} 
          options={{ headerShown: false }} />
          <Stack.Screen name="Respiracion" 
          component={RespiracionScreen}
          options={{ headerShown: false }} />
          <Stack.Screen name="Actividad" 
          component={ActividadScreen} 
          options={{ headerShown: false }} />
          <Stack.Screen name="InfoGeneral" 
          component={infoGeneralScreen} 
          options={{ headerShown: false }} />
          <Stack.Screen name="Configuracion" 
          component={ConfiguracionScreen} 
          options={{ headerShown: false }} />
        </Stack.Navigator>
  );
};

export default App;
