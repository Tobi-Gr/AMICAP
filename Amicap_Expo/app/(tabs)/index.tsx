import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import AyudaScreen from './ayuda';
import RespiracionScreen from './respiracion';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} />
        <Stack.Screen name="Ayuda" 
        component={AyudaScreen} 
        options={{ headerShown: false }} />
        <Stack.Screen name="Respiracion" 
        component={RespiracionScreen} 
        options={{ headerShown: false }} />
      </Stack.Navigator>
  );
};

export default App;
