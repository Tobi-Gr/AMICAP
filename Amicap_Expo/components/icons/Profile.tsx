import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Profile: React.FC<Props> = ({ color, ...props }) => (
  <View style={styles.container}>
        <Svg
      width={34}
      height={37}
      fill="none"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={2}
        d="M2.04 35.458v-1.884c0-6.244 5.023-11.305 11.22-11.305h7.48c6.197 0 11.22 5.061 11.22 11.305v1.884M17 16.616c-4.131 0-7.48-3.375-7.48-7.537 0-4.163 3.349-7.537 7.48-7.537s7.48 3.374 7.48 7.537c0 4.162-3.349 7.537-7.48 7.537Z"
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

export default Profile;
