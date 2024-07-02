'use client';

import React, { useState } from "react";

const TermsAndConditions: React.FC = () => {
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
                        title="Términos y Condiciones"
                    >
                        Términos y Condiciones
                    </h1>
                    <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 text-justify">
                        Estos son los términos y condiciones generales para nuestros servicios de alquiler de campers.
                    </span>
                </div>
            </header>
            <div className="max-w-screen-lg mx-auto">
                <div>
                    {[
                        {
                            title: "Reservas y Pagos",
                            content: "Las reservas se confirman tras el pago del depósito correspondiente. El saldo restante debe ser pagado 7 días antes de la fecha de inicio del alquiler.",
                        },
                        {
                            title: "Política de Cancelación",
                            content: "Las cancelaciones deben realizarse por escrito. Se aplicarán cargos según la antelación con la que se realice la cancelación.",
                        },
                        {
                            title: "Recogida y Devolución",
                            content: "El vehículo debe ser recogido y devuelto en el lugar y hora acordados. Los retrasos en la devolución pueden incurrir en cargos adicionales.",
                        },
                        {
                            title: "Uso del Vehículo",
                            content: "El vehículo solo debe ser utilizado por el conductor principal y los conductores adicionales autorizados. No se permite subarrendar el vehículo.",
                        },
                        {
                            title: "Responsabilidad del Inquilino",
                            content: "El inquilino es responsable de cualquier daño causado al vehículo durante el período de alquiler, así como de cualquier multa o infracción recibida.",
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

export default TermsAndConditions;
