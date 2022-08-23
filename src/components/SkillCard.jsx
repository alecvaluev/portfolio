import React from 'react';

export default function SkillCard({name, list}){
    return (
        <div className=" rounded-2xl m-3 w-[90%] md:w-[30%] shadow-lg shadow-blue-500/50">
            <div className="font-bold text-xl py-4 bg-blue-500 rounded-2xl capitalize text-center">{name}</div>
            <div className="p-6 font-semibold text-gray-500 flex flex-col gap-1 text-center md:text-left">
                {
                    list.map((item, idx) => <div key={idx}>{item}</div>)
                }
            </div>
        </div>
    )
}