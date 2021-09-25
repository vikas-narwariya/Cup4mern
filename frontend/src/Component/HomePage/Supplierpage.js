import React from "react"
import "./adminpage.css"
import { useHistory } from "react-router"
import AllProduct from "../AllProduct"

const Supplierpage = () => {

    const history = useHistory()
    return (
        <>
        <div className="block">
        <div className="admin">
            <h1>Supplier Dashboard</h1>
            <div className="button" onClick={() => history.push("/add")} >Add Product</div>
            <div className="button" onClick={() => history.push("/supplier-login")} >Logout</div>
        </div>
        </div>
        <AllProduct/>
        </>
    )
}

export default Supplierpage