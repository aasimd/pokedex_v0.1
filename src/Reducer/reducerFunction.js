export const reducerFunction = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING_ON":
      return { ...state, isLoading: true };
    case "SET_LOADING_OFF":
      return { ...state, isLoading: false };
    case "SET_DATA":
      return { ...state, pokemonData: [...payload] };
    case "SET_ALL_DATA":
      return { ...state, pokemonAllData: [...payload] };
    case "SET_NEXT_URL":
      return { ...state, nextUrl: payload };
    case "SET_PREV_URL":
      return { ...state, prevUrl: payload };
    case "SET_CURRENT_URL":
      return { ...state, currentUrl: payload };
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: payload };
    default:
      return state;
  }
};
