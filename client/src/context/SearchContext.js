import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: "", // Default to empty string
  dates: [], // Default to empty array
  options: {
    adult: 0, // Default to zero
    children: 0, // Default to zero
    room: 1, // Default to one room
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return { ...state, ...action.payload };
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
