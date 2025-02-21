import { createReducer } from "@reduxjs/toolkit";

// Stato iniziale
const initialState = {
  results: [],
  loading: false,
  error: null,
};

// Azioni per aggiornare lo stato della ricerca
export const searchSongsPending = () => ({ type: "SEARCH_SONGS_PENDING" });
export const searchSongsSuccess = (data) => ({ type: "SEARCH_SONGS_SUCCESS", payload: data });
export const searchSongsError = (error) => ({ type: "SEARCH_SONGS_ERROR", payload: error });

// Funzione per effettuare la ricerca con fetch
export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    dispatch(searchSongsPending());
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (!response.ok) throw new Error("Errore nel recupero dei dati");
      const data = await response.json();
      dispatch(searchSongsSuccess(data.data));
    } catch (error) {
      dispatch(searchSongsError(error.message));
    }
  };
};

// Reducer per gestire lo stato della ricerca
const Search = createReducer(initialState, (builder) => {
  builder
    .addCase("SEARCH_SONGS_PENDING", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("SEARCH_SONGS_SUCCESS", (state, action) => {
      state.loading = false;
      state.results = action.payload;
    })
    .addCase("SEARCH_SONGS_ERROR", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default Search;
