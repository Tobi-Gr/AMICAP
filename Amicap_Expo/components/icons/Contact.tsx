import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface Props extends SvgProps {
  color?: string;
}

const Contact: React.FC<Props> = ({ color = "currentColor", ...props }) => (
  <View style={styles.container}>
    <Svg
    width={47}
    height={53}
    fill="none"
    viewBox="0 0 47 53"
    {...props}
  >
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill="#1F878D"
          d="M15.93 44.858a8.657 8.657 0 0 0-.064 3.96C5.836 47.399 0 40.297 0 33.37v-1.963c0-1.561.619-3.06 1.72-4.164a5.868 5.868 0 0 1 4.155-1.724h23.59a7.619 7.619 0 0 0 1.285 3.925H5.875c-.52 0-1.017.207-1.385.575a1.965 1.965 0 0 0-.573 1.388v1.963c0 4.92 4.261 10.208 12.012 11.488ZM19.582 0C22.44 0 25.18 1.137 27.2 3.162a10.81 10.81 0 0 1 3.154 7.634A10.81 10.81 0 0 1 27.2 18.43a10.758 10.758 0 0 1-7.617 3.163 10.758 10.758 0 0 1-7.616-3.163 10.81 10.81 0 0 1-3.155-7.634 10.81 10.81 0 0 1 3.155-7.634A10.758 10.758 0 0 1 19.583 0Zm0 3.926a6.846 6.846 0 0 0-4.846 2.012 6.879 6.879 0 0 0 0 9.716 6.846 6.846 0 0 0 9.693 0 6.879 6.879 0 0 0 0-9.716 6.846 6.846 0 0 0-4.847-2.012Zm14.038 19.948 1.108-2.945c1.01-2.67 4.16-3.989 6.815-2.854l1.52.652c1.852.793 3.388 2.23 3.709 4.161 1.79 10.698-7.473 25.915-18.134 29.798-1.927.699-4.011.157-5.66-.966l-1.355-.922a4.644 4.644 0 0 1-2.017-3.33 4.659 4.659 0 0 1 1.218-3.698l2.134-2.383a4.19 4.19 0 0 1 4.05-1.268l4.798 1.139c3.805-2.382 5.844-5.732 6.118-10.05l-3.439-3.377a3.692 3.692 0 0 1-.865-3.957Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width="1em" height="1em" fill="currentColor" />
      </ClipPath>
      <ClipPath id="b">
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

export default Contact;
