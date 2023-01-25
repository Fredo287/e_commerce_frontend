import React, { FC } from 'react';

interface IImageProps {
  width: string;
  height: string;
  src: string;
  alt: string;
}

const Image: FC<IImageProps> = ({ width, height, src, alt }) => {
  return <img alt={alt} src={src} width={width} height={height} />;
};

export default Image;
