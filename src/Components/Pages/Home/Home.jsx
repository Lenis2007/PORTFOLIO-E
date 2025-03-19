import React from "react";
/* import photo from "../../../assets/no-photo.jpg"; */
import me from "../../../assets/me.jpg";

export const Home = () => {
  return (

    <section className='flex h-full w-full flex-col lg:flex-row items-center justify-center gap-15 p-2 rounded-lg text-white m-8 lg:m-auto'>

      <img
        src={me}
        alt="Perfil"
        className='w-35 h-35 lg:w-55 lg:h-55 rounded-full object-cover'
      />

      <div className='text-center lg:text-left max-w-lg'>
        <h1 className='text-4xl font-bold mb-4 text-[#FFC107]'>Hola, soy Lenis Alfonso</h1>
        <p className='text-justify'>
          Soy una desarrolladora junior full stack web con formación en <span className='text-amber-200'>Tecnología en Análisis y Desarrollo de Software del SENA</span>, donde actualmente estoy cursando el tecnólogo tras haber completado el técnico en el colegio. Me apasiona adquirir nuevos conocimientos y mejorar mis habilidades para crecer profesionalmente. A pesar de que el aprendizaje puede ser un reto, me esfuerzo por encontrar métodos que faciliten mi comprensión. Valoro la oportunidad de participar en proyectos desafiantes, donde puedo contribuir activamente al éxito del equipo y reforzar mi desarrollo.
        </p>
      </div>
    </section>
  )
}
