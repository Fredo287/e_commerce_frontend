import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface IDescription {
  name: string;
  description: string;
  price: number;
}

const ProductDescription: FC<IDescription> = ({ name, description, price }) => {
  return (
    <div>
      <Typography variant="h6"> {name} </Typography>
      <Typography variant="subtitle2"> {description} </Typography>
      <Typography variant="subtitle1"> {price} </Typography>
    </div>
  );
};

export default ProductDescription;
