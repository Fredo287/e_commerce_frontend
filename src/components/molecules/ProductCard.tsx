import React, { FC } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import useStyles from '../atoms/AtomicStyles';
import ProductDescription from '../atoms/ProductDescription';

interface IProductCardTemplate {
  id: number;
}

const ProductCard: FC<IProductCardTemplate> = ({ id }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        {/* CardMedia is for containing the image */}
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent>
          <ProductDescription />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="medium"
            variant="contained"
            style={{ backgroundColor: '#292400' }}
            href={`/${id}`}
          >
            View Product
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
