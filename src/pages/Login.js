import React, { useState, useEffect } from "react";
import { useAppState } from '../AppState';
import './Login.css';

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [ userData, setUserData] = useState(null);
  const { state, dispatch } = useAppState();
  console.log(state);

  useEffect(() => {
    if (userData) {
      console.log(userData);
      const { token, user } = userData;
      dispatch({ type: 'login', payload: { token, username: user.username }});
      window.localStorage.setItem('auth', JSON.stringify({ token, username: user.username }))
      props.history.push('/dashboard')
    }
  }, [userData]);

  const actions = {
    login: () => {
      return fetch(state.url + '/login', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.login().then((data) => {
      setUserData(data);
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Login to HomeworkBuddy</label>
        <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
