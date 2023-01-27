import React, { FC } from 'react';

interface IFind {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchProduct: FC<IFind> = ({ setSearch }) => {
  return (
    <input
      placeholder="Search by name..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchProduct;
