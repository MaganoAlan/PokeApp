import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {asyncLoadPokemonByName} from '../../store/Pokemon.store';

import {Container, ResContainer, Sear, SearchText, Sprite} from './styles';

export function SearchPkmn() {
  const {pokemon, loading} = useSelector((state: any) => state.pokemons);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [pkm, setPkm] = useState({});

  function handleSearch() {
    try {
      dispatch<any>(asyncLoadPokemonByName(search.toLowerCase()));
    } catch (err) {
      /* console.log(err); */
      return console.warn('Nome ou número não encontrado!');
    }
    setPkm(pokemon?.payload);
  }

  useEffect(() => {
    console.log(pokemon?.payload);
    console.log(pkm);
  }, [pokemon, loading, pkm]);
  console.log(search);

  return (
    <Container
      style={{
        backgroundColor: '#f7322bcc',
        width: '100%',
        height: '100%',
        padding: 20,
      }}>
      <Image
        style={{margin: 'auto', width: '100%', height: 150}}
        source={require('../../assets/pokelogo.png')}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#c2c" />
      ) : (
        <>
          <Sear
            value={search}
            onChangeText={setSearch}
            placeholder="Digite o nome ou n°"
          />
          <Button
            title="Pesquisar"
            buttonStyle={{
              marginTop: 5,
              marginBottom: 10,
            }}
            titleStyle={{
              fontFamily: 'PressStart2P-Regular',
              textAlign: 'center',
            }}
            /*  icon={
              <Icon
                tvParallaxProperties
                name="search"
                size={30}
                style={{marginRight: 5}}
                color={'#fdfdfd'}
              />
            } */
            onPress={handleSearch}
          />
          <ResContainer>
            {pokemon && pokemon.payload.name ? (
              <>
                <SearchText>N°: #{pokemon.payload.id}</SearchText>
                <SearchText>Nome: {pokemon.payload.name}</SearchText>
                <SearchText>
                  Tipo: {pokemon.payload.types[0].type.name}/
                  {pokemon.payload.types[1]?.type.name}
                </SearchText>
                <SearchText>Peso: {pokemon.payload.weight / 10}Kg</SearchText>
                <SearchText>Altura: {pokemon.payload.height / 10}m</SearchText>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                    fontFamily: 'PressStart2P-Regular',
                  }}>
                  Comum / Shiny
                </Text>
                <Sprite>
                  <Image
                    style={{margin: 0, width: 150, height: 150}}
                    source={{
                      uri: `${pokemon.payload.sprites.front_default}`,
                    }}
                  />
                  <Image
                    style={{margin: 0, width: 150, height: 150}}
                    source={{
                      uri: `${pokemon.payload.sprites.front_shiny}`,
                    }}
                  />
                </Sprite>
              </>
            ) : (
              <Text>nehum resultado</Text>
            )}
          </ResContainer>
        </>
      )}
    </Container>
  );
}
