import notFound from '../../../assets/404.jpg'

import React from 'react'

export const NotFound = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center p-7">
            <div className="max-w-lg shadow-lg px-6">
                <img
                    className="w-full rounded-lg object-cover"
                    src={notFound}
                    alt="Page Not Found"
                />
            </div>
            <div className="mt-4 text-sm font-semibold text-white sm:max-w-[350px]">
                <h2>
                    La página que estás buscando no está disponible. Por favor, verifica la URL o vuelve al inicio.
                </h2>
            </div>
        </section>
    );
};


