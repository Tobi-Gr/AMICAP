import React,{FC} from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

interface Props{
    text:string
}

const BotonTexto: FC<Props> = ({text}) => (
<SafeAreaView style={styles.container}>
<View>
    <Text style={styles.title}>
    </Text>
    <Button title={text} onPress={() => Alert.alert('Se ha presionado!')}
    />
</View>
</SafeAreaView>
);

const styles = StyleSheet.create({
container: {
flex: 1, justifyContent: 'center',
marginHorizontal: 16,
},
title: {
textAlign: 'center', marginVertical: 8,
},
});

export default BotonTexto;
