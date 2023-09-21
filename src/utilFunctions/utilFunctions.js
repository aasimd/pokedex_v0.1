import axios from "axios";

// Fetch Functions
export const getPokemonData = async (url, dispatch) => {
  dispatch({ type: "SET_LOADING_ON" });
  try {
    const response = await axios.get(url);
    dispatch({ type: "SET_DATA", payload: response?.data?.results });
    dispatch({ type: "SET_NEXT_URL", payload: response?.data?.next });
    dispatch({ type: "SET_PREV_URL", payload: response?.data?.previous });
  } catch (e) {
    console.error(e);
  }
  dispatch({ type: "SET_LOADING_OFF" });
};
export const getAllPokemonData = async (url, dispatch) => {
  dispatch({ type: "SET_LOADING_ON" });
  try {
    const response = await axios.get(url);
    dispatch({ type: "SET_ALL_DATA", payload: response?.data?.results });
  } catch (e) {
    console.error(e);
  }
  dispatch({ type: "SET_LOADING_OFF" });
};
export const getPokemonImg = async (url, setImage) => {
  try {
    const response = await axios.get(url);
    setImage(response?.data?.sprites?.front_default);
  } catch (e) {
    console.error(e);
  }
};
