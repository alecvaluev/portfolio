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
        <div className={`w-full ${!video && 'md:w-[30%]'} flex`}>
            <div className={` ${screenMode.highlight.shadow} ${video ? 'border-t md:border-none md:w-[50%] md:shadow-none': 'rounded-xl m-2 shadow-lg'}`}
                 style={{zIndex: 1000}}>
                <div>
                    <div className={`flex gap-3 font-bold ${screenMode.highlight.text} text-5xl mt-5 uppercase`}>
                        <span className='hidden md:block text-4xl'><AiOutlineFolder /></span>
                        {name}
                    </div>
                    <div className='md:my-3'><span className='capitalize'>{language.completed}</span> {completed}</div>
                    {
                        video && (
                            <>
                                <div className='md:hidden my-5'>
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
                    <div className={`py-3 inline-block ${darkMode? screenMode.dark.bg: screenMode.light.bg}`}>
                        <TextHighlight name={'Built with'} text={tools.toString().replaceAll(',', '  ')}/>
                    </div>
                    <div className={`flex flex-wrap justify-around ${video && 'md:justify-start'} font-semibold m-3`}>
                        {
                            github && <a href={github} className={`${screenMode.highlight.hover.text} border ${darkMode ? screenMode.dark.border: screenMode.light.border} rounded p-3 hover:border ${screenMode.highlight.hover.border} flex gap-2`}><span className='text-2xl'><AiOutlineGithub/></span> GitHub</a>
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
