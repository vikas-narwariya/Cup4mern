import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Go-Mart</NavLink>                
                <NavLink className={classes.tabs} to="./admin-login" exact>Admin Login</NavLink>
                <NavLink className={classes.tabs} to="./supplier-login" exact>Supplier Login</NavLink>
                <NavLink className={classes.tabs} to="./user-login" exact>User Login</NavLink>
                {/* <NavLink className={classes.tabs} to="all" exact>All Products</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add Products</NavLink> */}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;