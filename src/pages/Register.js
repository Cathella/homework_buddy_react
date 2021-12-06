import React from "react";
import { useAppState } from '../AppState';

const Register = (props) => {
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
      const { token, user } = userData;
      dispatch({ type: 'register', payload: { token, username: user.username }});
    }
  }, [userData]);

  const actions = {
    register: () => {
      return fetch(state.url + '/users', {
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
    actions.register().then((data) => {
      setUserData(data);
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Register at HomeworkBuddy</label>
        <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
        <input type="submit" value="Register" />
      </form>
    </div>
  )

}

export default Register;