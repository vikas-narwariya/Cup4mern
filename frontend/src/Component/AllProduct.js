import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getProduct, deleteProduct } from '../Service/api';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllProduct = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

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
        <div>        
            
        
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Product Detail</TableCell>
                    <TableCell>Product Quantity</TableCell>
                    <TableCell>Product Cost</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.product_name}</TableCell>
                        <TableCell>{user.product_detail}</TableCell>
                        <TableCell>{user.product_quantity}</TableCell>
                        <TableCell>{user.product_cost}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteProductData(user._id)}>Delete</Button> 
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>

    )
}

export default AllProduct;