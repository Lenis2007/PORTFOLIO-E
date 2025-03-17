import React from 'react'
import { Skill } from '../../Layouts/Skill/Skill'
import { CardSkill } from '../../UI/CardSkill/CardSkill'

export const Skills = () => {
    return (
        <section>
            <Skill>
                <h2 className="text-3xl font-bold text-center text-amber-300 mb-8">Habilidades Técnicas</h2>
                <CardSkill contentTi='Frontend' content='HTML, CSS, TailwindCSS, JavaScript, React, Tailwind, mas, mas masjasaksnckansm' />
                <CardSkill />
            </Skill>

            <Skill>
                <h2 className="text-3xl font-bold text-center text-amber-300 mb-8">Habilidades Técnicas</h2>
                <CardSkill contentTi='Frontend' content='HTML, CSS, TailwindCSS, JavaScript, React, Tailwind, mas, mas masjasaksnckansm' />
                <CardSkill />
            </Skill>

        </section>

    )
}
