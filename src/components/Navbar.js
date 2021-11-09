import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/imagen.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge'

const useStyles = makeStyles((props)=> ({
    root: {
        flexGrow: 1,
        marginBottom:"7rem",
    },
    appBar: {
        backgroundColor: "#fafafa",
        boxShadow:"none",
    },
    grow: {
        flexGrow:1,
    },
    button: {
        marginLeft:"10px",
    },
    image: {
        marginRight:"10px",
        height:"7rem",
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
    <Box className={classes.root} >
        <AppBar position="fixed" style ={{backgroundColor:"#fafafa"}}>
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton}>
            <img src={logo} alt="logo" className={classes.image}/>
        </IconButton>
        <div className ={classes.grow}/>
        <Typography variant="h4" color = "#306e8f" component = "p">
            welcome
        </Typography>
        <div className={classes.button}>
        <Button variant = "outlined" >
            <strong style ={{color:"#306e8f"}}>Login</strong>
        </Button>
        <IconButton aria-label = "show cart iteam">
        <Badge badgeContent ={2} color = "secondary">
            <AddShoppingCartIcon fontSize = "large" style ={{color:"#306e8f"}} />
        </Badge>
        </IconButton>
        </div>
        </Toolbar>
        </AppBar>
        
    </Box>
    );
}
