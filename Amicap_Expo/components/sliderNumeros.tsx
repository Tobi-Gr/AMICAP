import React, { FC, useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Colores } from '../constants/Colors';
import { Slider, Text, Icon } from '@rneui/themed';
import Texto from "./Texto";
import Settings from "./icons/Settings";
//https://reactnativeelements.com/docs/components/slider
type SlidersComponentProps = {};

const SliderNumeros: React.FunctionComponent<SlidersComponentProps> = () => {    
    const [value, setValue] = useState(0);
    return (
        <View>
            <Slider
                value={value}
                onValueChange={setValue}
                maximumTrackTintColor={Colores.negro}
                minimumTrackTintColor={Colores.celeste}
                maximumValue={10}
                minimumValue={4}
                step={1}
                allowTouchTrack
                trackStyle={{ height: 4}}
                thumbStyle={{ height: 20, width: 20, backgroundColor: Colores.celeste }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
});
export default SliderNumeros;