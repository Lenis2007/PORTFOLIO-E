import { NavLink } from 'react-router-dom'

export const ItemNavBar = ({ url = '*', content = "Vacio", styles }) =>

    <li className={styles}> <NavLink to={url}> {content} </NavLink> </li>

