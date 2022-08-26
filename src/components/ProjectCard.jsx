//import React and Redux
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectDarkMode } from '../features/darkMode/darkModeSlice';
//import components
import TextHighlight from './TextHighlight';
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
        <div className={`w-full ${!video && 'md:w-[35%]'} flex`}>
            <div className={`w-[100%] ${screenMode.highlight.shadow} ${video ? 'border-t md:border-none md:w-[50%] md:shadow-none': 'rounded-xl m-2 shadow-lg p-3'}`}
                 style={{zIndex: 1000}}>
                <div>
                    <div className={`flex gap-3 ${video ? 'font-bold text-5xl mt-8' : 'text-2xl'} ${screenMode.highlight.text} uppercase`}>
                        <span className='hidden md:block text-4xl'><AiOutlineFolder /></span>
                        {name}
                    </div>
                    <div className={`${video && 'my-3'}`}><span className='capitalize'>{language.completed}</span> {completed}</div>
                    {
                        video && (
                            <>
                                <div className='md:hidden my-8'>
                                    <video src={video}
                                        alt=''
                                        className='w-full'
                                        style={{objectFit: 'cover'}}
                                        loop
                                        autoPlay
                                        muted
                                        />
                                </div>
                                <div className='rounded overflow-hidden'>
                                    <div className={`${video && `${screenMode.highlight.md.bg}`} md:p-3`}>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    
                </div>
                <div>
                    <div className={`${video ? 'py-6' : 'py-2'} inline-block ${darkMode? screenMode.dark.bg: screenMode.light.bg}`}>
                        <TextHighlight name={'Built with'} text={tools.toString().replaceAll(',', '  ')}/>
                    </div>
                    <div className={`flex flex-wrap justify-around ${video ? 'md:justify-start md:my-4': 'md:my-0'} font-semibold mx-3 my-8`}>
                        {
                            github && <a href={github} className={`${screenMode.highlight.hover.text} border ${darkMode ? screenMode.dark.border: screenMode.light.border} rounded p-3 hover:border ${screenMode.highlight.hover.border} flex gap-2`}><span className='text-2xl'><AiOutlineGithub/></span> <span className=''>GitHub</span></a>
                        }
                        {
                            website && <a href={website} className={`${screenMode.highlight.hover.text} border ${darkMode ? screenMode.dark.border: screenMode.light.border} rounded p-3 hover:border ${screenMode.highlight.hover.border} flex gap-2`}><span className='text-2xl'><FaExternalLinkAlt/></span> Web App</a>
                        }                        
                    </div> 
                </div>
            </div>
            {
                video && (
                    <div className='hidden md:flex place-items-center' 
                        style={{marginLeft: '-60px'}}
                        >
                        <video src={video}
                            alt=''
                            className='h-[250px]'
                            style={{objectFit: 'cover'}}
                            loop
                            autoPlay
                            muted
                         />
                    </div>
                )
            }
        </div>
    )
}
