'use client'

import React, { FC, useEffect } from 'react';

const Booking: FC = () => {
    useEffect(() => {
        const scriptId = 'booking-tool-script';

        // Verificar si el script ya está presente
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId; // Asignar un id al script
            script.type = 'text/javascript';
            script.src = 'https://login.smoobu.com/js/Settings/BookingToolIframe.js';
            script.async = true;
            script.onload = () => {
                if (window.BookingToolIframe) {
                    window.BookingToolIframe.initialize({
                        url: 'https://login.smoobu.com/es/booking-tool/iframe/765914',
                        baseUrl: 'https://login.smoobu.com',
                        target: '#apartmentIframeAll'
                    });
                }
            };
            document.body.appendChild(script);
        }

        return () => {
            const script = document.getElementById(scriptId);
            if (script && document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="w-full max-w-screen-lg mx-auto mt-4">
            <div id="apartmentIframeAll" className="w-full max-w-screen-lg mx-auto mt-4"></div>
        </div>
    );
};

export default Booking;
