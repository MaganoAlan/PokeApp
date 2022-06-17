import {createSlice} from '@reduxjs/toolkit';
import api from '../services/api/api';
import {AppThunk} from './Store';

const baseUrl = 'https://pokeapi.co/api/v2';

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: null || <any>[],
    pokemon: null,
    encounters: null,
    loading: false,
    error: null,
    saved: false,
  },
  reducers: {
    loadPokemons(state) {
      state.loading = true;
    },
    loadPokemonsSuccess(state, response: any) {
      state.loading = false;
      state.pokemons = response;
    },
    loadPokemon(state) {
      state.loading = true;
    },
    loadPokemonSuccess(state, response: any) {
      state.pokemon = response;
      state.loading = false;
    },
    loadPokemonByName(state) {
      state.loading = true;
    },
    loadPokemonByNameSuccess(state, response: any) {
      state.pokemon = response;
      state.loading = false;
    },
    loadPokemonByNameError(state, error: any) {
      state.loading = false;
      state.pokemon = error;
    },
    loadNextPage(state) {
      state.loading = true;
    },
    loadNextPageSuccess(state, response: any) {
      state.loading = false;
      state.pokemons = response;
    },
    loadEncounters(state) {
      state.loading = true;
    },
    loadEncountersSuccess(state, response: any) {
      state.loading = false;
      state.encounters = response.payload;
    },
    loadEncountersError(state, error: any) {
      state.loading = false;
      state.error = error;
    },
  },
});

export const {
  loadPokemons,
  loadPokemonsSuccess,
  loadPokemon,
  loadPokemonSuccess,
  loadNextPage,
  loadNextPageSuccess,
  loadPokemonByName,
  loadPokemonByNameSuccess,
  loadPokemonByNameError,
  loadEncounters,
  loadEncountersSuccess,
  loadEncountersError,
} = pokemons.actions;
export default pokemons.reducer;

export function asyncLoadPokemons(limit, offset = 0): AppThunk {
  return async function (dispatch: any) {
    dispatch(loadPokemons());
    const pokes = await api.get(
      `${baseUrl}/pokemon?limit=${limit}&offset=${offset}/`,
    );

    return dispatch(loadPokemonsSuccess(pokes.data));
  };
}

export function asyncLoadPokemon(url: any): AppThunk {
  return async function (dispatch: any) {
    dispatch(loadPokemon());
    const poke = await api.get(url);

    return dispatch(loadPokemonSuccess(poke.data));
  };
}

export function asyncLoadNextPage(url: any): AppThunk {
  return async function (dispatch: any) {
    dispatch(loadNextPage());
    const pokes = await api.get(url);

    return dispatch(loadNextPageSuccess(pokes.data));
  };
}

export function asyncLoadPokemonByName(pkmn: any): AppThunk {
  return async function (dispatch: any) {
    dispatch(loadPokemonByName());
    try {
      const poke = await api.get(`${baseUrl}/pokemon/${pkmn}`);
      return dispatch(loadPokemonByNameSuccess(poke.data));
    } catch (error) {
      return dispatch(loadPokemonByNameError('nenhum resultado'));
    }
  };
}

export function asyncLoadEncounters(pkmn: any): AppThunk {
  return async function (dispatch: any) {
    dispatch(loadEncounters());
    try {
      const poke = await api.get(`${baseUrl}/pokemon/${pkmn}/encounters`);
      return dispatch(loadEncountersSuccess(poke.data));
    } catch (error) {
      return dispatch(loadEncountersError('nenhum resultado'));
    }
  };
}
