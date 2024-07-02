'use client';

import React, { FC, useState } from "react";
import imagePng from "@/images/travelhero2.png";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ModalWithTabs from "@/app/(client-components)/(Hero)/ModalWithTabs";

declare global {
    interface Window {
        BookingToolIframe: any;
    }
}

export interface SectionHero3Props {
    className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ className = '' }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            className={`nc-SectionHero3 relative ${className}`}
            data-nc-id="SectionHero3"
        >
            <div className="absolute z-10 inset-x-0 top-[10%] sm:top-[15%] text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 lg:space-y-5 xl:space-y-8">
                <span className="sm:text-lg md:text-xl font-semibold text-neutral-900">
                    Alquila campers sin complicaciones
                </span>
                <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] ">
                    Tu aventura sobre ruedas <br /> comienza aquí
                </h2>
                <ButtonPrimary
                    fontSize="text-sm sm:text-base lg:text-lg font-medium"
                    onClick={() => setShowModal(true)}
                >
                    Disponibilidad
                </ButtonPrimary>
            </div>
            <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8 ">
                <Image
                    className="absolute inset-0 object-cover rounded-xl"
                    src={imagePng}
                    alt="hero"
                    priority
                />
            </div>
            {showModal && <ModalWithTabs onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default SectionHero3;
