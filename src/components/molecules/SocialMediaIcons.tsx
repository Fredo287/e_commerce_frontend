import React, { FC } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const SocialMediaIcons: FC = () => {
  return (
    <div>
      <InstagramIcon fontSize="large" />
      <TwitterIcon fontSize="large" />
      <FacebookRoundedIcon fontSize="large" />
    </div>
  );
};

export default SocialMediaIcons;
