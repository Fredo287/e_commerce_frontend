import React, { FC } from 'react';
import { Button } from '@mui/material';
import useStyles from './AtomicStyles';

interface IButtonStateProps {
  text: string;
  variant: string;
  backgroundColor: string;
}

const CutomButton: FC<IButtonStateProps> = ({
  text,
  variant,
  backgroundColor,
}) => {
  const styles = useStyles();

  return (
    <Button
      variant={
        variant === 'text'
          ? 'text'
          : variant === 'outlined'
          ? 'outlined'
          : 'contained'
      }
      className={styles.customButton}
    >
      {' '}
      {text}{' '}
    </Button>
  );
};

// CutomButton.defaultProps = {
//   variant: 'contained',
// };

export default CutomButton;
