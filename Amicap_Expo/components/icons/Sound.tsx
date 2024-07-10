import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Sound: React.FC<Props> = ({ color, ...props }) => (
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
        d="M25 12.813c2.166 2.889 2.166 8.485 0 11.374m4.875-17.062c6.48 6.188 6.52 16.603 0 22.75M2.25 23.308V13.69c0-.933.728-1.69 1.625-1.69h5.827a1.593 1.593 0 0 0 1.15-.496L15.725 6c1.024-1.066 2.774-.31 2.774 1.196v22.61c0 1.518-1.771 2.267-2.789 1.18l-4.858-5.475A1.592 1.592 0 0 0 9.689 25H3.875c-.897 0-1.625-.757-1.625-1.692Z"
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sound;
