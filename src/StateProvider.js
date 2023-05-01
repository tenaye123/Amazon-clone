import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const newcontext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <newcontext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </newcontext.Provider>
);

// Push and Pull information from the data layer
export const useStateValue = () => useContext(newcontext);
