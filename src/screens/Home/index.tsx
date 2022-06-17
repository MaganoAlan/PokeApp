import React from 'react';
import {Image} from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppTitle} from '../../components/AppTitle';
import {Buttons, Container, SecondVisor, Visor, VisorText} from './styles';

export function Home({navigation}) {
  return (
    <SafeAreaView>
      <Container>
        <Visor>
          <AppTitle title="Pokémon DATA" />
          <Button
            titleStyle={{color: '#4b4b4b', fontFamily: 'PressStart2P-Regular'}}
            buttonStyle={{
              margin: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#4b4b4b',
            }}
            type="clear"
            title="pokémons"
            onPress={() => navigation.navigate('PokemonsList')}
          />
          <Button
            titleStyle={{color: '#4b4b4b', fontFamily: 'PressStart2P-Regular'}}
            buttonStyle={{
              margin: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#4b4b4b',
            }}
            type="clear"
            title="Tipos de movimentos"
            onPress={() => navigation.navigate('MoveTypes')}
          />
        </Visor>
        <Buttons>
          <Image
            style={{margin: 'auto', width: 100, height: 100}}
            source={require('../../assets/cross.png')}
          />
          <SecondVisor>
            <VisorText>Banco de dados onLine...</VisorText>
          </SecondVisor>
          <Image
            style={{margin: 'auto', width: 100, height: 100}}
            source={require('../../assets/btns.webp')}
          />
        </Buttons>
      </Container>
    </SafeAreaView>
  );
}
