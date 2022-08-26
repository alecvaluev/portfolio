import React from 'react';
import { screenMode } from '../data/constants';

export default function TextHighlight({name, text}){
    return (
        <div className="text-gray-600">
              <span className={`${screenMode.highlight.text} uppercase font-bold `}>{name} |</span> {text}
            </div>
    )
}
