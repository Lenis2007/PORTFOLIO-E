import { NavLink } from 'react-router-dom'

export const ItemNavBar = ({ url = '*', content = "Vacio",}) =>

    <li className='hover:text-blue-500'> <NavLink to={url}> {content} </NavLink> </li>

