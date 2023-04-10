import Image from "./Image";
import Description from "./Description";
import ButtonAddCart from "./ButtonAddCart";
import ButtonDetails from "./ButtonDetails";
import { Link } from "react-router-dom";
import "./cardItem.css";

const CardItem = (props) => {
    return (
        <div className="cardItem">
            <Image 
                imagen={props.imagen}
                />
            <Description
                title={props.title}
                cantidad = {props.cantidad}
                precio = {props.precio}
                />

            <div className="buttons">
                <Link to={ `/item/${props.id}`}>
                    <ButtonDetails
                        txt="Ver detalles"
                    />
                </Link>

                <ButtonAddCart
                    id={props.id}
                />
            </div>

        </div>
    )
}

export default CardItem;