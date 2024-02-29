import ItemList from "./ItemList";
import styleItemList from "./ItemList.module.css"
import { getProducts } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const ItemListContainer = () => {
    const { category } = useParams();
    const [productos , setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setIsLoading(true);
        getProducts().then((resp) => {
            if (category) {
                const filtroProductos = resp.filter( 
                    (producto) => producto.category === category
                );
                setProductos(filtroProductos);
            } else {
                setProductos(resp);
            }
            
            setIsLoading(false);
        });
    }, [category] );

    return (
        <>
            {isLoading ? (
                <ImSpinner2 className={styleItemList.spinner}/>
            ) : (
                <ItemList productos={productos} />
            )}
        </>
    );
};

export default ItemListContainer;