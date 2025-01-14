'use client';

import React from 'react';
import {
    QuestionMarkCircleIcon,
    BookOpenIcon,
    HomeIcon,
    PhotoIcon,
    ArrowLeftOnRectangleIcon,
    CogIcon,
    StarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {VideoCameraIcon} from "@heroicons/react/20/solid";

const links = [
    {name: 'Home', href: '/admin', icon: HomeIcon},
    {name: 'Secciones configurables', href: '/admin/config', icon: CogIcon},
    {name: 'Guía del huésped', href: '/admin/guide', icon: BookOpenIcon},
    {name: 'FAQ', href: '/admin/faq', icon: QuestionMarkCircleIcon},
    {name: 'Blog', href: '/admin/blog', icon: BookOpenIcon},
    {name: 'Ofertas', href: '/admin/offer', icon: BookOpenIcon},
    {name: 'Reseñas', href: '/admin/review', icon: StarIcon},
    {name: 'Galeria', href: '/admin/gallery', icon: PhotoIcon},
    {name: 'Galeria en Ofertas', href: '/admin/offerGallery', icon: PhotoIcon},
    {name: 'Imagenes Home', href: '/admin/hero', icon: PhotoIcon},
    {name: 'Videos', href: '/admin/videos', icon: VideoCameraIcon},
    {name: 'Vista del cliente', href: '/', icon: ArrowLeftOnRectangleIcon},
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
                        ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}
                        `}
                    >
                        <LinkIcon className="w-6"/>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
