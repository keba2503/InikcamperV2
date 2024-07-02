'use client';

import React, { useState } from "react";

const PrivacyPolicy: React.FC = () => {
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
                        title="Políticas de privacidad"
                    >
                        Políticas de Privacidad
                    </h1>
                    <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 text-justify">
                        Estas son las políticas de privacidad para nuestros servicios.
                    </span>
                </div>
            </header>
            <div className="max-w-screen-lg mx-auto">
                <div>
                    {[
                        {
                            title: "Recopilación de Información",
                            content: "Recopilamos información personal como nombre, dirección de correo electrónico, número de teléfono y detalles del pago al realizar una reserva.",
                        },
                        {
                            title: "Uso de la Información",
                            content: "Utilizamos la información recopilada para procesar reservas, proporcionar servicios de atención al cliente y enviar comunicaciones relacionadas con el servicio.",
                        },
                        {
                            title: "Protección de Datos",
                            content: "Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados y divulgaciones indebidas.",
                        },
                        {
                            title: "Compartición de Información",
                            content: "No compartimos tu información personal con terceros, excepto cuando es necesario para cumplir con la ley o con proveedores de servicios que ayudan en nuestras operaciones.",
                        },
                        {
                            title: "Derechos del Usuario",
                            content: "Tienes derecho a acceder, rectificar y eliminar tu información personal, así como a oponerte al procesamiento de la misma. Puedes ejercer estos derechos contactándonos directamente.",
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

export default PrivacyPolicy;
