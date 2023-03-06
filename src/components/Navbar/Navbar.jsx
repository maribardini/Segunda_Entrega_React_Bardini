import './style.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='logo'>Tienda de Vinos</div>
            <div>
                <ul className='list'>
                    <li>
                        <NavLink
                            className={(estatus) =>
                                estatus.isActive ? 'active' : 'inactive'
                            }
                            to="/"
                        >
                            Todos los productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(estatus) =>
                                estatus.isActive ? 'active' : 'inactive'
                            }
                            to="/category/vino">
                            Vinos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(estatus) =>
                                estatus.isActive ? 'active' : 'inactive'
                            }
                            to="/category/espumante">
                            Espumantes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(estatus) =>
                                estatus.isActive ? 'active' : 'inactive'
                            }
                            to="/category/whisky">
                            Whisky
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
    );
};

export default Navbar