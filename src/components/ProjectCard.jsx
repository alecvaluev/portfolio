//import React and Redux
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectDarkMode } from '../features/darkMode/darkModeSlice';
//import icons
import { AiOutlineGithub, AiOutlineFolder } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
//import constants
import { screenMode } from '../data/constants';
import { selectLanguage } from '../features/language/languageSlice';

export default function ProjectCard({prj}) {
    const darkMode = useSelector(selectDarkMode);
    const language = useSelector(selectLanguage);

    const { name, description, video, github, website, tools, completed } = prj;

    return (
        <div className={`w-full ${video ? 'flex' : ''} group`}>
            <div className={`${video ? 'w-[100%] md:w-[55%]' : `w-full ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/80 border-gray-200'} border rounded-2xl p-6 hover-lift backdrop-blur-sm h-full`}`}
                 style={{zIndex: 100}}>

                 {/* name, vid, desc */}   
                <div className={`${!video && 'flex flex-col h-full'}`}>
                    <div className={`flex items-center gap-3 ${video ? 'font-bold text-4xl md:text-5xl mb-4' : 'text-xl md:text-2xl mb-3'} ${screenMode.highlight.text}`}>
                        <span className='text-3xl md:text-4xl opacity-75 group-hover:opacity-100 transition-opacity'><AiOutlineFolder /></span>
                        <span className="font-bold tracking-tight">{name}</span>
                    </div>
                    <div className={`${video ? 'mb-4' : 'mb-3'} text-sm ${darkMode ? screenMode.dark.secondary : screenMode.light.secondary}`}><span className='font-semibold'>{language.completed}</span> {completed}</div>
                    {
                        video ? (
                            <>
                                <div className='md:hidden my-8 rounded-xl overflow-hidden shadow-2xl'>
                                    <video src={video}
                                        alt=''
                                        className='w-full h-auto'
                                        style={{objectFit: 'cover'}}
                                        loop
                                        autoPlay
                                        muted
                                        />
                                </div>
                                <div className='rounded-xl overflow-hidden mb-6'>
                                    <div className={`${darkMode ? 'bg-slate-800/50' : 'bg-gray-50'} p-4 md:p-5 rounded-xl`}>
                                        <p className={`leading-relaxed ${darkMode ? screenMode.dark.secondary : screenMode.light.secondary}`}>{description}</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            description && (
                                <div className="mb-4">
                                    <p className={`text-sm leading-relaxed ${darkMode ? screenMode.dark.secondary : screenMode.light.secondary}`}>{description}</p>
                                </div>
                            )
                        )
                    }
                    
                    <div className={`${video ? 'py-4' : 'py-3 mt-auto'}`}>
                        {video && <span className={`text-sm font-semibold ${darkMode ? screenMode.dark.secondary : screenMode.light.secondary} block mb-2`}>{language.built_with}</span>}
                        <div className="flex flex-wrap gap-2">
                            {tools.map((tool, idx) => (
                                <span key={idx} className={`px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-700'} hover:scale-105 transition-transform`}>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`flex flex-wrap gap-4 ${video ? 'md:justify-start mt-6' : 'mt-auto pt-4'}`}>
                    {
                        github && 
                            <a href={github} 
                                className={`group flex items-center gap-2 px-4 py-2 rounded-full border-2 ${darkMode ? 'border-slate-700 hover:border-blue-500' : 'border-gray-300 hover:border-blue-600'} transition-all duration-300 hover:shadow-lg hover:scale-105`}
                                >
                                    <span className='text-xl group-hover:rotate-12 transition-transform duration-300'><AiOutlineGithub/></span> 
                                    <span className={`${!video && 'hidden md:inline'} text-sm font-medium`}>GitHub</span>
                            </a>
                    }
                    {
                        website && 
                            <a href={website} 
                                className={`group flex items-center gap-2 px-4 py-2 rounded-full border-2 ${darkMode ? 'border-slate-700 hover:border-purple-500' : 'border-gray-300 hover:border-purple-600'} transition-all duration-300 hover:shadow-lg hover:scale-105`}
                                >
                                    <span className='text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300'><FaExternalLinkAlt/></span> 
                                    <span className={`${!video && 'hidden md:inline'} text-sm font-medium`}>Live Demo</span>
                            </a>
                    }                        
                </div> 
            </div>
            {
                video && (
                    <div className='hidden md:flex place-items-center relative' 
                        style={{marginLeft: '-80px'}}
                        >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                            <video src={video}
                                alt=''
                                className='h-[280px] w-auto object-cover group-hover:scale-105 transition-transform duration-700'
                                loop
                                autoPlay
                                muted
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}