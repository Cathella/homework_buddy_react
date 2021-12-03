import React, { useReducer } from "react";

// Initial state
const initialState = {
  url: 'http://homework-buddy.herokuapp.com'
}

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
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
