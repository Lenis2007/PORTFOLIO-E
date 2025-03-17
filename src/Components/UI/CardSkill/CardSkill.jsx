import React from 'react'

export const CardSkill = ({contentTi = "Vacio", content = "Vacio"}) =>
    <div className='bg-[#4B4B4B] p-6 rounded-lg shadow-lg'>
        <h4 className='text-xl font-semibold text-amber-300 mb-2'> {contentTi} </h4>
        <p className='text-gray-300'> {content} </p>
    </div>

