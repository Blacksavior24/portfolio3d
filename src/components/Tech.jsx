import React from "react";

import { isMobile, isBrowser } from "react-device-detect";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  if(isBrowser)
    return (
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 text-center' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    );
  else{
    return (
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 text-center' key={technology.name}>
            <img src={technology.icon} alt={`${technology.name}`} />
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default SectionWrapper(Tech, "");