import React from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../features/darkMode/darkModeSlice';
import { selectLanguage } from '../features/language/languageSlice';
import { screenMode } from '../data/constants';
import { HiBriefcase, HiLocationMarker, HiCalendar } from 'react-icons/hi';

export default function WorkExperienceCard({ experience }) {
    const darkMode = useSelector(selectDarkMode);
    const language = useSelector(selectLanguage);
    
    const { company, role, location, period, responsibilities, technologies } = experience;
    
    return (
        <div className={`group relative p-8 rounded-2xl ${darkMode ? 'bg-slate-900/50 border border-slate-800' : 'bg-white border border-gray-200'} hover:shadow-2xl transition-all duration-300 mb-8`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <HiBriefcase className="text-2xl text-blue-600"/>
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {company}
                            </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm">
                            <div className={`flex items-center gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                <HiLocationMarker className="text-blue-600"/>
                                <span>{location}</span>
                            </div>
                            <div className={`flex items-center gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                <HiCalendar className="text-blue-600"/>
                                <span>{period}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Responsibilities */}
                <div className="mb-6">
                    <h5 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {language.work_responsibilities}
                    </h5>
                    <ul className="space-y-3">
                        {responsibilities.map((responsibility, idx) => (
                            <li key={idx} className={`flex items-start gap-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2 flex-shrink-0"></div>
                                <span>{responsibility}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Technologies */}
                <div>
                    <h5 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {language.work_technologies}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, idx) => (
                            <span 
                                key={idx} 
                                className={`px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400 border border-blue-800' : 'bg-blue-50 text-blue-700 border border-blue-200'} hover:scale-105 transition-transform`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}