import React from 'react'
import { ItemSocial } from '../../UI/ItemSocial/ItemSocial';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <footer className='flex justify-self-center rounded-md p-5 items-center text-center bg-[#000] mt-2'>
        <ItemSocial url='https://wa.me/573505004334' icons={<FaWhatsapp className='text-[#fff]' />} />
        <ItemSocial url='https://wa.me/573505004334' icons={<FaFacebook className='text-[#fff]' />} />
    </footer>
    </>
  )
}
