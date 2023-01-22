import React from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from '../molecules/ProductCard';
import useStyles from '../atoms/AtomicStyles';

const Products = () => {
  const products = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        {products.map((product) => {
          return (
            <Grid item padding="20px 0px" xs={12} sm={6} md={4}>
              <ProductCard />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
