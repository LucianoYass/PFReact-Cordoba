import { useContext } from "react";
import { listCartContext } from "../Item/ProviderContextCart";
import "./containerCart.css";
import ItemCart from "./ItemCart";
import { controllerShowCart } from "./ContextCart";

const ContainerCart = () => {

    const { listCart, clearCart } = useContext(listCartContext)
    const { cartShow, setCartShow} = useContext(controllerShowCart)

    const style = {
        display: cartShow
    }

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none")
    }

    return (
        <div className="cart" style={style}>

            <div className="cerrar"> 
                <button className="botonCerrar" onClick={closeCart}>
                    <span>X</span>
                </button>
            </div>

            <div className="containerItemsCart">
                {
                    (listCart.length === 0) ? <span className = "emptyCart">El carrito esta vacío</span> : listCart.map( product => (
                        <ItemCart
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.imageProduct.firstImage}
                            quantity={product.quantity}
                            price={product.price}
                        />
                    ))
                }
            </div>

            <div className="TerminarCompra">
                <button className="terminar">
                    Terminar Compra
                </button>

                <button className="limpiar" onClick={clearCart}>
                    <span>Vaciar</span>
                </button>
            </div>

        </div>
    )
}

export default ContainerCart;