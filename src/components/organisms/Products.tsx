/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, FC } from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from '../molecules/ProductCard';
import { getProducts } from '../../store/slices/ProductsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
// import useStyles from '../atoms/AtomicStyles';

export type IProducts = {
  productId: number;
  name: string;
  description: string;
  stock: number;
  categoryId: number;
  category: null;
};

interface Product {
  catId: number;
}

const Products: FC<Product> = ({ catId }) => {
  const products = useAppSelector((state) => state.products.products);

  const dispatch = useAppDispatch();

  // for filtering
  const filteredProducts = products.filter(
    (product) => product.categoryId === catId
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {filteredProducts.length !== 0 ? (
          filteredProducts.map((product: IProducts) => {
            return (
              <Grid
                key={product.productId}
                item
                padding="20px 0px"
                xs={12}
                sm={6}
                md={4}
              >
                <ProductCard
                  id={product.productId}
                  name={product.name}
                  description={product.description}
                />
              </Grid>
            );
          })
        ) : products ? (
          products.map((product: IProducts) => {
            return (
              <Grid
                key={product.productId}
                item
                padding="20px 0px"
                xs={12}
                sm={6}
                md={4}
              >
                <ProductCard
                  id={product.productId}
                  name={product.name}
                  description={product.description}
                />
              </Grid>
            );
          })
        ) : (
          <h1> No Products Available!!!</h1>
        )}
      </Grid>
    </Container>
  );
};

export default Products;
