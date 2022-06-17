import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {asyncLoadEncounters} from '../../store/Pokemon.store';
import {Container, NotText, PokeText} from './styles';

export function EncounterRoutes({route}) {
  const name = route.params.name;
  const {loading, encounters} = useSelector((state: any) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(asyncLoadEncounters(name));
  }, [name, dispatch]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator
          style={{margin: 'auto', top: '50%'}}
          size="large"
          color="red"
        />
      ) : (
        <>
          {encounters?.length > 0 ? (
            <FlatList
              data={encounters}
              keyExtractor={item => item.location_area.name}
              renderItem={({item}) => {
                return (
                  <>
                    <PokeText>{item.location_area.name}</PokeText>
                    <Text />
                  </>
                );
              }}
            />
          ) : (
            <NotText>Não é possível encontrar {name} no mapa!</NotText>
          )}
        </>
      )}
    </Container>
  );
}
