import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
    color?: string;
  }

const Arrow: React.FC<Props> = ({ color, ...props }) => (
  <View style={styles.container}>
     <Svg
      width={37}
      height={37}
      fill="none"
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
