import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {AppTitle} from '../../components/AppTitle';
import {HomeCards} from '../../components/HomeCards';
import {asyncLoadPokemons} from '../../store/Pokemon.store';
import {Buttons, Container} from './styles';
/* import Icon from 'react-native-vector-icons/FontAwesome'; */

export function PokemonsList({navigation}) {
  const dispatch = useDispatch();
  const {pokemons, loading} = useSelector((state: any) => state.pokemons);
  const [pokes, setPokes]: any = useState([]);
  const [limit, setLimit] = useState(40);
  /* const [offset, setOffset] = useState(0); */

  useEffect(() => {
    dispatch<any>(asyncLoadPokemons(limit));
  }, [dispatch, limit]);

  useEffect(() => {
    setPokes(pokemons?.payload?.results);
  }, [pokemons]);

  function morePokes() {
    setLimit(limit + 20);
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'lightgreen',
        height: '100%',
      }}>
      <Container>
        <View>
          <Buttons />

          <AppTitle title="Selecione o pokémon" />

          {loading ? (
            <ActivityIndicator
              style={{margin: 'auto', marginTop: '40%', marginBottom: '40%'}}
              size="large"
              color="#28ca31"
            />
          ) : (
            <>
              <FlatList
                style={styles.flat}
                data={pokes}
                keyExtractor={item => item.name}
                numColumns={2}
                onEndReached={morePokes}
                onEndReachedThreshold={0.01}
                renderItem={({item}) => {
                  return (
                    <HomeCards
                      onPress={() =>
                        navigation.navigate('Details', {url: item.url})
                      }
                      name={item.name}
                    />
                  );
                }}
              />
            </>
          )}
        </View>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flat: {
    marginBottom: 1,
    height: '100%',
  },
});
