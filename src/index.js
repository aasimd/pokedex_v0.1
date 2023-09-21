import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { PokemonContextProvider } from "./Context/PokemonContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </StrictMode>
);
