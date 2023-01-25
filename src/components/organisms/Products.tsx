import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import ProductCard from '../molecules/ProductCard';
// import useStyles from '../atoms/AtomicStyles';

export type IProducts = {
  productId: number;
  name: string;
  description: string;
  stock: number;
  categoryId: number;
  category: null;
};

const Products = () => {
  const [products, setProducts] = useState<IProducts[]>();

  const fakeProducts = [
    { ProductId: 1 },
    { ProductId: 2 },
    { ProductId: 3 },
    { ProductId: 4 },
    { ProductId: 5 },
  ];

  // const [fakeProducts, setFakeProducts] = useState<IProducts[]>();
  // setFakeProducts([
  //   {
  //     productId: 1,
  //     name: 'Dell G3',
  //     description: 'Gaming laptop',
  //     stock: 10,
  //     categoryId: 1,
  //     category: null,
  //   },
  //   {
  //     productId: 2,
  //     name: 'Dell XPS 13',
  //     description: 'Laptop for professionals',
  //     stock: 12,
  //     categoryId: 1,
  //     category: null,
  //   },
  //   {
  //     productId: 3,
  //     name: 'Singer RSX300',
  //     description: 'Singer refrigerator',
  //     stock: 4,
  //     categoryId: 2,
  //     category: null,
  //   },
  //   {
  //     productId: 4,
  //     name: 'Samsung TV-40L',
  //     description: 'Samsung 40 inch LED TV',
  //     stock: 7,
  //     categoryId: 2,
  //     category: null,
  //   },
  //   {
  //     productId: 5,
  //     name: 'Burberry Polo',
  //     description: 'Burberry polo t-shirt',
  //     stock: 42,
  //     categoryId: 3,
  //     category: null,
  //   },
  //   {
  //     productId: 6,
  //     name: 'Burberry Slique',
  //     description: 'Burberry trench coat',
  //     stock: 11,
  //     categoryId: 3,
  //     category: null,
  //   },
  //   {
  //     productId: 7,
  //     name: 'Dairy Barn 1L',
  //     description: 'Fresh milk',
  //     stock: 118,
  //     categoryId: 4,
  //     category: null,
  //   },
  //   {
  //     productId: 8,
  //     name: 'Two Hearts 400g',
  //     description: 'Oats - 400g pack',
  //     stock: 96,
  //     categoryId: 4,
  //     category: null,
  //   },
  // ]);

  // const classes = useStyles();

  const getProducts = async () => {
    axios
      .get(`http://localhost:5206/api/Product`)
      .then((res) => setProducts(res.data))
      .catch((err) => err);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {products ? (
          products.map((product) => {
            return (
              <Grid item padding="20px 0px" xs={12} sm={6} md={4}>
                <ProductCard id={product.productId} />
              </Grid>
            );
          })
        ) : fakeProducts ? (
          fakeProducts.map((product) => {
            return (
              <Grid item padding="20px 0px" xs={12} sm={6} md={4}>
                <ProductCard id={product.ProductId} />
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
