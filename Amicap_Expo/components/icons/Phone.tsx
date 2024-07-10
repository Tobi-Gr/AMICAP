import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Phone: React.FC<Props> = ({ color, ...props }) => (
  <View style={styles.container}>
    <Svg
        width={37}
        height={37}
        fill={color}
        viewBox="0 0 37 37"
        {...props}
    >
        <Path
        fill={color}
        d="m25.882 5.58-1.088-.712a1.5 1.5 0 0 0-2.077.433l-3.006 4.59a1.5 1.5 0 0 0 .433 2.076l3.182 2.085a1.473 1.473 0 0 1 .616 1.608 16.943 16.943 0 0 1-5.871 8.963 1.474 1.474 0 0 1-1.72.077l-3.183-2.083a1.5 1.5 0 0 0-2.076.432l-3.007 4.59a1.5 1.5 0 0 0 .433 2.077l1.088.713a9.001 9.001 0 0 0 11.69-1.582l1.496-1.702a34.5 34.5 0 0 0 5.348-8.164l.962-2.052a9.002 9.002 0 0 0-3.22-11.348Z"
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

export default Phone;
