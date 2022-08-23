//import React and Redux
import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentCode } from '../features/langCode/langCodeSlice';
import { selectLangCodes } from '../features/language/languageSlice';
import { selectDarkMode, toggleDarkMode } from '../features/darkMode/darkModeSlice';
import { setLangCode } from '../features/langCode/langCodeSlice';
//import icons
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';
//import constants
import { screenMode } from '../data/constants';

export default function LinksBar() {
    const dispatch = useDispatch();
    const [langOpen, setLangOpen] = useState(false);
    const currLangCode = useSelector(selectCurrentCode);
    const langCodes = useSelector(selectLangCodes);
    const darkMode = useSelector(selectDarkMode);
    
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
        <div className={`fixed right-4 bottom-7 text-4xl ${screenMode.highlight.text} border ${darkMode? `${screenMode.dark.sidebar} ${screenMode.dark.border}`: screenMode.light.sidebar} rounded-2xl p-3 flex flex-col gap-4`}
             style={{zIndex: 9999}}>
            <div className='flex flex-col gap-2'>
                <a href='https://github.com/alecvaluev'><AiOutlineGithub /></a>
                <a href='https://www.linkedin.com/in/aleksandr-valuev-7b668b238/'><AiFillLinkedin /></a>
            </div>

            <div>
                <div onClick={changeDarkMode}>
                    {
                        !darkMode? <FiMoon/> : <FiSun/>
                    }
                </div>
                <div onClick={toggleLangOpen}>
                    <div className={`hover:${screenMode.highlight.text} pointer underline`}
                        >{currLangCode}
                    </div>
                    <div>
                        <div className={`flex absolute right-16 bottom-0 border rounded-xl pointer ${darkMode? `${screenMode.dark.sidebar} ${screenMode.dark.border}`: screenMode.light.sidebar}`}
                            >
                            {langOpen && langCodes.map((code, idx) => (
                            <div key={idx}
                                className={`pointer py-2 px-4 rounded-xl hover:${screenMode.highlight.text} hover:bg-gray-300`} 
                                onClick={() => setNewLangCode(code)}>
                                {code}
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
