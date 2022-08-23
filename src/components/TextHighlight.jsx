import React from 'react';

export default function TextHighlight({name, text}){
    return (
        <div className="mb-2 font-bold text-gray-600">
              <span className="text-blue-500 uppercase">{name} |</span> {text}
            </div>
    )
}