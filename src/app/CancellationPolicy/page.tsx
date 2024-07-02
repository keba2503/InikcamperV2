'use client'

import React, { useState } from "react";

const CancellationPolicy: React.FC = () => {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className="container mx-auto my-8 px-4 lg:px-8">
            <header className="rounded-3xl mb-8">
                <div className="max-w-screen-lg mx-auto space-y-5">
                    <h1
                        className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100"
                        title="Políticas de cancelación de alquiler de campers"
                    >
                        Políticas de Cancelación
                    </h1>
                    <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 text-justify">
                        Estas son las políticas de cancelación para nuestros servicios de alquiler de campers.
                    </span>
                </div>
            </header>
            <div className="max-w-screen-lg mx-auto">
                <div>
                    {[
                        {
                            title: "Cancelación con más de 30 días de antelación",
                            content: "Si cancelas con más de 30 días de antelación a la fecha de inicio del alquiler, recibirás un reembolso completo del monto pagado hasta la fecha.",
                        },
                        {
                            title: "Cancelación entre 15 y 30 días de antelación",
                            content: "Si cancelas entre 15 y 30 días de antelación a la fecha de inicio del alquiler, se te reembolsará el 50% del monto pagado hasta la fecha.",
                        },
                        {
                            title: "Cancelación con menos de 15 días de antelación",
                            content: "Si cancelas con menos de 15 días de antelación a la fecha de inicio del alquiler, no se realizará ningún reembolso.",
                        },
                        {
                            title: "Cancelación por causas de fuerza mayor",
                            content: "En caso de cancelación por causas de fuerza mayor (por ejemplo, desastres naturales, pandemias), evaluaremos cada caso de forma individual y buscaremos la mejor solución posible para ambas partes.",
                        },
                    ].map((section, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                                onClick={() => toggleSection(index)}
                                aria-expanded={openSection === index}
                            >
                                <span>{section.title}</span>
                                <svg
                                    className={`w-3 h-3 transform transition-transform ${openSection === index ? "rotate-180" : ""
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`p-5 ${openSection === index ? "block" : "hidden"
                                }`}
                            >
                                <p className="text-gray-500 dark:text-gray-400">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CancellationPolicy;
