import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from './telas/App.js';
import tela1 from './telas/tela1';

//screenOptions={{headerShown: false}}  tira o cabeçaçho com o titulo da pagina
const AppStack = createNativeStackNavigator();
function Rotas(){
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='App' screenOptions={{headerShown: false}}>
        <AppStack.Screen name='App' component={App}/>
        <AppStack.Screen name='tela1' component={tela1}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Rotas;