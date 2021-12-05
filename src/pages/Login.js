import React from "react";
import { useAppState } from '../AppState';
import './Login.css';

const Login = (props) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: ""
  });

  const [ userData, setUserData] = React.useState(null);
  const { state, dispatch } = useAppState();
  console.log(state);

  React.useEffect(() => {
    if (userData) {
      console.log(userData);
      dispatch({ type: 'login', payload: { token, username: userData.username }});
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
    actions[type]().then((data) => {
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