import React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
  width?: number;
  height?: number;
}

const Contact: React.FC<Props> = ({ color = "#000", width = 33, height = 37, ...props }) => (
  <View style={[styles.container, { width, height }]}>
    <Svg
      width={width}
      height={height}
      viewBox="0 0 33 37"
      fill={color}
      style={styles.svg}
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M11.184 31.316a6.01 6.01 0 0 0-.044 2.765C4.097 33.09 0 28.131 0 23.296v-1.37c0-1.09.435-2.136 1.208-2.907a4.132 4.132 0 0 1 2.917-1.204h16.563c.042.973.35 1.921.902 2.74H4.125c-.365 0-.714.145-.972.402a1.368 1.368 0 0 0-.403.969v1.37c0 3.434 2.992 7.126 8.434 8.02ZM13.75 0c2.006 0 3.93.794 5.348 2.208a7.524 7.524 0 0 1 2.215 5.329 7.524 7.524 0 0 1-2.215 5.33 7.575 7.575 0 0 1-5.348 2.207 7.575 7.575 0 0 1-5.348-2.207 7.524 7.524 0 0 1-2.214-5.33c0-1.999.796-3.916 2.215-5.33A7.575 7.575 0 0 1 13.75 0Zm0 2.74a4.82 4.82 0 0 0-3.403 1.406 4.788 4.788 0 0 0 0 6.782 4.82 4.82 0 0 0 6.806 0 4.788 4.788 0 0 0 0-6.782A4.82 4.82 0 0 0 13.75 2.74Zm9.856 13.926.778-2.055c.71-1.864 2.92-2.785 4.785-1.993l1.067.455c1.301.554 2.379 1.557 2.604 2.905 1.257 7.469-5.247 18.092-12.732 20.803-1.353.488-2.816.11-3.974-.675l-.951-.644a3.25 3.25 0 0 1-1.416-2.324 3.234 3.234 0 0 1 .855-2.581l1.498-1.664a2.943 2.943 0 0 1 2.844-.885l3.369.794c2.67-1.662 4.103-4.001 4.295-7.016l-2.414-2.357a2.573 2.573 0 0 1-.608-2.763Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M0 0h33v37H0z" />
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
  svg: {
    position: 'absolute',
    top: '25%',
    left: '28%',
    transform: [{ translateX: -16.5 }, { translateY: -18.5 }], // Mitad del alto y ancho del SVG
  },
});

export default Contact;
