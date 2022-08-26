import React from 'react';
import { screenMode } from '../data/constants';

export default function SkillCard({name, list}){
    return (
        <div className={`rounded-2xl m-3 w-[70%] md:w-[30%] shadow-lg ${screenMode.highlight.shadow}`}>
            <div className={`font-bold text-xl py-4 ${screenMode.highlight.bg} rounded-2xl capitalize text-center`}>{name}</div>
            <div className="p-6 font-semibold text-gray-500 flex flex-col gap-1 text-center md:text-left">
                {
                    list.map((item, idx) => <div key={idx}>{item}</div>)
                }
            </div>
        </div>
    )
}
