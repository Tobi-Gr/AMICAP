import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {UserProvider, useUserContext} from '@/context/UserContext'
import HomeScreen from './home';
import AyudaScreen from './ayuda';
import RespiracionScreen from './respiracion';
import ActividadScreen from './actividad';
import infoGeneralScreen from './infoGeneral';
import InicioScreen from './inicio';
import ConfiguracionScreen from './configuracion';
import RegistroScreen from './registro';
import InicioSesionScreen from './inicioSesion';
import PerfilScreen from './perfil';
import EditarPerfilScreen from './editarPerfil';
import ContactosConfigScreen from './contactosConfig';
import RegistroDataScreen from './registroData';
import ListaAtaquesScreen from './listaAtaques';
import DetalleAtaqueScreen from './detalleAtaque';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
        <Stack.Navigator 
          initialRouteName="Inicio"
          screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="Inicio" 
          component={InicioScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="InicioSesion" component={InicioSesionScreen}/>
        <Stack.Screen name="Registro" component={RegistroScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Ayuda" component={AyudaScreen}/>
        <Stack.Screen name="Respiracion" component={RespiracionScreen}/>
        <Stack.Screen name="Actividad" component={ActividadScreen}/>
        <Stack.Screen name="InfoGeneral" component={infoGeneralScreen}/>
        <Stack.Screen name="Configuracion" component={ConfiguracionScreen}/>
        <Stack.Screen name="Perfil" component={PerfilScreen}/>
        <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen}/>
        <Stack.Screen name="ContactosConfig" component={ContactosConfigScreen}/>
        <Stack.Screen name="RegistroData" component={RegistroDataScreen}/>
        <Stack.Screen name="ListaAtaques" component={ListaAtaquesScreen}/>
        <Stack.Screen name="DetalleAtaque" component={DetalleAtaqueScreen}/>
      </Stack.Navigator>
    </UserProvider>
  );
};

export default App;
