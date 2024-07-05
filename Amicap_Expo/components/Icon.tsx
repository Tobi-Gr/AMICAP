import React from 'react';
import { SvgXml } from 'react-native-svg';
import { icons } from './../constants/icons'; 

interface IconProps {
    name: keyof typeof icons;
    width?: number;
    height?: number;
  }

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24 }) => {
  /*const IconSvg = icons[name];
  if (!IconSvg) {
    console.error(`Icon "${name}" does not exist.`);
    return null;
  }
  */

  const xxx = ` <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                </svg>`;
return <SvgXml xml={xxx} />;
  //return <SvgXml xml={IconSvg} width={width} height={height} />;
};

export default Icon;