import React from 'react';
import { listCartContext } from '../Item/ProviderContextCart';
import { useContext } from "react";
import { controllerShowCart } from './ContextCart';

const CartWidget = () => {

  const { cartShow, setCartShow } = useContext(controllerShowCart)
  const { listCart } = useContext(listCartContext)

  const showCart = () => {
    setCartShow( (cartShow === "none") ? "flex" : "none")
  }

  return (
    <>
      <div className="containerLength" onClick={showCart}>
        <span className="cartLogo">🛒</span>
        <span className="cantCart">
          {listCart.length}
        </span>
      </div>
    </>
  )
}

export default CartWidget;