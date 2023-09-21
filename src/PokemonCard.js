import { useState } from "react";
import { getPokemonImg } from "./utilFunctions/utilFunctions";

export const PokemonCard = ({ pokemon }) => {
  const [pokemonImage, setPokemonImage] = useState("");
  getPokemonImg(`${pokemon?.url}`, setPokemonImage);

  return (
    <li>
      <p>{pokemon?.name}</p>
      <img src={pokemonImage} alt={pokemon?.name} />
    </li>
  );
};
