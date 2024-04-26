import { pokeAPI } from "./API";

export const getPokemonData = async () => {
  try {
    const getPokemonDataResponse = await pokeAPI.listPokemons(0, 1302);

    return getPokemonDataResponse;
  } catch (error) {
    console.error("Erro ao buscar dados");
    throw error;
  }
};

export const getPokemonTypes = async () => {
  try {
    const getPokemonTypesResponse = await pokeAPI.listTypes(0, 18);

    return getPokemonTypesResponse;
  } catch (error) {
    console.error("Erro ao buscar dados");
    throw error;
  }
};
