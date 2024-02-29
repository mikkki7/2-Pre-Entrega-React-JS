import { PiShoppingCartSimple } from "react-icons/pi";
import cartWidgetEstilos from "./CartWidget.module.css";
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <div className={cartWidgetEstilos.contenedorCarrito}>
            <Link to="*">
                <PiShoppingCartSimple className={cartWidgetEstilos.iconoCarrito}/>
                <div className={cartWidgetEstilos.contenedorContador}>
                <span>1</span>
                </div>
            </Link>
        </div>
    );
};

export default CartWidget;