import React from "react";

const LegalLinks: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center mt-4 gap-4">
            <a href="/TermsAndConditions" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white">
                Términos y condiciones de pago
            </a>
            <a href="/PaymentMethods" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white">
                Método de pago
            </a>
            <a href="/PrivacyPolicy" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white">
                Política de privacidad
            </a>
            <a href="/CancellationPolicy" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white">
                Política de cancelación
            </a>
            <a href="/GeneralConditions" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white">
                Condiciones generales
            </a>
        </div>
    );
};

export default LegalLinks;
