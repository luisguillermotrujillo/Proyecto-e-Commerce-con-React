import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from '../components/Product'
import products from '../product-data'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    backgroundColor: "black",
    borderRadius:"10px",
    marginTop:"2rem "
}));

export default function Products() {
    return (
    <Box sx={{ flexGrow: 2}} >
        <Grid container spacing={2}>
        {   
        products.map(product=>(
        <Grid item xs={12} sm={6} md={4} lg={3}>
                <Product key={product.id} product={product}/>
                <Item></Item>
            </Grid>
            ))
        }    
        </Grid>
    </Box>
    )
}
