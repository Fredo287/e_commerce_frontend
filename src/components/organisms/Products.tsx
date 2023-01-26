/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';

// import { useDispatch, useSelector } from 'react-redux';

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

const Products = () => {
  // const [products, setProducts] = useState<IProducts[]>();
  const products = useAppSelector((state) => state.products.products);

  // const classes = useStyles();

  // const getProducts = async () => {
  //   axios
  //     .get('https://localhost:7028/api/Product')
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => err);
  // };

  const dispatch = useAppDispatch();

  useEffect(() => {
    // getProducts();
    dispatch(getProducts());
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {products ? (
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
