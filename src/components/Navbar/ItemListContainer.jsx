import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
  return (
      <ul>
        <li>
          <Link to="category/mangas">
              {props.itemUno}
          </Link>
        </li>
        <li>
          <Link to="category/comics">
            {props.itemDos}
          </Link>
        </li>
        <li>
          <Link to="category/nacional">
            {props.itemTres}
          </Link>
        </li>
        <li>
          <Link to="category/novelas">
            {props.itemCuatro}
          </Link>
        </li>
    </ul>
  )
}

export default ItemListContainer;