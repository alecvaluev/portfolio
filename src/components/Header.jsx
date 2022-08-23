import React, {useState} from 'react';
import { useSelector } from 'react-redux/es/exports';
import { selectLanguage } from '../features/language/languageSlice';
//import icons
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { selectDarkMode } from '../features/darkMode/darkModeSlice';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
//import data
import resume  from '../data/resume.pdf';
import { screenMode } from '../data/constants';

export default function Header({headerOpen}) {
    const [showHeader, setShowHearder] = useState(headerOpen);
    const language = useSelector(selectLanguage);
    const darkMode = useSelector(selectDarkMode);

    const hoverStyle = `hover:${screenMode.highlight.text} pointer`;

    const changeShowHeader = () =>{
        setShowHearder(!showHeader);
    }

    return (
        <div className={`fixed ${darkMode? screenMode.dark.bg :screenMode.light.bg} md:bg-transparent w-full`}
             style={{zIndex: 9999}}>
            {/* toggle button */}
            <div className='block md:hidden m-2 ml-4 pt-3'
                onClick={changeShowHeader}>
                {showHeader? <ImCancelCircle/> : <AiOutlineMenu/>}
            </div>
            {
                showHeader && <div className={`flex flex-col md:flex-row md:justify-between ${darkMode? screenMode.dark.bg :screenMode.light.bg} md:ml-20 md:my-10 uppercase font-bold p-3 border-t border-b md:rounded-l-full shadow-xl`}>
                    {/* left part */}
                    <div className="pl-5 hidden md:block text-xl">
                        <a href="/" className={hoverStyle}>
                            <p className='align-middle w-min pl-8'>{language.full_name}</p>
                        </a>
                    </div>
                    {/* right part */}
                    <div className="flex flex-col md:flex-row gap-3 md:gap-12 place-items-center">
                        {/* section links */}
                        <ul className="flex flex-col md:flex-row gap-3 md:gap-4 place-items-center">
                            <a href='#about'><li className={hoverStyle}>{language.headline_about}</li></a>
                            <a href='#education'><li className={hoverStyle}>{language.headline_education}</li></a>
                            <a href='#skills'><li className={hoverStyle}>{language.headline_skills}</li></a>
                            <a href='#projects'><li className={hoverStyle}>{language.headline_projects}</li></a>
                            <a href='#contact'><li className={hoverStyle}>{language.headline_contact}</li></a>
                        </ul>
                        {/* resume */}
                        <a href={resume} target='_blank' rel="noreferrer">
                            <div className={`${hoverStyle} border-2 px-5 py-3 rounded-xl hover:${screenMode.highlight.border} flex gap-1 text-center`}>{language.headline_resume} <span className='text-3xl'><HiOutlineDocumentDownload/></span></div>
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}
