import Image from "./Image";
import Description from "./Description";
import "./detailsItem.css";
import ButtonDetails from "./ButtonDetails";
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        setDatos([])
        fetchSimulation(productos.filter(filter => filter.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])

    return (
        <div className="detailsItem">
            {
                datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image
                                imagen ={items.imageProduct.firstImage}
                            />
                        </div>

                        <div className="containerRight">
                            <Description
                                title= {items.title}
                                parrafo= {items.description}
                                precio= {items.price}
                            />
                            <div className="buttons">
                                <ButtonDetails 
                                    txt="Agregar al carrito"
                                />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;