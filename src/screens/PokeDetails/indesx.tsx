import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {asyncLoadPokemon} from '../../store/Pokemon.store';
import {
  Container,
  InfoBox,
  LocationBtn,
  MidConatiner,
  PokeBox,
  PokeData,
  PokeInfo,
  SecondTitle,
} from './styles';

export function PokeDetails({route, navigation}) {
  const url = route.params.url;
  /* console.log(url); */
  const dispatch = useDispatch();

  const {pokemon, loading} = useSelector((state: any) => state.pokemons);

  const [poke, setPoke]: any = useState();
  const [image, setImage]: any = useState();

  useEffect(() => {
    if (pokemon) {
      setPoke(pokemon.payload);
      setImage(pokemon.payload.sprites?.front_default);
    }
  }, [pokemon]);

  useEffect(() => {
    dispatch<any>(asyncLoadPokemon(url));
  }, [dispatch, url]);

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/pokedex.png')}
        resizeMode="cover">
        {loading ? (
          <ActivityIndicator
            style={{margin: 'auto', marginTop: '80%'}}
            size="large"
            color="#28ca31"
          />
        ) : (
          <>
            <MidConatiner>
              <PokeInfo>
                <PokeData>
                  <Text style={styles.pokeText}>
                    {poke && poke.stats[0]?.stat.name} :
                    {poke && poke.stats[0]?.base_stat}
                  </Text>
                  <Text style={styles.pokeText}>
                    {poke && poke.stats[1].stat.name} :
                    {poke && poke.stats[1].base_stat}
                  </Text>
                  <Text style={styles.pokeText}>
                    {poke && poke.stats[2].stat.name} :
                    {poke && poke.stats[2].base_stat}
                  </Text>
                  <Text style={styles.pokeText}>
                    {poke && poke.stats[3].stat.name} :
                    {poke && poke.stats[3].base_stat}
                  </Text>
                  <Text style={styles.pokeText}>
                    {poke && poke.stats[4].stat.name} :
                    {poke && poke.stats[4].base_stat}
                  </Text>
                  <Text style={styles.pokeText}>
                    {poke && poke.stats[5].stat.name} :
                    {poke && poke.stats[5].base_stat}
                  </Text>
                  <LocationBtn
                    onPress={() =>
                      navigation.navigate('EncounterRoutes', {name: poke?.name})
                    }>
                    Localizar
                  </LocationBtn>
                </PokeData>
                <PokeBox>
                  <Image
                    style={{width: 150, height: 150}}
                    source={{
                      uri: `${image}`,
                    }}
                  />
                </PokeBox>
              </PokeInfo>
              <SecondTitle style={styles.secondTitle}>
                #{poke && poke.id} - {poke && poke.name}
              </SecondTitle>
              <InfoBox>
                <Text style={styles.infoText}>
                  Tipo: {poke && poke.types[0].type.name}/
                  {poke && poke.types[1]?.type.name}
                </Text>
                <Text style={styles.infoText}>
                  Altura: {poke && poke.height}
                </Text>
                <Text style={styles.infoText}>Peso: {poke && poke.weight}</Text>
              </InfoBox>
            </MidConatiner>
          </>
        )}
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  pokeText: {
    fontFamily: 'PressStart2P-Regular',
    fontSize: 9,
    marginBottom: 10,
    marginTop: 5,
  },
  infoText: {
    fontFamily: 'PressStart2P-Regular',
    fontSize: 8,
    margin: 'auto',
    textAlign: 'center',
  },
  secondTitle: {
    fontFamily: 'PressStart2P-Regular',
  },
});
