import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Ex: React.FC<Props> = ({ color = "currentColor", ...props }) => (
  <View style={styles.container}>
    <Svg
      width={32}
      height={30}
      fill="none"
      viewBox="0 0 32 30"
      {...props}
      style={{ transform: [{ rotate: '45deg' }] }}
    >
      <G clipPath="url(#a)">
        <Path
          stroke={color}
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 1.765v26.47M30.118 15H1.882"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width="32" height="30" fill="none" />
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

export default Ex;
