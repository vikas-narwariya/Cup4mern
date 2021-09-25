import axios from 'axios';

const usersUrl = 'http://localhost:8000/login';


export const getProduct = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addProduct = async (product) => {
    return await axios.post(`${usersUrl}/add`, product);
}

export const addAdminRegister = async (admin) => {
    return await axios.post("/admin-register", admin);
}

export const addSupplierRegister = async (supplier) => {
    return await axios.post("/supplier-register", supplier);
}

export const addUserRegister = async (user) => {
    return await axios.post("/user-register", user);
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editProduct = async (id, product) => {
    return await axios.put(`${usersUrl}/${id}`, product)
}