import React, { FC } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import ProductDescription from '../atoms/ProductDescription';
import Products from '../organisms/Products';

const ProductTemplate: FC = () => {
  return (
    <Container>
      <Grid container>
        {/* Product image */}
        <Grid item>
          <img src="url here" alt="Selected product" />
        </Grid>

        {/* Product details and button */}
        <Grid item>
          <ProductDescription />
          <Button variant="contained" style={{ backgroundColor: '#EF3340' }}>
            Add to cart
          </Button>
        </Grid>
      </Grid>

      {/* Suggested items based on category */}
      <Grid container>
        <Grid item>
          <Typography variant="h3">
            {' '}
            Other products you might be interested in{' '}
          </Typography>
          <Products />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductTemplate;
