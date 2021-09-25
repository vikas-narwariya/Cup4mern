import react, { useState, useEffect } from 'react';


import { Box, Typography, makeStyles, Card, CardActions, CardMedia, Button, CardContent } from '@material-ui/core';
import { getProduct, deleteProduct } from '../../Service/api';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})


const Home = () => {




    const [products, setProducts] = useState([]);

    const [login, setLogin] = useState([]);
    console.warn(login.products)
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    
    
        


    useEffect(() => {
        getAllProduct();
    }, []);

    const deleteProductData = async (id) => {
        await deleteProduct(id);
        getAllProduct();
    }

    const getAllProduct = async () => {
        let response = await getProduct();
        setUsers(response.data);
    }
    

    return (
       

        <Card sx={{ maxWidth: 345 }}>
                {users.map((user) => (
                    <>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {user.product_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {user.product_detail}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {user.product_quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {user.product_cost}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button variant="contained" size="small" color="primary" 
        
        > 
        
            
            Add to Cart</Button>
        <Button variant="contained" size="small"color="primary">Buy Now</Button>
      </CardActions>
      </>
      ))}
    </Card>
    )
}

export default Home
