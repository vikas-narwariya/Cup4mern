import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const SupplierLogin = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
           
            history.push("/supplier-page")
        })
    }

    return (
        <div className="block">
        <div className="login">
            <h1>Supplier Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Supplier Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/supplier-register")}>Supplier Register</div>
        </div>
        </div>
    )
}

export default SupplierLogin