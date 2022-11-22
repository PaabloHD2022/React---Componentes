import "./ProductSelect.css"
import { NavLink } from "react-router-dom";

const ProductSelect = () => {
    return (
        <div className="navProducts">
            <h3 className="title_productos">Productos de la Tienda</h3> 
            <div className="items_List">
                <ul className="lista_categorias">
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/"}>Todos los Productos</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Libros"}>Libros</NavLink>
                    </li> 
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Agendas"}>Agendas</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Calendarios"}>Calendarios</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Bolsas"}>Bolsas</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Gigantografias"}>Gigantografías</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Cajas"}>Cajas</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Carteleria"}>Cartelería</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Catalogos"}>Catálogos</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Cuadernos"}>Cuadernos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductSelect