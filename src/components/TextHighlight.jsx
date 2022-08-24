import React from 'react';
import { screenMode } from '../data/constants';

export default function TextHighlight({name, text}){
    return (
        <div className="mb-2 font-bold text-gray-600">
              <span className={`${screenMode.highlight.text} uppercase`}>{name} |</span> {text}
            </div>
    )
}
