import React, { FC } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import useStyles from '../atoms/AtomicStyles';

const ProductCard: FC = () => {
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
          <Typography variant="h6">Product Title</Typography>
          <Typography variant="subtitle2"> Product description </Typography>
          <Typography variant="subtitle1"> Product Price: $$$ </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="medium"
            variant="contained"
            style={{ backgroundColor: '#EF3340' }}
          >
            View Product
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
