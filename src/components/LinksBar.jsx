//import React and Redux
import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentCode } from '../features/langCode/langCodeSlice';
import { selectLangCodes } from '../features/language/languageSlice';
import { selectDarkMode, toggleDarkMode } from '../features/darkMode/darkModeSlice';
import { setLangCode } from '../features/langCode/langCodeSlice';
//import others
import ReactAnime from 'react-animejs';
//import icons
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';
//import constants
import { screenMode, gitHubUrl, linkedInUrl } from '../data/constants';

export default function LinksBar() {
    const dispatch = useDispatch();
    const [langOpen, setLangOpen] = useState(false);
    const currLangCode = useSelector(selectCurrentCode);
    const langCodes = useSelector(selectLangCodes);
    const darkMode = useSelector(selectDarkMode);
    const { Anime } = ReactAnime;
    
    const setNewLangCode = (code) => {
        dispatch(setLangCode(code));
    }
    const toggleLangOpen = () => {
        setLangOpen(!langOpen);
    }
    const changeDarkMode = () => {
        dispatch(toggleDarkMode());
    }
    useEffect(() => {}, [darkMode]);

    return (
        <Anime initial={[
            {
              targets: '#linkbar',
              opacity: 1,
              translateX: 0,
              easing: "easeInOutQuad",
              duration: 2000,
              delay: 2500
            }
            ]}>
            <div id='linkbar'
                className={`fixed right-6 bottom-8 ${darkMode ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-gray-200'} backdrop-blur-md border rounded-2xl p-4 flex flex-col gap-4 shadow-2xl`}
                style={{opacity: 0, transform: 'translateX(50px)',zIndex: 9999}}
                >
                <div className='flex flex-col gap-3'>
                    <a href={gitHubUrl} 
                       className="group relative p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-300">
                        <AiOutlineGithub className="text-2xl group-hover:scale-110 transition-transform duration-300"/>
                        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
                    </a>
                    <a href={linkedInUrl}
                       className="group relative p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-300">
                        <AiFillLinkedin className="text-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300"/>
                        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
                    </a>
                </div>

                <div className={`border-t ${darkMode ? 'border-slate-700' : 'border-gray-200'} pt-3`}>
                    <div onClick={changeDarkMode}
                        className='group relative p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-300 cursor-pointer'>
                        <div className="text-2xl group-hover:rotate-180 transition-transform duration-500">
                            {!darkMode ? <FiMoon className="text-slate-700"/> : <FiSun className="text-yellow-400"/>}
                        </div>
                        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {!darkMode ? 'Dark Mode' : 'Light Mode'}
                        </span>
                    </div>
                    
                    <div className="relative mt-3">
                        <div onClick={toggleLangOpen}
                            className='group p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-300 cursor-pointer'>
                            <div className="text-sm font-bold uppercase tracking-wider">{currLangCode}</div>
                        </div>
                        {langOpen && (
                            <div className={`absolute right-full mr-2 top-0 flex gap-1 ${darkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md border ${darkMode ? 'border-slate-700' : 'border-gray-200'} rounded-xl p-2 shadow-xl animate-slide-in`}>
                                {langCodes.map((code, idx) => (
                                    <div key={idx}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium uppercase cursor-pointer transition-all duration-300 
                                        ${currLangCode === code 
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                                            : `${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}`} 
                                        onClick={() => setNewLangCode(code)}>
                                        {code}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Anime>    
    )
}
