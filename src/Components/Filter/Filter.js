import React from "react";
import { Label } from "./Filter.styled";
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/FilterSlice';

export default function Filter() {

  const dispatch = useDispatch();
  const handleFilterChange = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };


  return (
    <Label>
      Find contacts by Name
      <input onChange={handleFilterChange} type="text" name="filter"/>
    </Label>
  );
}




