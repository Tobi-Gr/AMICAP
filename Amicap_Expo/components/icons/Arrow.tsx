import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
    color?: string;
    height?: number,
    width?: number;
  }

const Arrow: React.FC<Props> = ({ color, width = 37, height = 37,...props }) => (
  <View style={styles.container}>
     <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 37 37"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.958 7.708 6.167 18.5m0 0 10.791 10.792M6.167 18.5h24.666"
      />
    </Svg>
  </View>
  
)

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Arrow;
