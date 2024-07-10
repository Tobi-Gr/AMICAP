import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Desplegable: React.FC<Props> = ({ color, ...props }) => (
  <View style={styles.container}>
      <Svg
      width={16}
      height={9}
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M7.158 8.486a1 1 0 0 0 1.414 0l6.364-6.364A1 1 0 1 0 13.522.708L7.865 6.365 2.208.708A1 1 0 0 0 .794 2.122l6.364 6.364Zm-.293-1.594v.887h2v-.887h-2Z"
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

export default Desplegable;
