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

const SupplierRegister = () => {
  const history = useHistory();

  const [supplier, setSupplier] = useState(initialValue)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplier({
      ...supplier,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = supplier;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:8000/register", supplier).then((res) => {
        alert(res.data.message);
        history.push("/supplier-login");
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="block">
    <div className="register">
      {console.log("supplier", supplier)}
      <h1>Supplier Register</h1>
      <input
        type="text"
        name="name"
        value={supplier.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={supplier.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={supplier.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={supplier.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Supplier Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/supplier-login")}>
        Supplier Login
      </div>
    </div>
    </div>
  );
};

export default SupplierRegister;
