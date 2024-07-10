import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const LogOut: React.FC<Props> = ({ color, ...props }) => (
  <View style={styles.container}>
       <Svg
      width={38}
      height={36}
      fill="none"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22.845 10.154V6.23c0-1.04-.405-2.039-1.126-2.774A3.807 3.807 0 0 0 19 2.307H5.542c-1.02 0-1.998.414-2.72 1.15A3.964 3.964 0 0 0 1.697 6.23v23.538c0 1.04.406 2.039 1.127 2.774.72.736 1.699 1.15 2.719 1.15H19c1.02 0 1.998-.414 2.719-1.15a3.964 3.964 0 0 0 1.126-2.774v-3.923M13.232 18h23.072m0 0-5.768-5.885M36.304 18l-5.768 5.885"
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

export default LogOut;