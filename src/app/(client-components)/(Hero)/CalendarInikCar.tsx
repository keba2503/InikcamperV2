'use client';

import React, { FC, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import ButtonPrimary from '@/shared/ButtonPrimary';

const CalendarInikCar: FC = () => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        const cssId = 'smoobu-calendar-css-car';

        if (!scriptLoadedRef.current && !document.getElementById(cssId)) {
            const link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://login.smoobu.com/css/singleCalendarWidgetIframe.css';
            document.head.appendChild(link);

            setIsScriptLoaded(true);
            scriptLoadedRef.current = true;
        } else {
            setIsScriptLoaded(true);
        }

        return () => {
            const link = document.getElementById(cssId);
            if (link && document.head.contains(link)) {
                document.head.removeChild(link);
            }
        };
    }, []);

    return (
        <div id="smoobuCalendarIframe" className="flex flex-col items-center justify-center space-y-4">
            <iframe
                className="smallDevices w-full sm:hidden"
                height="540px"
                src="https://login.smoobu.com/es/cockpit/widget/show-calendar-iframe/2156066/e5fc1c0d0e20b69dee0f79ac9145684a9aa11461e5d4daf82e58516a65cf212e"
                title="Smoobu Calendar Car"
            ></iframe>
            <iframe
                className="bigDevices hidden sm:block"
                height="600px"
                width="1000px"
                src="https://login.smoobu.com/es/cockpit/widget/show-calendar-iframe/2156066/e5fc1c0d0e20b69dee0f79ac9145684a9aa11461e5d4daf82e58516a65cf212e"
                title="Smoobu Calendar Car"
            ></iframe>
            <Link href="/inikcar" passHref>
                <ButtonPrimary
                    fontSize="text-sm sm:text-base lg:text-lg font-medium"
                >
                    Reservas
                </ButtonPrimary>
            </Link>
        </div>
    );
};

export default CalendarInikCar;
