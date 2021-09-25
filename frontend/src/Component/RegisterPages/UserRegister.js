import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialValue = {
  name: "",
  email: "",
  password: "",
  reEnterPassword: "",
};

const UserRegister = () => {
  const history = useHistory();

  const [user, setUser] = useState(initialValue)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/user-login");
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="register">
      {console.log("user", user)}
      <h1>User Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        User Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/user-login")}>
        User Login
      </div>
    </div>
  );
};

export default UserRegister;
