// Icono.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
//import HomeSvg from './../assets/icons/Home.tsx'; // Example import

type IconType = 'home' | 'settings' | 'profile';

interface IconoProps {
  type: IconType;
  color?: string;
  width?: number;
  height?: number;
}

const Icono: React.FC<IconoProps> = ({ type, color = 'black', width = 24, height = 24 }) => {
  let SvgComponent;

  switch (type) {
    case 'home':
//      SvgComponent = HomeSvg;
      break;
    // Add cases for other icons here
    default:
      SvgComponent = null;
      break;
  }

  if (!SvgComponent) {
    return null; // Handle the case where the icon type is not defined
  }

  return (
    <View style={styles.container}>
      <SvgComponent width={width} height={height} fill={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icono;
