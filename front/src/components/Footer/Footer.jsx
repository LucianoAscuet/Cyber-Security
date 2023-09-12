import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

import './Footer.css';

const navigation = {
    main: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Accessibility', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com',
            icon: <FaFacebook />,
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com',
            icon: <FaInstagram />,
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: <FaTwitter />,
        },
        {
            name: 'GitHub',
            href: 'https://github.com', 
            icon: <FaGithub />,
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com', 
            icon: <FaYoutube />,
        },
    ],
};

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <nav aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name}>
                            <a href={item.href}>{item.name}</a>
                        </div>
                    ))}
                </nav>
                <div className="social-links">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                            <span className="sr-only">{item.name}</span>
                        </a>
                    ))}
                </div>
                <p className="copyright">&copy; 2023 Smahh. All rights reserved.</p>
            </div>
        </footer>
    );
}