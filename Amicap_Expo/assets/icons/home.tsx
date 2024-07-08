import * as React from 'react';
import Svg, { Path, Defs, ClipPath, Rect } from 'react-native-svg';

interface HomeSvgProps {
  width?: number;
  height?: number;
  fill?: string;
}

const HomeSvg: React.FC<HomeSvgProps> = ({ width = 24, height = 24, fill = '#000000' }) => (
  <Svg width={width} height={height} viewBox="0 0 37 37">
    <Defs>
      <ClipPath id="clip0">
        <Rect width={width} height={height} fill={fill} />
      </ClipPath>
    </Defs>
    <Path
      d="M35.15 31.45V18.994C35.15 17.9902 34.9458 16.997 34.5499 16.0747C34.1539 15.1524 33.5745 14.3203 32.8468 13.629L21.0493 2.42351C20.3617 1.77025 19.4494 1.40601 18.5009 1.40601C17.5525 1.40601 16.6402 1.77025 15.9526 2.42351L4.15326 13.629C3.42556 14.3203 2.84611 15.1524 2.45015 16.0747C2.05419 16.997 1.85001 17.9902 1.85001 18.994V31.45C1.85001 32.4313 2.23983 33.3724 2.93371 34.0663C3.6276 34.7602 4.56871 35.15 5.55001 35.15H31.45C32.4313 35.15 33.3724 34.7602 34.0663 34.0663C34.7602 33.3724 35.15 32.4313 35.15 31.45Z"
      stroke="#1F878D"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill} // Directly passing fill as a prop
    />
    <Path
      d="M12.95 24.05C12.95 23.0687 13.3398 22.1276 14.0337 21.4337C14.7276 20.7399 15.6687 20.35 16.65 20.35H20.35C21.3313 20.35 22.2724 20.7399 22.9663 21.4337C23.6602 22.1276 24.05 23.0687 24.05 24.05V35.15H12.95V24.05Z"
      stroke="#1F878D"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill} // Directly passing fill as a prop
    />
  </Svg>
);

export default HomeSvg;
