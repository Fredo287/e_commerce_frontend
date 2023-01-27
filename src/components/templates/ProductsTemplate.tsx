import React, { FC, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Products from '../organisms/Products';
import SearchProduct from '../organisms/SearchProduct';
import SelectCategory from '../organisms/SelectCategory';

const ProductsTemplate: FC = () => {
  const [catId, setCatId] = useState(0);

  // temporary search
  const [search, setSearch] = useState('');

  return (
    <div>
      <Container>
        <Grid container gap={3}>
          <div style={{ display: 'flex', gap: 750 }}>
            <SelectCategory setCatId={setCatId} />
            <SearchProduct setSearch={setSearch} />
          </div>
          <Grid item>
            <Products catId={catId} search={search} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsTemplate;
