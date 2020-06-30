import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './home';
import {ItemList} from './itemlist';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Bem vindo ao Cannibal Hamburger!", ...header}}/>
        <Stack.Screen name="ItemList" component={ItemList} options={{title: "Escolha os items:", ...header}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const header = {
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}