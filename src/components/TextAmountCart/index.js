import React from 'react';
import { useSelector } from 'react-redux';
import {  TextAmountCart } from './style';


export default function TextCartSize ({ cartSize }) {

  const cartSize = useSelector( state => state.cart.length)

  return (
    <>
      <TextAmountCart>{cartSize || 0}</TextAmountCart>
    </>
  );
}
