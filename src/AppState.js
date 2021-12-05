import React, { useReducer, useContext } from "react";

// Initial state
const initialState = {
  url: 'http://homework-buddy.herokuapp.com',
  token: null,
  username: null
}

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'register':
      fetch(state.url + '/users/', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(action.payload)
      })
      .then(response => response.json())
      .then(user => {
        return {
          ...state,
          token: user.token,
          username: user.username
        }
      })
      break
    case 'login':
      fetch(state.url + '/login/', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(action.payload)
      })
      .then(response => response.json())
      .then(user => {
        return {
          ...state,
          token: user.token,
          username: user.username
        }
      })
      break
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
