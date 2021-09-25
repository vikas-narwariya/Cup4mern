import { Box, Typography, makeStyles, Card, CardActions, CardMedia, Button, CardContent } from '@material-ui/core';
import { getProduct, deleteProduct } from '../Service/api';
import react, { useState, useEffect } from 'react';
import Home from './Home/Home';


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

const Homepage1 = () => {

    const classes = useStyles();
    const [users, setUsers] = useState([]);
    // const classes = useStyles();

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
        

        <Home/>
    //         <Card sx={{ maxWidth: 345 }} >
    //             {users.map((user) => (
    //                 <>
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
        
    //     image="acc.jpg"
    //     style={{height:"18em",
    //     width:"18em"}}
    //   />
    //   <CardContent style={{backgroundColor:"red"}}>
    //     <Typography gutterBottom variant="h5" component="div">
    //     {user.product_name}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //     {user.product_detail}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //     {user.product_quantity}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //     {user.product_cost}
    //     </Typography>
    //   </CardContent>
      
    //   {/* <CardActions>
    //     <Button variant="contained" size="small" color="primary">Add to Cart</Button>
    //     <Button variant="contained" size="small"color="primary">Buy Now</Button>
    //   </CardActions> */}
    //   </>
    //   ))}
    // </Card>
        
    )
}

export default Homepage1;