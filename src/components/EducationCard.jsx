import React from 'react';
import { screenMode } from '../data/constants';

export default function EducationCard({startDate, endDate, program, uni_name, uni_address}){
    return (
        <div className="flex flex-col md:flex-row text-gray-600">
            <div className={`${screenMode.highlight.text} font-semibold md:-rotate-90 flex md:block`}>
              <div>{startDate}</div>
              <div className="md:hidden">-</div>
              <div className={`h-[2px] rounded ${screenMode.highlight.bg} hidden md:block`}></div>
              <div>{endDate}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl pb-2 underline italic">{program}</div>
              <div className="font-bold text-xl">{uni_name}</div>
              <div>{uni_address}</div>
            </div>
          </div>
    )
}
