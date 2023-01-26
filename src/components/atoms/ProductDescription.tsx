import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface IDescription {
  description: string;
}

const ProductDescription: FC<IDescription> = ({ description }) => {
  return (
    <div>
      <Typography variant="h6">Product Title</Typography>
      <Typography variant="subtitle2"> {description} </Typography>
      <Typography variant="subtitle1"> Product Price: $$$ </Typography>
    </div>
  );
};

export default ProductDescription;
