import { NavLink } from 'react-router-dom'

export const ItemNavBar = ({ url = '*', content = "Vacio",}) =>

    <li className='hover:text-[#00AEEF]'> <NavLink to={url}> {content} </NavLink> </li>

