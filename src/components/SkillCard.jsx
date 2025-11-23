import React from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../features/darkMode/darkModeSlice';
import { screenMode } from '../data/constants';

export default function SkillCard({name, list}){
    const darkMode = useSelector(selectDarkMode);
    
    return (
        <div className={`group relative overflow-hidden rounded-2xl w-full md:w-[30%] ${darkMode ? 'bg-slate-900/50 border border-slate-800' : 'bg-white border border-gray-200'} hover-lift backdrop-blur-sm`}>
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <div className={`relative font-bold text-lg py-5 px-6 ${screenMode.highlight.text} capitalize border-b ${darkMode ? 'border-slate-800' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
                    {name}
                </div>
            </div>
            <div className="relative p-6">
                <div className="grid grid-cols-2 gap-3">
                    {
                        list.map((item, idx) => (
                            <div 
                                key={idx} 
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${darkMode ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'} transition-all duration-300 hover:scale-105 hover:shadow-md text-center`}
                                style={{animationDelay: `${idx * 50}ms`}}
                            >
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
