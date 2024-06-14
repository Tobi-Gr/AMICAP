import React,{FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface promps{
    text:string
}
const Texto: React.FC<promps> = ({ text }) => {
    return (
      <Text>{text}</Text>
    );
  }

  const styles = StyleSheet.create({
    bodyText: {fontFamily: 'Montserrat-Regular.ttf', fontSize: 20, },
    });
  
export default Texto;