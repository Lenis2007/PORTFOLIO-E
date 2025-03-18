import React from 'react'
import { ItemSocial } from '../../UI/ItemSocial/ItemSocial';
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col bg-gray-900 text-gray-400 py-4 text-center">
        <div className="container mx-auto flex flex-col gap-2.5 justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2025 Lenis Alfonso. Todos los derechos reservados
          </p>
          
          <div className="flex space-x-6">
            <ItemSocial
              url="https://wa.me/573505004334"
              icons={<FaWhatsapp className="text-white hover:text-green-400 text-xl transition-colors" />}
            />
            <ItemSocial
              url="https://www.linkedin.com/in/lenis-rocio-287bab338/"
              icons={<FaLinkedin className="text-white hover:text-blue-500 text-xl transition-colors" />}
            />
            <ItemSocial
              url="https://github.com/Lenis2007"
              icons={<FaGithub className="text-white hover:text-gray-500 text-xl transition-colors" />}
            />
          </div>
        </div>
      </footer>
    </>
  )
}
