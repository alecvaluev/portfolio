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

export default function ProjectCard({name, description, video, github, website, tools}) {
    const darkMode = useSelector(selectDarkMode);
    
    return (
        <div className={`${video ? 'md:w-full': 'md:w-[33%]'} flex`}>
            <div className={`rounded-xl m-2 shadow-lg ${screenMode.highlight.shadow} ${video && 'md:w-[50%] md:shadow-none'}`}
                 style={{zIndex: 1000}}>
                <div className ='p-5'>
                    <div className={`flex gap-3 font-bold ${screenMode.highlight.text} text-2xl my-3 capitalize w-[25vw]`}>
                        <span className='text-4xl'><AiOutlineFolder /></span>
                        {name}
                    </div>
                    {
                        video && (
                            <div className='rounded overflow-hidden'>
                                <div className={`${video && `${screenMode.highlight.md.bg}`} max-h-40 p-5`}>
                                    <p className='text-ellipsis overflow-hidden'>{description}</p>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
                <div className='px-5'>
                    <div className={`py-3 border-t-4 border-b-4 inline-block ${darkMode? screenMode.dark.bg: screenMode.light.bg}`}>
                        <TextHighlight name={'Built with'} text={tools.toString().replaceAll(',', '  ')} />
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
