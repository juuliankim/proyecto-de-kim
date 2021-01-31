import {navbar} from "./NavBar.module.scss"; 

const NavbarComponent = () => {

    return (
       <nav className={navbar}>
           <div>Bella</div>
           <ul>
               <li><a href="">Inicio</a></li>
               <li><a href="">Tienda</a></li>
               <li><a href="">Contacto</a></li>
           </ul>
       </nav>
    )
}

export default NavbarComponent;