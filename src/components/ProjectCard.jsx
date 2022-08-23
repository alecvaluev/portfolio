import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { AiOutlineGithub, AiOutlineFolder } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { selectDarkMode } from '../features/darkMode/darkModeSlice';
import TextHighlight from './TextHighlight';

export default function ProjectCard({name, description, image, github, website, tools}) {
    const darkMode = useSelector(selectDarkMode);
    
    return (
        <div className={`${image ? 'md:w-full': 'md:w-[33%]'} flex`}>
            <div className={`rounded-xl m-2 shadow-lg shadow-blue-500/50 ${image && 'md:w-[50%] md:shadow-none'}`}
                 style={{zIndex: 1000}}>
                <div className ='p-5'>
                    <div className='flex gap-3 font-bold text-blue-500 text-2xl mb-3 capitalize'>
                        <span className='text-4xl'><AiOutlineFolder /></span>
                        {name}
                    </div>
                    <div className='rounded overflow-hidden'>
                        <div className={`${image && 'md:bg-blue-500'} max-h-40 p-5`}>
                            <p className='text-ellipsis overflow-hidden'>{description}</p>
                        </div>
                    </div>
                </div>
                <div className='px-5'>
                    <div className={`py-3 border-t-4 border-b-4 inline-block ${darkMode? 'bg-slate-900': 'bg-white'}`}>
                        <TextHighlight name={'Built with'} text={tools.toString().replaceAll(',', '  ')} />
                    </div>
                    <div className={`flex flex-wrap justify-around ${image && 'md:justify-start'} font-semibold m-3`}>
                        {
                            github && <a href={github} className={`hover:text-blue-500 border ${darkMode ? 'border-slate-900': 'border-white'} rounded p-3 hover:border hover:border-blue-500 flex gap-2`}><span className='text-2xl'><AiOutlineGithub/></span> GitHub</a>
                        }
                        {
                            website && <a href={website} className={`hover:text-blue-500 border ${darkMode ? 'border-slate-900': 'border-white'} rounded p-3 hover:border hover:border-blue-500 flex gap-2`}><span className='text-2xl'><FaExternalLinkAlt/></span> Web App</a>
                        }                        
                    </div> 
                </div>
            </div>
            {
                image && (
                    <div className='hidden md:flex place-items-center grayscale hover:grayscale-0 hover:ease-in-out hover:duration-300' 
                        style={{marginLeft: '-60px'}}
                        >
                        <img src={image}
                            alt=''
                            className='h-[250px]'
                            style={{objectFit: 'cover'}}
                         />
                    </div>
                )
            }
        </div>
    )
}