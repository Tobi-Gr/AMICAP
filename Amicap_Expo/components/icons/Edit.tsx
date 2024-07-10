import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Edit: React.FC<Props> = ({ color = "currentColor", ...props }) => (
  <View style={styles.container}>
    <Svg
        width={37}
        height={37}
        fill="none"
        viewBox="0 0 37 37"
        {...props}
    >
        <G fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <Path
            fill="#1F878D"
            d="M7.494 22.401a.95.95 0 0 1 .268-.526L26.91 2.727a.95.95 0 0 1 1.343 0l7.391 7.39a.95.95 0 0 1 0 1.342l-19.152 19.15a.95.95 0 0 1-.526.266l-8.73 1.341a.95.95 0 0 1-1.084-1.083l1.342-8.732Zm1.831.597L8.23 30.142l7.142-1.099 18.257-18.255-6.048-6.046L9.325 22.998Z"
        />
        <Path
            fill="currentColor"
            d="m29.397 15.529-6.72-6.707 1.343-1.345 6.718 6.707-1.341 1.345Z"
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

export default Edit;
