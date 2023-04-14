import { useState } from "react";
import { createContext } from "react";
import productos from "../../utils/products";

export const listCartContext = createContext(null);

const ProviderContextCart = ({children}) => { 

    const [ listCart, setListCart ] = useState([]);

    const addProduct = (id) => {

        //encuentra el producto que busco agregar
        const productAdd = productos.find(product => product.id === id)
    
        //array con productos a mantener
        const productKeep = listCart.filter(product => product.id !== id)

        let add = true;
        for (let product of listCart) {
            if (product.id === id) {
                let quantity = product.quantity;

                if (quantity < productAdd.stock) {
                    const newQuantity = {...product, quantity : quantity + 1}
                    setListCart( [...productKeep, newQuantity] )
                }

                add = false;
                break
            }
        }

        add && setListCart([...productKeep, {...productAdd, quantity : 1}])
    }

    const clearCart = () => {
        setListCart([]) //para vaciar el carrrito asignando array vacio
    }

    const removeFromCart = (id) => {
        const updateList = listCart.filter(product => product.id !== id);
        setListCart(updateList);
    }

    return (
        <listCartContext.Provider value={{removeFromCart, listCart, addProduct, clearCart}}>
            {children}
        </listCartContext.Provider>    
    )
}

export default ProviderContextCart;
