'use client';

import React, { FC, useEffect, useState, useRef } from 'react';
import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";

const CalendarInikLight: FC = () => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        const cssId = 'smoobu-calendar-css-light';

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
                src="https://login.smoobu.com/es/cockpit/widget/show-calendar-iframe/2156061/4ea4115f5ff90f7c3c9a0738115d72846da71bd4c02f562b608f1f61c86b0982"
                title="Smoobu Calendar Light"
            ></iframe>
            <iframe
                className="bigDevices hidden sm:block"
                height="600px"
                width="1000px"
                src="https://login.smoobu.com/es/cockpit/widget/show-calendar-iframe/2156061/4ea4115f5ff90f7c3c9a0738115d72846da71bd4c02f562b608f1f61c86b0982"
                title="Smoobu Calendar Light"
            ></iframe>
            <Link href="/iniklight" passHref>
                <ButtonPrimary
                    fontSize="text-sm sm:text-base lg:text-lg font-medium"
                >
                    Reservas
                </ButtonPrimary>
            </Link>
        </div>
    );
};

export default CalendarInikLight;
