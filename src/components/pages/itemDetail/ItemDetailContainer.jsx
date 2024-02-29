import { getProduct } from "../../../productsMock";
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 
import { ItemDetail } from "./ItemDetail";
import styleItemList from "./ItemDetail.module.css";
import { ImSpinner2 } from "react-icons/im";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    console.log(id);

    const [item, setItem] = useState(null);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        getProduct(+id).then((resp) => {
            setItem(resp);
            setIsloading(false);
        });
    }, [id]);

    return (
        <>{isLoading ? <ImSpinner2 className={styleItemList.spinner}/> : <ItemDetail item={item} />}</>
    );
};
