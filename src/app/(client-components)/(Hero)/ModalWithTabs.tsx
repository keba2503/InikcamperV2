'use client';

import React, { useState, FC } from 'react';
import CalendarInikDark from "@/app/(client-components)/(Hero)/CalendarInikDark";
import CalendarInikCar from "@/app/(client-components)/(Hero)/CalendarInikCar";
import CalendarInikLight from "@/app/(client-components)/(Hero)/CalendarInikLight";
import { XMarkIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

const ModalWithTabs: FC<{ onClose: () => void }> = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('inikDark');

    const tabClasses = (tabName: string) =>
        `inline-flex items-center justify-center p-4 border-b-2 ${
            activeTab === tabName ? 'border-[rgb(173,119,55)] text-[rgb(173,119,55)]' : 'border-transparent hover:text-[rgb(173,119,55)] hover:border-[rgb(173,119,55)] group'
        } transition-all duration-300`;

    const iconClasses = (tabName: string) =>
        `w-5 h-5 me-2 ${
            activeTab === tabName ? 'text-[rgb(173,119,55)]' : 'text-gray-400 group-hover:text-[rgb(173,119,55)]'
        } transition-all duration-300`;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full mx-4 my-8 overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Disponibilidad</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                    Haz clic en las pestañas a continuación para ver la disponibilidad de cada camper.
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li className="me-2">
                            <button
                                onClick={() => setActiveTab('inikDark')}
                                className={tabClasses('inikDark')}
                            >
                                <CalendarDaysIcon className={iconClasses('inikDark')} />
                                InikDark
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                onClick={() => setActiveTab('inikLight')}
                                className={tabClasses('inikLight')}
                            >
                                <CalendarDaysIcon className={iconClasses('inikLight')} />
                                InikLight
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                onClick={() => setActiveTab('inikCar')}
                                className={tabClasses('inikCar')}
                            >
                                <CalendarDaysIcon className={iconClasses('inikCar')} />
                                InikCar
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="p-4">
                    {activeTab === 'inikDark' && <CalendarInikDark />}
                    {activeTab === 'inikLight' && <CalendarInikLight />}
                    {activeTab === 'inikCar' && <CalendarInikCar />}
                </div>
            </div>
        </div>
    );
};

export default ModalWithTabs;
