import estilosNavBar from "./NavBar.module.css";
import CartWidget from "../common/CartWidget/CartWidget";
import { AiOutlineUser } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header className={estilosNavBar.header}>
                <nav className={estilosNavBar.navBar}>
                    <div className={estilosNavBar.contenedorLogo}>
                        <Link to="/"><img src="https://res.cloudinary.com/db2pyuqoa/image/upload/v1708378030/logo_V.O_zwtf0g.webp" className= {estilosNavBar.logo} alt="logo-vidal-ortiz" />
                        </Link>
                    </div>
                    <ul className={estilosNavBar.categorias}>
                        <Link to="/"className={estilosNavBar.lista}>Inicio</Link>
                        <Link to="/category/Productos" className={estilosNavBar.lista}>Productos</Link>
                        <Link to="/category/Servicios"className={estilosNavBar.lista}>Servicios</Link>
                        <Link to="/category/Maquinas"className={estilosNavBar.lista}>Maquinas</Link>
                    </ul>
                    <div className={estilosNavBar.contenedorIconos}>
                        <CartWidget />
                        <div>
                            <AiOutlineUser className={estilosNavBar.iconoUser}/>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar;