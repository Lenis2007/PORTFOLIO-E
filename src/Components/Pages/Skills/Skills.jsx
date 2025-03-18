import React from 'react'
import { BigCard } from '../../Layouts/BigCard/BigCard'
import { CardSmall } from '../../UI/CardSmall/CardSmall'

export const Skills = () => {
    return (
        <section className='p-8 space-y-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <BigCard>
                    <h2 className="text-3xl font-bold text-center text-[#FFC107] mb-8">Habilidades Técnicas</h2>
                    <CardSmall
                        contentTi='Frontend'
                        contentDes='Desarrollo de interfaces visuales y funcionales'
                        content={['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript', 'React']}
                    />
                    <CardSmall
                        contentTi='Backend'
                        contentDes='Gestión de la lógica del servidor.'
                        content={['Node.js', 'Express']}
                    />
                    <CardSmall
                        contentTi='Base de Datos'
                        contentDes='Almacenamiento, recuperación y gestión segura de datos.'
                        content={['MySQL', 'SQLite']}
                    />

                    <CardSmall
                        contentTi='Herramientas de Desarrollo'
                        contentDes='Desarrollo, colaboración y despliegue de proyectos.'
                        content={['Git', 'GitHub', 'Netlify', 'Figma', 'Canva', 'Notion', 'Trello', 'Scrum (Metodologia Ágil)']}
                    />
                </BigCard>

                <BigCard>
                    <h2 className="text-3xl font-bold text-center text-amber-300 mb-8">Habilidades Sociales</h2>
                    <CardSmall
                        contentTi='Trabajo En Equipo'
                        content={['Colaboración activa y comunicación efectiva en grupo.']}
                    />
                    <CardSmall
                        contentTi='Comunicación'
                        content={['Habilidades claras para comunicar ideas o dudas.']}
                    />
                    <CardSmall
                        contentTi='Colaboración'
                        content={['Contribución activa al equipo para alcanzar objetivos.']}
                    />
                    <CardSmall
                        contentTi='Resolución de Problemas'
                        content={['Capacidad para encontrar soluciones efectivas.']}
                    />
                    <CardSmall
                        contentTi='Adaptabilidad'
                        content={['Flexibilidad para ajustarse a cambios y nuevos retos.']}
                    />
                </BigCard>
            </div>
        </section>

    )
}




