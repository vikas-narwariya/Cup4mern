import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addProduct } from '../Service/api';
import { useHistory } from 'react-router-dom';
import AllProduct from "./AllProduct";

const initialValue = {
    product_name: '',
    product_detail: '',
    product_quantity: '',
    product_cost: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddProduct = () => {
    const [product, setProduct] = useState(initialValue);
    const { product_name, product_detail, product_quantity, product_cost } = product;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const addProductDetails = async() => {
        await addProduct(product);
        history.push('./add');
    }

    return (

        <>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Product</Typography>
            <FormControl>
            <InputLabel htmlFor="my-input">Product Image</InputLabel>
            <Input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" style={{marginTop: "50px"}}>
          Upload
        </Button>
      </label>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='product_name' value={product_name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Detail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='product_detail' value={product_detail} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Quantity</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='product_quantity' value={product_quantity} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Cost</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='product_cost' value={product_cost} id="my-input"/>
            </FormControl>
            
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addProductDetails()}>Add New Product</Button>
            </FormControl>
        </FormGroup>
        <AllProduct/>
        </>
        
    )
}

export default AddProduct;