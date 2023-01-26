import React, { FC } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import ProductDescription from '../atoms/ProductDescription';
import Products from '../organisms/Products';
import Image from '../atoms/Image';

const ProductTemplate: FC = () => {
  return (
    <Container>
      <Grid container flexDirection="row" spacing={3}>
        {/* Product image */}
        <Grid item>
          <Image
            width="320rem"
            height="180rem"
            src="https://source.unsplash.com/random"
            alt="Selected product"
          />
        </Grid>

        {/* Product details and button */}
        <Grid item>
          <ProductDescription description="" />
          <Button variant="contained" style={{ backgroundColor: '#EF3340' }}>
            Add to cart
          </Button>
        </Grid>
      </Grid>

      {/* Suggested items based on category */}
      <Grid container>
        <Grid item>
          <Typography variant="h4" gutterBottom marginTop="2rem">
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
