'use client'

import React, { useState } from "react";

const PaymentMethods: React.FC = () => {
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
                        title="Métodos de Pago"
                    >
                        Métodos de Pago
                    </h1>
                    <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 text-justify">
                        Estos son los métodos de pago disponibles.
                    </span>
                </div>
            </header>
            <div className="max-w-screen-lg mx-auto">
                <div>
                    {[
                        {
                            title: "Tarjeta de Crédito/Débito",
                            content: "Aceptamos todas las principales tarjetas de crédito y débito, incluidas Visa, MasterCard y American Express. Las transacciones son seguras y cifradas.",
                        },
                        {
                            title: "PayPal",
                            content: "Puedes pagar fácilmente a través de PayPal. Simplemente selecciona PayPal como método de pago durante el proceso de pago.",
                        },
                        {
                            title: "Transferencia Bancaria",
                            content: "Puedes optar por pagar mediante transferencia bancaria. Los detalles de la cuenta se proporcionarán al momento de la confirmación de la reserva.",
                        },
                        {
                            title: "Pago en Efectivo",
                            content: "El pago en efectivo es aceptado al momento de la recogida del vehículo. Por favor, asegúrate de traer la cantidad exacta.",
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

export default PaymentMethods;
