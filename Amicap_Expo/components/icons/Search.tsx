import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
    color?: string;
    height?: number,
    width?: number;
  }

  const Search: React.FC<Props> = ({ color = "currentColor", width = 33, height = 37, ...props }) => (
    <Svg
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m24.375 26.375-3.925-3.932m2.175-5.256a7.438 7.438 0 1 1-14.875 0 7.438 7.438 0 0 1 14.875 0Z"
    />
  </Svg>
)
export default Search;
