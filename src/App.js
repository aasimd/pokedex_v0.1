import "./styles.css";
import { allPokemonApi, pokemonApi } from "./apiUrl";
import { useContext, useEffect } from "react";
import { PokemonContext } from "./Context/PokemonContext";
import {
  getAllPokemonData,
  getPokemonData
} from "./utilFunctions/utilFunctions";
import { PokemonCard } from "./PokemonCard";

export default function App() {
  const { state, dispatch, filteredArray } = useContext(PokemonContext);
  const nextClickHandler = () => {
    dispatch({ type: "SET_CURRENT_URL", payload: state?.nextUrl });
    dispatch({ type: "SET_PREV_URL", payload: state?.currentUrl });
  };
  const prevClickHandler = () => {
    dispatch({ type: "SET_CURRENT_URL", payload: state?.prevUrl });
    dispatch({ type: "SET_NEXT_URL", payload: state?.currentUrl });
  };

  useEffect(() => {
    getPokemonData(state?.currentUrl, dispatch);
    getAllPokemonData(allPokemonApi, dispatch);
  }, [state?.currentUrl]);

  if (state?.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <h1>My Pokedex</h1>
      <input
        type="search"
        placeholder="Search Pokemon"
        value={state?.searchInput}
        onChange={(event) =>
          dispatch({ type: "SET_SEARCH_INPUT", payload: event.target.value })
        }
      />
      {state?.searchInput.length > 0 ? (
        <ul>
          {filteredArray?.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      ) : (
        <ul>
          {state?.pokemonData?.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      )}

      <button
        disabled={state?.prevUrl === null ? true : false}
        onClick={() => {
          prevClickHandler();
        }}
      >
        Previous
      </button>
      <button
        disabled={state?.nextUrl === null ? true : false}
        onClick={() => {
          nextClickHandler();
        }}
      >
        Next
      </button>
    </div>
  );
}
