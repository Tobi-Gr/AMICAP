import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}
//Arreglar después
const Graph: React.FC<Props> = ({ color, ...props }) => (
  <View style={styles.container}>
    <Svg
    width={33}
    height={33}
    fill={color}
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 22v3c0 1.867 0 2.8.363 3.513.32.627.83 1.137 1.457 1.457.712.363 1.645.363 3.508.363H31M1 22V2m0 20 6.428-5.355c2.724-2.27 4.514-2.037 6.865.315l.01.01c2.564 2.563 4.4 2.457 6.954.222L31 8.667"
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
