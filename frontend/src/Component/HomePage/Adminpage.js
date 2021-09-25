import React from "react"
import "./adminpage.css"
import { useHistory } from "react-router"
import AllProduct from "../AllProduct"

const Adminpage = () => {

    const history = useHistory()
    return (
        <>
        <div className="block">
        <div className="admin">
            <h1>Admin Dashboard</h1>
            <div className="button" onClick={() => history.push("/supplier-register")} >Add Supplier</div>
            <div className="button" onClick={() => history.push("/user-register")} >Add User</div>
            <div className="button" onClick={() => history.push("/admin-login")} >Logout</div>
        </div>
        </div>
        <AllProduct/>
        </>
    )
}

export default Adminpage