import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux/es/exports';
import { selectLanguage } from '../features/language/languageSlice';
//import icons
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { selectDarkMode } from '../features/darkMode/darkModeSlice';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
//import data
import { screenMode } from '../data/constants';

export default function Header({headerOpen}) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const language = useSelector(selectLanguage);
    const darkMode = useSelector(selectDarkMode);

    const hoverStyle = `${screenMode.highlight.hover.text} transition-colors duration-300 cursor-pointer`;

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Determine active section based on scroll position
            const sections = ['about', 'experience', 'education', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 150;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    
    // Close mobile menu when clicking on a link
    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setShowMobileMenu(false);
        }
    }

    const navLinks = [
        { id: 'about', label: language.headline_about },
        { id: 'experience', label: language.headline_experience },
        { id: 'education', label: language.headline_education },
        { id: 'skills', label: language.headline_skills },
        { id: 'projects', label: language.headline_projects },
        { id: 'contact', label: language.headline_contact }
    ];

    return (
        <header id='header' className="fixed top-0 left-0 right-0 w-full z-50">
            {/* Mobile toggle button */}
            <button 
                className={`block md:hidden fixed top-4 right-4 z-50 p-2.5 rounded-xl transition-all duration-300 backdrop-blur-xl ${
                    darkMode 
                        ? 'bg-slate-800/90 text-slate-200 hover:bg-slate-700/90 border border-slate-700/50' 
                        : 'bg-white/90 text-slate-700 hover:bg-gray-100/90 border border-gray-200/50'
                } ${scrolled ? 'shadow-xl shadow-black/10' : 'shadow-lg'} hover:scale-110 active:scale-95`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                {showMobileMenu ? (
                    <ImCancelCircle className="text-2xl transition-transform duration-300" />
                ) : (
                    <AiOutlineMenu className="text-2xl transition-transform duration-300" />
                )}
            </button>

            {/* Mobile menu overlay */}
            {showMobileMenu && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300"
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Navigation content - always visible on desktop, toggleable on mobile */}
            <nav className={`${showMobileMenu ? 'block' : 'hidden'} md:block relative z-40`}>
                <div className={`flex flex-col md:flex-row md:justify-between md:items-center ${
                    scrolled 
                        ? 'md:px-8 md:py-4' 
                        : 'md:px-6 md:py-6'
                } ${
                    scrolled 
                        ? (darkMode 
                            ? 'bg-gradient-to-b from-slate-950/98 via-slate-950/95 to-slate-950/90 md:from-slate-950/95 md:via-slate-950/90 md:to-slate-950/95' 
                            : 'bg-gradient-to-b from-white/98 via-white/95 to-white/90 md:from-white/95 md:via-white/90 md:to-white/95')
                        : (darkMode 
                            ? 'bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90 md:from-slate-900/80 md:via-slate-800/75 md:to-slate-900/80' 
                            : 'bg-gradient-to-r from-white/90 via-gray-50/85 to-white/90 md:from-white/80 md:via-gray-50/75 md:to-white/80')
                } backdrop-blur-2xl md:backdrop-blur-2xl md:mx-4 md:my-4 md:rounded-full md:shadow-2xl md:border ${
                    darkMode 
                        ? 'md:border-slate-700/60 md:shadow-slate-900/50' 
                        : 'md:border-gray-200/60 md:shadow-gray-200/30'
                } transition-all duration-500 relative overflow-hidden`}>
                    {/* Subtle gradient overlay for depth */}
                    <div className={`absolute inset-0 pointer-events-none ${
                        scrolled 
                            ? 'opacity-0' 
                            : darkMode
                                ? 'bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5'
                                : 'bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30'
                    } md:opacity-100 transition-opacity duration-500`} />
                    {/* Name/Logo */}
                    <div className="px-6 py-4 md:px-0 md:py-0 relative z-10">
                        <a 
                            href="/" 
                            className={`${hoverStyle} group inline-block`}
                            onClick={handleLinkClick}
                        >
                            <p className={`text-lg md:text-xl font-bold tracking-wide group-hover:tracking-wider transition-all duration-300 ${
                                darkMode ? 'text-slate-100' : 'text-slate-900'
                            }`}>
                                {language.full_name}
                            </p>
                        </a>
                    </div>

                    {/* Navigation links and resume button */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 px-6 pb-6 md:px-0 md:pb-0 relative z-10">
                        {/* Navigation links */}
                        <ul className="flex flex-col md:flex-row gap-1 md:gap-6 md:items-center text-sm font-medium">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <li key={link.id} className="relative">
                                        <a 
                                            href={`#${link.id}`} 
                                            className={`group relative block py-2 px-3 md:px-0 rounded-lg md:rounded-none transition-all duration-300 ${
                                                isActive
                                                    ? darkMode
                                                        ? 'text-blue-400'
                                                        : 'text-blue-600'
                                                    : hoverStyle
                                            } ${
                                                darkMode && !isActive
                                                    ? 'hover:bg-slate-800/50'
                                                    : !isActive
                                                    ? 'hover:bg-gray-100/50'
                                                    : ''
                                            }`}
                                            onClick={handleLinkClick}
                                        >
                                            <span className="relative z-10 uppercase tracking-wide">
                                                {link.label}
                                            </span>
                                            {/* Active indicator */}
                                            {isActive && (
                                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full`} />
                                            )}
                                            {/* Hover underline */}
                                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full ${isActive ? 'hidden' : ''}`} />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Resume button */}
                        <a 
                            href="/AleksandrValuevResume.pdf" 
                            target='_blank' 
                            rel="noreferrer"
                            className="self-start md:self-auto"
                            onClick={handleLinkClick}
                        >
                            <div className={`group relative overflow-hidden border-2 px-5 py-2.5 rounded-full ${
                                darkMode 
                                    ? 'border-blue-500/80 hover:border-blue-400' 
                                    : 'border-blue-600/80 hover:border-blue-500'
                            } flex gap-2 items-center text-center transition-all duration-300 hover:shadow-lg ${
                                darkMode 
                                    ? 'hover:shadow-blue-500/30' 
                                    : 'hover:shadow-blue-500/25'
                            } hover:scale-105 active:scale-95`}>
                                <span className={`relative z-10 transition-colors duration-300 group-hover:text-white text-sm font-semibold ${
                                    darkMode ? 'text-slate-200' : 'text-slate-700'
                                }`}>
                                    {language.headline_resume}
                                </span>
                                <span className='relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1'>
                                    <HiOutlineDocumentDownload />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-full" />
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
