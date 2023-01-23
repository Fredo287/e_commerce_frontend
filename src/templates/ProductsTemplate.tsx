import React, { FC } from 'react';
import { Container, Grid } from '@mui/material';
import Products from '../organisms/Products';
import SearchProduct from '../organisms/SearchProduct';

const ProductsTemplate: FC = () => {
  return (
    <Container>
      <Grid container>
        <SearchProduct />
        <Grid item>
          <Products />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsTemplate;
