import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer 
                    itemUno = "Mangas"
                    itemDos = "Comics"
                    itemTres = "Nacional"
                    itemCuatro = "Novelas"
                />
            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;