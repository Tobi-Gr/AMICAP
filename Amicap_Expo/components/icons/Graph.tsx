import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Graph: React.FC<Props> = ({ color = "currentColor", ...props }) => (
  <View style={styles.container}>
    <Svg
    width={33}
    height={37}
    fill="currentColor"
    viewBox="0 0 33 37"
    {...props}
  >
    <Path
      stroke="#1F878D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 24v3c0 1.867 0 2.8.363 3.513.32.627.83 1.137 1.457 1.457.712.363 1.645.363 3.508.363H31M1 24V4m0 20 6.428-5.355c2.724-2.27 4.514-2.037 6.865.315l.01.01c2.564 2.563 4.4 2.457 6.954.222L31 10.667"
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

export default Graph;
