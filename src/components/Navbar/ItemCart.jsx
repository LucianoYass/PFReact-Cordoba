import { useContext } from "react";
import { listCartContext } from "../Item/ProviderContextCart";
import "./itemCart.css";

const ItemCart = ({id, title, price, image, quantity}) => {

    const { removeFromCart } = useContext(listCartContext)

    return (
        <div className = "itemCart">
            <div className="img">
                <img src={image}></img>
            </div>

            <div className="description-cantidad">
                <span className="title">{title}</span>
                <span className="quantity">{`Cantidad: ${quantity}`}</span>
            </div>

            <div className="price">
                <span className="subtotal">Subtotal</span>
                <span className="price"> ${price * quantity}</span>
            </div>

            <button className="delete" onClick={ () => removeFromCart(id)}>
                <span>Eliminar</span>
            </button>
        </div>
    )
}

export default ItemCart;