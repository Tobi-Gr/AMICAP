import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg"
const Add = (props: SvgProps) => (
  <Svg
    width="32"
    height="30"
    fill="none"
    viewBox="0 0 32 30"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 1.765v26.47M30.118 15H1.882"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width="1em" height="1em" fill="currentColor" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Add