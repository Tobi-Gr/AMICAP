import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';interface Props extends SvgProps {
  color?: string;
}

const Check: React.FC<Props> = ({ color = "currentColor", ...props }) => (
  <Svg
    width={32}
    height={30}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#1F878D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 16.857 8.571 8.572L31 4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Check