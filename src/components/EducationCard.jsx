import React from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../features/darkMode/darkModeSlice';
import { screenMode } from '../data/constants';

export default function EducationCard({startDate, endDate, program, uni_name, uni_address}){
    const darkMode = useSelector(selectDarkMode);
    
    return (
        <div className={`group relative p-8 rounded-2xl ${darkMode ? 'bg-slate-900/50 border border-slate-800' : 'bg-white border border-gray-200'} hover:shadow-2xl transition-all duration-300`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex flex-col md:flex-row gap-8">
                <div className="md:min-w-[140px]">
                    <div className={`inline-flex md:flex md:flex-col items-center md:items-start gap-2 px-4 py-2 rounded-full md:rounded-lg ${darkMode ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20' : 'bg-gradient-to-r from-blue-600/10 to-purple-600/10'}`}>
                        <span className="font-semibold text-sm">{startDate}</span>
                        <span className="text-xs">—</span>
                        <span className="font-semibold text-sm">{endDate}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {program}
                    </h3>
                    <div className={`text-xl font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                        {uni_name}
                    </div>
                    <div className={`text-sm ${darkMode ? screenMode.dark.secondary : screenMode.light.secondary} flex items-center gap-2`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {uni_address}
                    </div>
                </div>
            </div>
        </div>
    )
}
