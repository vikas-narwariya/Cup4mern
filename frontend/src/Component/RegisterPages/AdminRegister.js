import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialValue = {
  name: "",
  email: "",
  password: "",
  reEnterPassword: "",
} ;

const AdminRegister = () => {
  const history = useHistory();

  const [admin, setAdmin] = useState(initialValue)
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = admin;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", admin).then((res) => {
        alert(res.data.message);
        history.push("/admin-login");
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="register">
      {console.log("Admin", admin)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={admin.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={admin.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={admin.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={admin.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Admin Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/admin-login")}>
        Admin Login
      </div>
    </div>
  );
};

export default AdminRegister;
