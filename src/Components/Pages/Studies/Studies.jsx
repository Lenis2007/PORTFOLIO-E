import React from 'react'
import { CardSmall } from '../../UI/CardSmall/CardSmall'

export const Studies = () => {
    return (
        <section className='p-8 space-y-4'>
            <CardSmall
                contentTi='Nivel de Inglés'
                contentDes='Intermedio Básico'
                content={['A2']}
                icon='🌍' />

            <CardSmall
                contentTi='Proyecto Relevante'
                contentDes='Desarrollo de Portafolio Personal'
                content={['React', 'Tailwind']}
                icon='👩🏼‍💻' />

            <CardSmall
                contentTi="Estudios"
                content={{
                    "Técnico en Desarrollo de Software": "2021-2023",
                    "Tecnólogo en Análisis y Desarrollo de Software": "2024-2026",
                    "Curso Básico RPA - Pix Studio": "2024"
                }}
                icon="👩🏼‍🎓"
            />
        </section>
    )
}
