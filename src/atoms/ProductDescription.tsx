import React, { FC } from 'react';
import { Typography } from '@mui/material';

const ProductDescription: FC = () => {
  return (
    <div>
      <Typography variant="h6">Product Title</Typography>
      <Typography variant="subtitle2"> Product description </Typography>
      <Typography variant="subtitle1"> Product Price: $$$ </Typography>
    </div>
  );
};

export default ProductDescription;
