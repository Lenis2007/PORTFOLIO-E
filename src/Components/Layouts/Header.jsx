import React from 'react'
import { NavBar } from './NavBar'
import { ItemNavBar } from '../UI/ItemNavBar'

export const Header = () => {
  return (
    <header className=' flex justify-self-center rounded-md p-5 items-center text-center bg-[#000]'>
      <NavBar styleNav='text-[#fff] flex justify-center' styleUl='flex gap-3.5'>
        <ItemNavBar url='/' content='Inicio' />
        <ItemNavBar url='/Skills' content='Habilidades' />
        <ItemNavBar url='/Studies' content='Estudios' />
        <ItemNavBar content='Otro' />
      </NavBar>
    </header>
  )
}
