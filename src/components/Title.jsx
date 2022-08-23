import React from 'react';

export default function Title({title, subtitle, small = false}){
    return (
        <div className="flex flex-col items-center md:block font-bold mb-10">
            <h1 className={`${small? 'text-2xl' : 'text-5xl' } mb-2 capitalize`}>{title}</h1>
            <div className="text-blue-500 uppercase">{subtitle}</div>
          </div>
    )
}