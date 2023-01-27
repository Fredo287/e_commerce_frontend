import React, { FC } from 'react';

interface ICategory {
  setCatId: React.Dispatch<React.SetStateAction<number>>;
}

const SelectCategory: FC<ICategory> = ({ setCatId }) => {
  return (
    <select
      name="categories"
      id="categories"
      onChange={(e) => setCatId(parseInt(e.target.value, 10))}
      style={{ padding: 10, marginLeft: 20, border: '10px inline black' }}
    >
      <option value={0}>Select Category</option>
      <option value={1}>Electronics</option>
      <option value={2}>Electrical</option>
      <option value={3}>Clothes</option>
      <option value={4}>Food</option>
    </select>
  );
};

export default SelectCategory;
