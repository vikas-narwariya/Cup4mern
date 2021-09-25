import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getProduct, editProduct } from '../Service/api';

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

const EditProduct = () => {
    const [product, setProduct] = useState(initialValue);
    const { product_name, product_detail, product_quantity, product_cost } = product;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadProductDetails();
    }, []);

    const loadProductDetails = async() => {
        const response = await getProduct(id);
        setProduct(response.data);
    }

    const editProductDetails = async() => {
        const response = await editProduct(id, product);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }

    return (

        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Product</Typography>
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
                <Button variant="contained" color="primary" onClick={() => editProductDetails()}>Edit Product</Button>
            </FormControl>
        </FormGroup>


       
    )
}

export default EditProduct;