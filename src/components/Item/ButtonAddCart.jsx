import { useContext } from "react";
import { listCartContext } from "./ProviderContextCart";

const ButtonAddCart = ({id}) => {

    let {addProduct} = useContext(listCartContext)

    const handlerClick = () => {
        addProduct(id)
    }

    return (
        <button id="AddCart" onClick={handlerClick}>
            🛒
        </button>
    )
}

export default ButtonAddCart;