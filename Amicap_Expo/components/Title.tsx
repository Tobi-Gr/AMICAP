import React,{FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface promps{
    text:string,
}
const Titulo: React.FC<promps> = ({ text }) => {
    return (
      <Text>{text}</Text>
    );
  }

  const styles = StyleSheet.create({
    bodyText: {fontFamily: 'FiraSans-Regular.ttf', fontSize: 40 }
    });
  
export default Titulo;