import { AsyncLocalStorage } from "async_hooks";
import { response } from "express";
import Product from "../model/productschema.js";
import User from "../model/registerschema.js";

export const getProduct = async (request, response) => {
    try{
        let product = await Product.find();
        response.json(product);
    }
    catch(error){
        response.json({ message: error.message });
    }
}

export const getUser = async (request, response) => {
    try{
        let user = await User.find();
        response.json(product);
    }
    catch(error){
        response.json({ message: error.message });
    }
}


export const addProduct = async (request, response) => {
    const product = request.body;
    const newProduct = new Product(product);

    try{
        await newProduct.save();
        response.json(newProduct);
    }
    catch(error){
        response.json({ message: error.message });
    }

}

export const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new User(user);

    try{
        await newUser.save();
        response.json(newUser);
    }
    catch(error){
        response.json({ message: error.message });
    }

}

export const addSupplier = async (request, response) => {
    const user = request.body;
    const newUser = new User(user);

    try{
        await newUser.save();
        response.json(newUser);
    }
    catch(error){
        response.json({ message: error.message });
    }

}

export const getProductById = async (request, response) => {
    const id = request.params.id;
    try {
        const product = await Product.findById(id);
        response.json(product);
    }
    catch(error){
        response.json({message: error.message});
    }
}

export const editProduct = async (request, response) => {
    const product = request.body;

    const editProduct = new Product(product);

    try {
        await Product.updateOne({ _id: request.params.id }, editProduct);
        response.json(editProduct);
    }
    catch(error) {
        response.json({message: error.message});
    }

}

export const deleteProduct = async (request, response) => {
    try {
        await Product.deleteOne({_id: request.params.id});
        response.json("Product Deleted Successfully");
    }
    catch(error) {
        response.json({message: error.message});
    }
}


// export const addRegister = async (request, response) => {
//     const user1 = request.body;
//     const newUser = new User1(user1);

//     try{
//         await newUser1.save();
//         response.json(newUser1);
//     }
//     catch(error){
//         response.json({ message: error.message });
//     }

// }

// export const addLogin = async (request, response) => {
//     const login = request.body;
//     const newLogin = new Login(login);

//     try{
//         await newLogin.save();
//         response.json(newLogin);
//     }
//     catch(error){
//         response.json({ message: error.message });
//     }

// }