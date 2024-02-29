import ItemCount from "./ItemCount";
import { useState } from "react"; 

const ItemCountContainer = ({ stock }) => {
    
    const [counter, setCounter] = useState(1);

    const addOne = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }  else {
            alert ("Stock maximo");
        }
    };

    const subOne = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        } else {
            alert("No pueden ser productos menos de 1")
        }
    };

    return <ItemCount counter={counter} addOne={addOne} subOne={subOne} />
};

export default ItemCountContainer