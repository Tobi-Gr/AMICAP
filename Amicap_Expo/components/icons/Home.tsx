import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Home: React.FC<Props> = ({ color = "currentColor", ...props }) => (
  <View style={styles.container}>
    <Svg
        width={37}
        height={37}
        fill="none"
        {...props}
    >
        <G
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#a)"
        >
        <Path d="M35.15 31.45V18.994a7.4 7.4 0 0 0-2.303-5.365L21.049 2.424a3.7 3.7 0 0 0-5.096 0l-11.8 11.205a7.4 7.4 0 0 0-2.303 5.365V31.45a3.7 3.7 0 0 0 3.7 3.7h25.9a3.7 3.7 0 0 0 3.7-3.7Z" />
        <Path d="M12.95 24.05a3.7 3.7 0 0 1 3.7-3.7h3.7a3.7 3.7 0 0 1 3.7 3.7v11.1h-11.1v-11.1Z" />
        </G>
        <Defs>
        <ClipPath id="a">
            <Path fill="currentColor" d="M0 0h37v37H0z" />
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

export default Home;
