import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Info: React.FC<Props> = ({ color, ...props }) => (
  <View style={styles.container}>
      <Svg
      width={37}
      height={37}
      fill="none"
      {...props}
    >
      <G stroke={color} strokeWidth={2} clipPath="url(#a)">
        <Path d="M18.5 35.059c9.145 0 16.559-7.414 16.559-16.559 0-9.145-7.414-16.559-16.559-16.559-9.145 0-16.559 7.414-16.559 16.559 0 9.145 7.414 16.559 16.559 16.559Z" />
        <Path strokeLinecap="round" d="M18.5 10.22h.017" />
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.188 16.844H18.5v8.28m-3.312 0h6.624"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M0 0h37v37H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Info;
