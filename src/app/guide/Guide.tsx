import React, { useState, useEffect } from 'react';

interface GuideData {
    id: number;
    nombre: string;
    texto_adicional: string;
    texto_inicial: string;
    texto_adicional2: string;
    texto_adicional3: string;
    link_reference: string;
}

const GuideAccordion: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [guide, setGuide] = useState<GuideData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/guide');
                const data = await response.json();
                setGuide(data);
            } catch (error) {
                console.error('Error fetching guide data:', error);
            }
        };

        fetchData();
    }, []);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-6xl mx-auto pt-12 p-6">
            {guide.map((faq, index) => (
                <div key={faq.id} className="mb-4 border-b">
                    <button
                        className="text-neutral-800 w-full text-left flex justify-between items-center p-4 focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{faq.nombre}</span>
                        <svg
                            className={`w-6 h-6 transform transition-transform ${
                                activeIndex === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    {activeIndex === index && (
                        <div className="text-neutral-500 dark:text-neutral-300 pb-3 text-justify p-4">
                            <span className="block mb-2 Text-guie">
                                {faq.texto_inicial}
                            </span>
                            <span className="block mb-2 Text-guie">
                                {faq.texto_adicional}
                            </span>
                            <span className="block mb-2 Text-guie">
                                {faq.texto_adicional2}
                            </span>
                            <span className="block mb-2 Text-guie">
                                {faq.texto_adicional3}
                            </span>
                            {faq.link_reference && (
                                <a href={faq.link_reference} target="_blank" rel="noopener noreferrer" className="block mt-2">
                                    {faq.link_reference}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GuideAccordion;
