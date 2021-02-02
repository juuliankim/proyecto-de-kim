import CartWidgetComponent from "../cart-widget";
import MenuIcon from "./menu";
import {menu, subMenu, menuResponsive} from "./NavBar.module.scss";

const NavbarComponent = () => {
    return (
        <nav>
            <span>Bella</span>
            <ul className={menu}>
                <li><a href="">Inicio</a></li>
                <li><a href="">Tienda</a>
                    <ul className={subMenu}>
                        <li><a href="">categoria 1</a></li>
                        <li><a href="">categoria 2</a></li>
                        <li><a href="">categoria 3</a></li>
                        <li><a href="">categoria 4</a></li>
                    </ul> 
                </li>
                <li><a href="">Contacto</a></li>
                <li><a href=""><CartWidgetComponent/></a></li>
                <li className={menuResponsive}><MenuIcon/></li>
            </ul>
        </nav>
    )
}

export default NavbarComponent;