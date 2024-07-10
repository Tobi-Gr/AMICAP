import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Info: React.FC<Props> = ({ color = "currentColor", ...props }) => (
  <View style={styles.container}>
    <Svg
        width={37}
        height={37}
        fill="currentColor"
        viewBox="0 0 37 37"
        {...props}
    >
        <G clipPath="url(#a)">
        <G strokeWidth={2} clipPath="url(#b)">
            <Path
            stroke="currentColor"
            d="M18.5 35.059c9.145 0 16.559-7.414 16.559-16.559 0-9.145-7.414-16.559-16.559-16.559-9.145 0-16.559 7.414-16.559 16.559 0 9.145 7.414 16.559 16.559 16.559Z"
            />
            <Path stroke="currentColor" strokeLinecap="round" d="M18.5 10.22h.017" />
            <Path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.188 16.844H18.5v8.28m-3.312 0h6.624"
            />
        </G>
        </G>
        <Defs>
        <ClipPath id="a">
            <Rect width="1em" height="1em" />
        </ClipPath>
        <ClipPath id="b">
            <Rect width="1em" height="1em" />
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
