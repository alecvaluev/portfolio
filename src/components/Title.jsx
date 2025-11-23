import React from 'react';
import { screenMode } from '../data/constants';

export default function Title({title, subtitle, small = false}){
    return (
        <div className="flex flex-col items-center md:items-start mb-12 animate-fade-in">
            <h1 className={`${small? 'text-3xl md:text-4xl' : 'text-4xl md:text-6xl'} font-black capitalize tracking-tight leading-tight mb-3`}>
                {title}
            </h1>
            <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <div className={`${screenMode.highlight.text} uppercase tracking-widest text-sm font-semibold`}>
                    {subtitle}
                </div>
            </div>
        </div>
    )
}
