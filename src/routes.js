import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './home';

const Stack = createStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Bem vindo ao Cannibal Hamburger!", ...header}}/>
        {/* <Stack.Screen name="Hamburguer" component={DetailsScreen} />
        <Stack.Screen name="Sushi" component={DetailsScreen} />
        <Stack.Screen name="Bebidas" component={DetailsScreen} /> */}
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