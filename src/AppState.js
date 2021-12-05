import React, { useReducer, useContext } from "react";

// Initial state
const initialState = {
  url: 'http://homework-buddy.herokuapp.com',
  token: null,
  username: null
}

// Reducer
const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'register':
      newState = { ...state, ...action.payload };
      return newState;
      break;

    case 'login':
      newState = { ...state, ...action.payload };
      return newState;
      break;
  
    default:
      return state;
      break;
  }
}

// App context
const AppContext = React.createContext(null)

// AppState component
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>
}

// useAppState Hook
export const useAppState = () => {
  return React.useContext(AppContext)
}
