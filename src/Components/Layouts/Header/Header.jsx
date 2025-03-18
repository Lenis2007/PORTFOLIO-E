import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar'

export const Header = () => {
  return (
    <header className='flex justify-center justify-self-center rounded-md p-5 items-center font-medium text-center mt-2'>
      <NavBar styleNav='text-[#fff] flex justify-center' styleUl='flex gap-3.5'>
        <ItemNavBar url='/' content='Inicio' />
        <ItemNavBar url='/Skills' content='Habilidades' />
        <ItemNavBar url='/Studies' content='Estudios' />
      </NavBar>
    </header>
  )
}
