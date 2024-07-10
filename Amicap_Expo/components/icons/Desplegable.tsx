import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Desplegable: React.FC<Props> = ({ color = "currentColor", ...props }) => (
  <View style={styles.container}>
    <Svg
        width={27}
        height={25}
        fill="none"
        viewBox="0 0 27 25"
        {...props}
    >
        <G clipPath="url(#a)">
        <Path
            fill="#F4FDFD"
            d="M13.158 18.486a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 1 0-1.414-1.414l-5.657 5.656-5.657-5.656a1 1 0 1 0-1.414 1.414l6.364 6.364Zm-.293-1.594v.887h2v-.887h-2Z"
        />
        </G>
        <Defs>
        <ClipPath id="a">
            <Rect width="1em" height="1em" fill="currentColor" />
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

export default Desplegable;
