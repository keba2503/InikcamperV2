'use client';

import React, { FC, useEffect, useState, useRef } from 'react';
import Link from "next/link";
import ButtonPrimary from "@/shared/ButtonPrimary";

const CalendarInikDark: FC = () => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        const cssId = 'smoobu-calendar-css';

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
        <div id="smoobuCalendarIframe" className="flex flex-col items-center justify-center">
            <iframe
                className="smallDevices w-full sm:hidden"
                height="540px"
                src="https://login.smoobu.com/es/cockpit/widget/show-calendar-iframe/1998779/4b187379eb5cb4626d0e1515f6d40173f0bfb73056320bfbb9d1bd96773a9125"
                title="Smoobu Calendar"
            ></iframe>
            <iframe
                className="bigDevices hidden sm:block"
                height="600px"
                width="1000px"
                src="https://login.smoobu.com/es/cockpit/widget/show-calendar-iframe/1998779/4b187379eb5cb4626d0e1515f6d40173f0bfb73056320bfbb9d1bd96773a9125"
                title="Smoobu Calendar"
            ></iframe>
            <Link href="/inikdark" passHref>
                <ButtonPrimary
                    fontSize="text-sm sm:text-base lg:text-lg font-medium"
                >
                    Reservas
                </ButtonPrimary>
            </Link>
        </div>
    );
};

export default CalendarInikDark;
