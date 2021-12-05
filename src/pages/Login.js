import React from "react";
import { useAppState } from '../AppState';

const Login = (props) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: ""
  });

  const { dispatch } = useAppState();

  const actions = {
    login: {
      type: 'login',
      payload: formData
    },
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.login);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login