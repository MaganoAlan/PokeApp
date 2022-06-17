import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {PokeDetails} from '../screens/PokeDetails/indesx';
import {Button, Icon} from 'react-native-elements';
import {SearchPkmn} from '../screens/SearchPkmn';
import {EncounterRoutes} from '../screens/EncounterRoutes';
import {PokemonsList} from '../screens/PokemonsList';
import {MoveTypes} from '../screens/MoveTypes';

export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          title: 'PokéDex',
          headerTitleStyle: {fontFamily: 'PressStart2P-Regular'},
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}
        component={Home}
      />
      <Stack.Screen
        name="Details"
        options={{
          title: 'Info',
          headerTitleStyle: {fontFamily: 'PressStart2P-Regular'},
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}
        component={PokeDetails}
      />
      <Stack.Screen
        name="SearchPkmn"
        options={{
          title: 'Pesquisa',
          headerTitleStyle: {fontFamily: 'PressStart2P-Regular'},
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}
        component={SearchPkmn}
      />
      <Stack.Screen
        name="EncounterRoutes"
        options={{
          title: 'Localização',
          headerTitleStyle: {fontFamily: 'PressStart2P-Regular'},
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}
        component={EncounterRoutes}
      />
      <Stack.Screen
        name="PokemonsList"
        options={({navigation}) => {
          return {
            title: 'Pokémons',
            headerTitleStyle: {fontFamily: 'PressStart2P-Regular'},
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('SearchPkmn')}
                type="clear"
                icon={<Icon tvParallaxProperties name="search" size={25} />}
              />
            ),
          };
        }}
        component={PokemonsList}
      />
      <Stack.Screen
        name="MoveTypes"
        options={{
          title: 'Ataques',
          headerTitleStyle: {fontFamily: 'PressStart2P-Regular'},
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}
        component={MoveTypes}
      />
    </Stack.Navigator>
  );
}
