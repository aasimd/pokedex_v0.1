import { createContext, useReducer } from "react";
import { pokemonApi } from "../apiUrl";
import { reducerFunction } from "../Reducer/reducerFunction";

export const PokemonContext = createContext();
const initialState = {
  isLoading: true,
  currentUrl: pokemonApi,
  nextUrl: null,
  prevUrl: null,
  pokemonData: [],
  pokemonAllData: [],
  searchInput: ""
};
export const PokemonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const filteredArray =
    state?.searchInput.length > 0 &&
    [...state?.pokemonAllData]?.filter((pokemon) =>
      pokemon.name.includes(state?.searchInput)
    );
  return (
    <PokemonContext.Provider value={{ state, dispatch, filteredArray }}>
      {children}
    </PokemonContext.Provider>
  );
};
