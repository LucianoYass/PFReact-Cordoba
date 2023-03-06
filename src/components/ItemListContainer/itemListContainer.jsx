import React from 'react';
import Inicio from '../Inicio/inicio';

const ItemListContainer = (props) => {
  return (
    <>
      <Inicio greeting={props.texto}/>
    </>
  )
}

export default ItemListContainer;