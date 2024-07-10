import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Settings: React.FC<Props> = ({ color, ...props }) => (
  <View style={styles.container}>
    <Svg
      width={39}
      height={39}
      fill="none"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.057 3.707c.876-3.61 6.01-3.61 6.886 0a3.543 3.543 0 0 0 5.289 2.191c3.172-1.932 6.804 1.698 4.872 4.872a3.542 3.542 0 0 0 2.189 5.287c3.61.876 3.61 6.01 0 6.886a3.543 3.543 0 0 0-2.191 5.289c1.932 3.172-1.698 6.804-4.872 4.872a3.542 3.542 0 0 0-5.287 2.189c-.876 3.61-6.01 3.61-6.886 0a3.543 3.543 0 0 0-5.289-2.191c-3.172 1.932-6.804-1.698-4.872-4.872a3.543 3.543 0 0 0-2.189-5.287c-3.61-.876-3.61-6.01 0-6.886a3.543 3.543 0 0 0 2.191-5.289C3.966 7.596 7.596 3.964 10.77 5.896a3.54 3.54 0 0 0 5.287-2.189Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.333 19.5a6.167 6.167 0 1 0 12.334 0 6.167 6.167 0 0 0-12.334 0Z"
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

export default Settings;
