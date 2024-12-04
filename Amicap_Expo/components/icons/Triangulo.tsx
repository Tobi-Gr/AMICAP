import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
    color?: string;
    width?: number;
    height?: number;
}

const Triangulo: React.FC<Props> = ({ color = "#000", width = 27, height = 25, ...props }) => (
    <Svg
        width={width}
        height={height}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
        <Path
            fill={color}
            d="M13.158 18.486a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 1 0-1.414-1.414l-5.657 5.656-5.657-5.656a1 1 0 1 0-1.414 1.414l6.364 6.364Zm-.293-1.594v.887h2v-.887h-2Z"
        />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill={color} d="M0 0h27v25H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Triangulo