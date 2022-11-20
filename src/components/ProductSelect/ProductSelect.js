import "./ProductSelect.css"
import { NavLink } from "react-router-dom";

const ProductSelect = () => {
    return (
        <div className="navProducts">
            <h3 className="title_productos">Productos de la Tienda</h3> 
            <div className="items_List">
                <ul className="lista_categorias">
                    <li className="categorias">
                        <NavLink to="/" activeClassName="active">Todos los productos</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink to="/category/Libros" activeClassName="active">Libros</NavLink>
                    </li> 
                    <li className="categorias">
                        <NavLink to="/category/Agendas" activeClassName="active">Agendas</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink to="/category/Calendarios" activeClassName="active">Calendarios</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink to="/category/Bolsas" activeClassName="active">Bolsas</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink to="/category/Gigantografias" activeClassName="active">Gigantografías</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink to="/category/Cajas" activeClassName="active">Cajas</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink to="/category/Carteleria" activeClassName="active">Cartelería</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink to="/category/Catalogos" activeClassName="active">Catálogos</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink to="/category/Cuadernos" activeClassName="active">Cuadernos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductSelect