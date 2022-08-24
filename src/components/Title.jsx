import React from 'react';
import { screenMode } from '../data/constants';

export default function Title({title, subtitle, small = false}){
    return (
        <div className="flex flex-col items-center md:block font-bold mb-10">
            <h1 className={`${small? 'text-2xl' : 'text-5xl' } mb-2 capitalize`}>{title}</h1>
            <div className={`${screenMode.highlight.text} uppercase`}>{subtitle}</div>
          </div>
    )
}
