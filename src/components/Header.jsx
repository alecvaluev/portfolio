import React, {useState} from 'react';
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
    const [showHeader, setShowHearder] = useState(headerOpen);
    const [scrolled, setScrolled] = useState(false);
    const language = useSelector(selectLanguage);
    const darkMode = useSelector(selectDarkMode);

    const hoverStyle = `${screenMode.highlight.hover.text} transition-colors duration-300 cursor-pointer`;

    const changeShowHeader = () =>{
        setShowHearder(!showHeader);
    }

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div id='header' className={`fixed ${scrolled ? (darkMode ? 'bg-slate-950/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md') : 'bg-transparent'} w-full transition-all duration-300`}
             style={{opacity: 0, transform: 'translateX(50vw)',zIndex: 9999}}>
            {/* toggle button */}
            <div className='block md:hidden m-2 ml-4 pt-3 text-2xl transition-transform duration-300 hover:scale-110'
                onClick={changeShowHeader}>
                {showHeader? <ImCancelCircle className="rotate-0 transition-transform duration-300"/> : <AiOutlineMenu className="rotate-0 transition-transform duration-300"/>}
            </div>
            {
                showHeader && <div className={`flex flex-col md:flex-row md:justify-between ${scrolled ? '' : (darkMode ? 'md:bg-slate-900/80' : 'md:bg-white/80')} md:backdrop-blur-lg md:ml-20 md:my-8 uppercase font-semibold p-4 md:p-5 border-t border-b ${darkMode ? 'border-slate-700' : 'border-gray-200'} md:rounded-full shadow-2xl transition-all duration-500 animate-slide-in`}>
                    {/* left part */}
                    <div className="pl-5 hidden md:block text-lg">
                        <a href="/" className={`${hoverStyle} group`}>
                            <p className='align-middle w-max pl-8 font-bold tracking-wide group-hover:tracking-wider transition-all duration-300'>{language.full_name}</p>
                        </a>
                    </div>
                    {/* right part */}
                    <div className="flex flex-col md:flex-row gap-3 md:gap-12 place-items-center">
                        {/* section links */}
                        <ul className="flex flex-col md:flex-row gap-2 md:gap-6 place-items-center text-sm">
                            <a href='#about' className="group"><li className={`${hoverStyle} relative py-2`}>{language.headline_about}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span></li></a>
                            <a href='#experience' className="group"><li className={`${hoverStyle} relative py-2`}>{language.headline_experience}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span></li></a>
                            <a href='#education' className="group"><li className={`${hoverStyle} relative py-2`}>{language.headline_education}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span></li></a>
                            <a href='#skills' className="group"><li className={`${hoverStyle} relative py-2`}>{language.headline_skills}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span></li></a>
                            <a href='#projects' className="group"><li className={`${hoverStyle} relative py-2`}>{language.headline_projects}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span></li></a>
                            <a href='#contact' className="group"><li className={`${hoverStyle} relative py-2`}>{language.headline_contact}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span></li></a>
                        </ul>
                        {/* resume */}
                        <a href="/AleksandrValuevResume.pdf" target='_blank' rel="noreferrer">
                            <div className={`group relative overflow-hidden border-2 px-5 py-3 rounded-full ${darkMode ? 'border-blue-500' : 'border-blue-600'} flex gap-2 items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105`}>
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-sm font-semibold">{language.headline_resume}</span>
                                <span className='relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1'><HiOutlineDocumentDownload/></span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            </div>
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}
