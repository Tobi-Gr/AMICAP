import Svg, { SvgUri } from 'react-native-svg';
import React, { FC } from "react";
import { ViewStyle, View } from 'react-native';

// Define default URLs as an object with string keys
const defaultUrls: { [key: string]: string } = {
    home: "./../assets/icons/home.svg",
    settings: "./../assets/icons/settings.svg",
    profile: './../assets/icons/profile.svg',
    info: './../assets/icons/info.svg',
    contact: './../assets/icons/contact.svg',
    white_arrow: './../assets/icons/white_arrow.svg',
};



interface Props {
    styleContainer?: ViewStyle,
    iconType: string,
    customUrl?: string,
}

const Icon: FC<Props> = ({ styleContainer, iconType, customUrl }) => {
    // Determine the URL to use, either the custom one or the default based on iconType
    const url = customUrl || defaultUrls[iconType];

    if (!url) {
        // If no URL is found, return null or handle it in some way
        return null;
    }

    return (
        <View style={styleContainer}>
            <Svg height="50%" width="50%" viewBox="0 0 100 100">
                <SvgUri
                    width="100%"
                    height="100%"
                    uri={url}
                />
            </Svg>
        </View>
    );
};

export default Icon;
