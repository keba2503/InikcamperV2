'use client';

import React, { useState } from "react";

const GeneralConditions: React.FC = () => {
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
                        title="Condiciones Generales"
                    >
                        Condiciones Generales
                    </h1>
                    <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 text-justify">
                        Estas son las condiciones generales para nuestros servicios de alquiler de campers.
                    </span>
                </div>
            </header>
            <div className="max-w-screen-lg mx-auto">
                <div>
                    {[
                        {
                            title: "Requisitos de Edad",
                            content: "El conductor debe tener al menos 25 años de edad y poseer una licencia de conducir válida con al menos 2 años de experiencia.",
                        },
                        {
                            title: "Uso del Vehículo",
                            content: "El vehículo debe ser utilizado únicamente para fines recreativos. No se permite el uso en competiciones, subarrendamientos o para el transporte de mercancías peligrosas.",
                        },
                        {
                            title: "Kilometraje",
                            content: "Se incluyen 200 kilómetros por día en el precio del alquiler. Los kilómetros adicionales se cobrarán a una tarifa de 0,25 € por kilómetro.",
                        },
                        {
                            title: "Combustible",
                            content: "El vehículo se entrega con el tanque de combustible lleno y debe ser devuelto de la misma manera. Si no es así, se aplicará un cargo por el reabastecimiento de combustible.",
                        },
                        {
                            title: "Seguro",
                            content: "El vehículo está asegurado contra daños a terceros y daños propios con una franquicia de 1000 €. Se puede contratar un seguro adicional para reducir la franquicia.",
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
                                    className={`w-3 h-3 transform transition-transform ${openSection === index ? "rotate-180" : ""}`}
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
                                className={`p-5 ${openSection === index ? "block" : "hidden"}`}
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

export default GeneralConditions;
